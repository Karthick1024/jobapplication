import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customError.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const error = validationResult(req);

      if (!error.isEmpty()) {
        const errormessages = error.array().map((error) => error.msg);
        throw new BadRequestError(errormessages);
      }

      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3,max:50 })
      .withMessage("Name must be between 3 and 50 characters long").trim()
  ],
]);
