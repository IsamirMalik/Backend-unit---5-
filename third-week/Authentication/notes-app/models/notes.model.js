const mongoose = requrie("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});


const NotesModel = mongoose.model("Note", noteSchema);

module.exports = NotesModel;