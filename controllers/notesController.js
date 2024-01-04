import notesModel from "../models/notesModel.js";

export const getNotesController = async (req, res) => {
  try {
    const notes = await notesModel.find({});
    return res.status(201).send({
      success: true,
      message: "NOTES FETCHED SUCCESSFULLY!!",
      notes,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "ERROR IN GET NOTES API!!",
    });
  }
};

export const getNotesByIDController = async (req, res) => {
  try {
    const note = await notesModel.findbyId(req.params.id);
    if (!note) {
      return res.status(404).send({
        success: "false",
        message: "Note not found!!",
      });
    }
    // res.status(201).send({
    //   success: "true",
    //   message: "Note fetched successfully!!",
    //   note,
    // });
    res.send({
      title: note.title,
      content: note.content,
      created: note.date,
    });
  } catch (error) {
    res.status(500).send({
      success: "false",
      message: "ERROR IN GET NOTES API!!",
    });
  }
};

export const createNotesController = async (req, res) => {
  try {
    const { title, content } = req.body;
    await notesModel.create({
      title,
      content,
    });
    return res.status(201).send({
      success: true,
      message: "NEW NOTE ADDED SUCCESSFULLY!!",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "ERROR IN CREATE NOTE API!!",
    });
  }
};

export const updateNotesController = async (req, res) => {
  try {
    const note = await notesModel.findById(req.params.id);
    if (!note) {
      return res.status(404).send({
        success: "false",
        message: "Note not found!!",
      });
    }
    if (req.body.title) note.title = req.body.title;
    if (req.body.content) note.content = req.body.content;
    const updatedNote = await note.save();
    return res.status(201).send({
      success: true,
      message: "NOTE UPDATED SUCCESSFULLY!!",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "ERROR IN UPDATE NOTE API!!",
    });
  }
};

export const deleteNotesController = async (req, res) => {
  try {
    const note = await notesModel.findById(req.params.id);
    if (!note) {
      return res.status(404).send({
        success: false,
        message: "NOTE NOT FOUND",
      });
    }
    await note.deleteOne();
    return res.status(201).send({
      success: true,
      message: "NOTE SUCCESSFULLY DELETED!",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "ERROR IN DELETE NOTES API!!",
    });
  }
};
