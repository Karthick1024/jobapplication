import { Router } from "express";

const router = Router();

import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validLoginInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validLoginInput, login);
router.get("/logout", logout);

export default router;
