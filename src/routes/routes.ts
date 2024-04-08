import express from 'express'
import {UserController} from "../controllers/userController";

const router = express.Router()

router.get('/api/ping', (req, res) => {
    res.send('pong')
});

router.get('/api/user', UserController.getUser);

router.post('/api/user',  UserController.createUser);

router.put('/api/user',  UserController.updateUser);


export default router
