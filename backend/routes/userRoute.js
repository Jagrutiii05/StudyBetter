import express from 'express';
import { getProfile, login, logout, register, updateProfile } from '../controllers/userController.js';
import isAuthenticated from '../middleware/authenticate.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile/:userId').get(getProfile);
router.route('/logout').get(logout);
router.route('/profile/update').post(isAuthenticated, updateProfile);

export default router;