import  express from 'express';
const router = express.Router();
import {
    authUser ,    
    registerUser ,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';


// /api/users/
router.post('/' , registerUser);
router.post('/auth' , authUser)
router.post('/logout' , logoutUser)

router.post('/auth' , authUser)

router.route('/profile').get(getUserProfile).put(protect , updateUserProfile);





export default router;
