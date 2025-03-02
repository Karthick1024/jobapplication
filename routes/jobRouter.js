import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  createJob,
  editJob,
  deleteJob,
  getJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .put(checkForTestUser, validateJobInput, editJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
