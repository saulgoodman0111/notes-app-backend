import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export const notesModel = mongoose.model("Notes", NotesSchema);
export default notesModel;
