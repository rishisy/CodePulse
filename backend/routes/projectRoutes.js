import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { createProject, getProjects } from '../controllers/projectController.js';

// /api/projects/
router.get('/', protect, getProjects)
//router.get('/:id', authProject , showProject)
router.post('/', protect, createProject)
//router.put('/:id' , authProject ,  updaateProject)
//router.delete('/:id' ,  protect ,authProject ,  deleteProject)



export default router;
