import { Router } from "express";
import {
  signUp,
  login,
  logout,
  getProfile,
} from "../controllers/auth.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { signUpValidator, loginValidator} from "../validators/auth.validator.js";

const router = Router();

router.post("/signup", signUpValidator, signUp);
router.post("/login", loginValidator, login);
router.get("/logout", logout);
router.get("/profile", isLoggedIn, getProfile);

export default router;
