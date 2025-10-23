const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const NotesModel = require("../models/notes.model");

const NotesRouter = express.Router();



NotesRouter.post("/add-notes", authMiddleware,async (req,res)=>{
    try{
     let note = await NotesModel.create({...req.body, userId:req.user});
     res.status(200).json({message:"Note Added", note})
    }catch(err){
        res.status(500).json({ message: "Something went wrong" });
    }
})


NotesRouter.get("/allnotes",authMiddleware ,async(req,res)=>{
    
    try{
        let notes = await NotesModel.find({userId:req.user});
        res.status(200).json({message:"Notes List",notes})
       }catch(err){
           res.status(500).json({ message: "Something went wrong" });
       }
})
module.exports = NotesRouter;
