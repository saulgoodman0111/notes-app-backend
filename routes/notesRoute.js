import express from "express";
import {
  createNotesController,
  deleteNotesController,
  getNotesByIDController,
  getNotesController,
  updateNotesController,
} from "../controllers/notesController.js";
const router = express.Router();

/* CREATING ROUTES */

// GET NOTES //
router.get("/get", getNotesController);

// GET NOTES BY ID //
router.get("/:id", getNotesByIDController);

// CREATE NOTES //
router.post("/create", createNotesController);

// UPDATE NOTES //
router.put("/update/:id", updateNotesController);

// DELETE NOTES //
router.delete("/delete/:id", deleteNotesController);

export default router;
