import { Router } from "express";
import { registerAdmin, loginAdmin } from "../controllers/admin.controller.js";
import { adminAuth } from "../middleware/auth.middleware.js";

const router = Router();

// Public
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected test route
router.get("/me", adminAuth, (req, res) => {
  res.json({
    message: "Admin authenticated",
    admin: req.admin
  });
});

export default router;
