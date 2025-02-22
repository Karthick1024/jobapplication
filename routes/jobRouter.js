import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  createJob,
  editJob,
  deleteJob,
  getJob,
} from "../controllers/jobController.js";
import { validateJobInput,validateIdParam } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam,getJob)
  .put(validateJobInput, editJob)
  .delete(validateIdParam,deleteJob);

export default router;
