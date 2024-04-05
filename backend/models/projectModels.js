import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  githubRepo: {
    type: String,
    trim: true, 
  },
  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});


const Project = mongoose.model('Project' , projectSchema );

export default Project;
