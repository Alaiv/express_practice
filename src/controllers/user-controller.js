import userService from "../services/userService.js";
import UserService from "../services/userService.js";

class UserController {
    getUsers(req, res) {
        try {
            res.status(200).json(userService.getUsers());
        } catch (e) {
            res.status(404).send('Пользователи не найдены')
        }

    }

    getUser(req, res) {
        try {
            const {id} = req.params;
            const user = UserService.getUser(id);
            res.status(200).json(user);
        } catch (e) {
            res.status(404);
            res.send(e.message)
        }
    }

    addUser(req, res) {
        try {
            const newUser = UserService.addUser(req.body)
            res.json(newUser);
        } catch (e) {
            res.status(400);
            res.send(e.message)
        }
    }

    updateUser(req, res) {
        try {
            const updatedUser = UserService.updateUser(req.body)
            res.json(updatedUser);
        } catch (e) {
            res.status(400);
            res.send(e.message)
        }
    }

    deleteUser(req, res) {
        try {
            const filteredUsers = UserService.deleteUser(req.params.id);
            res.json(filteredUsers);
        } catch (e) {
            res.status(400);
            res.send(e.message)
        }
    }
}

export default new UserController();