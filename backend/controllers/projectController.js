import asyncHandler from 'express-async-handler';
import Project from '../models/projectModels.js';
import { Error } from 'mongoose';
// @desc  create a projct
// route POST /api/project/
    // @access Private

const createProject  =  asyncHandler(async (req,res) =>{
    console.log(req.body);

    const { name, description, teamMembers , githubRepo } = req.body;
    const projectExists = await Project.findOne({name});

    if (projectExists) {

        res.status(400);
        throw new Error("Project with same name already Exists");

    }

    const project = await Project.create({
        name,
        description,
        owner : req.user._id,
        teamMembers,
	githubRepo,
    });

    if (project){
        res.status(201).json({

            _id : project._id,
            name : project.name,
            description: project.description,
            owner : project.owner,
	    githubRepo:project.githubRepo,
            teamMembers : project.teamMembers,
        });
    }
    else{
        res.status(400);
        throw new Error('Invalid Project Data');
    }


});


const getProjects = asyncHandler(async (req, res) => {
  try {
    // Get the logged-in user's ID from authentication (replace with your logic)
    const userId = req.user._id/* replace with logic to retrieve logged-in user's ID */;

    // Filter projects based on user ID (owner or team member)
    const projects = await Project.find({
      $or: [{ owner: userId }, { teamMembers: { $in: [userId] } }],
    });

    if (!projects.length) {
      return res.status(200).json({ message: 'No projects found for this user' }); // Adjusted status code to 200
    }

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});



const getSingleProject  =  asyncHandler(async (req,res) =>{

    const project = await Project.findById(req.params.id);

    if (project){
        res.json(project);
    }
    else{
        res.status(404);
        throw new Error('Project not found');
    }

});
















export { createProject , getProjects };
