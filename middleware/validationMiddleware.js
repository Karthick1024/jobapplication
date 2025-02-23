import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import { Job } from "../models/jobModel.js";
import {User} from "../models/userModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const error = validationResult(req);

      if (!error.isEmpty()) {
        const errormessages = error.array().map((error) => error.msg);
        if (errormessages[0].startsWith("No job")) {
          throw new NotFoundError(errormessages);
        }
        if(errormessages[0].startsWith('Not authorized')){
          throw new UnauthorizedError('Not authorized to access this route')
        }
        throw new BadRequestError(errormessages);
      }

      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid type value"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value,{req}) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError("Invalid MongoDB Id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`No job match in this id : ${value}`);
    const isAdmin = req.user.role === 'admin'
    const isOwner = req.user.userId === job.createdBy.toString()
    if(!isAdmin && !isOwner){
      throw new UnauthorizedError('Not authorized to access this route')
    }
    
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("User name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format ")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already exits");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at minimum 8 characters"),
  body("lastName").notEmpty().withMessage("Lastname is required"),
  body("location").notEmpty().withMessage("Location is required"),
]);

export const validLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid Email format"),
  body("password").notEmpty().withMessage("password is required"),
]);
