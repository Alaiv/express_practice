import Router from 'express';
import UserController from "../controllers/user-controller.js";

const router = new Router();

router.get('/users', UserController.getUsers)

router.get('/users/:id', UserController.getUser)

router.post('/users', UserController.addUser)

router.put('/users', UserController.updateUser)

router.delete('/users/:id', UserController.deleteUser)

export default router;

