import User from "../models/User-model.js";

class UserService {

    getUsers() {
        return User.getAll();
    }

    getUser(id) {
        if (!id) throw new Error('Не указан id')
        return User.getById(id);
    }

    addUser(data) {
        if (!data) throw new Error('Отсутствуют данные');
        return User.addOne(data)
    }

    updateUser(data) {
        if (!data) throw new Error('Отсутствуют данные');
        return User.update(data);
    }

    deleteUser(id) {
        if (!id) throw new Error('Не указан id')
        return User.deleteUser(id);
    }

}

export default new UserService();