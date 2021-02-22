//require mongoose
const mongoose = require("mongoose");
const multer = require("multer");
const studentModel = require("../model/model");


// creating funtions that handles images
// storage function
const storage = multer.diskStorage({
  destination:function (req,res, cb){
    cb(null, "./uploads")
  },
  filename: function(req,file, cb){
    cb(null, file.originalname);
  }
})
//upload function 
const uploadImg

//creating functions for our routes
const newStudent = async (req, res)=>{
  try{
    const student = await studentModel.create({
      name: req.body.name,
      Course: req.body.Course,
      Picture: req.file.Picture
    })
    res.json({student})
  } catch (error){
    res.status(400).json({message: error.message})
  }
}

// function that gets all students
// function to create a new student;
const getAllStudent = async (req,res)=>{
  try{
    const allStudent = await studentModel.find();
    res.json(allStudent)
  } catch (error){
    res.status(500).json({message: error.message})
  }
}

const getSingleStudent = async(req,res)=>{
  try{
    const Student = await studentModel.findById(req.params.id)
    res.json(Student);
  } catch (error){
    res.status(500).json({message: error.message})
  }
}

// function to delete a student
const  delStudent = async (req, res)=>{
  try{
    const del = await studentModel.deleteOne(req.params.id)
    res.json({message:"user has been deleted"})
  } catch (error){
    res.status(500).json({message: error.message})
  }
}

// function to delete all student
const  delAllStudent = async (req, res)=>{
  try{
    const del = await studentModel.deleteMany()
    res.json({message:"all user has been deleted"})
  } catch (error){
    res.status(500).json({message: error.message})
  }
}

// function to update a student
const UpdateStudent = async (req, res)=>{
  try{
    const getId = await studentModel.findById()
  } catch(error){
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  newStudent,
  getAllStudent,
  getSingleStudent
}