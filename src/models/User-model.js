import EntityDataLayer from "../data/EntityDataLayer.js";


class User {
    static id = 1;
    constructor({login, password}) {
        this.login = login;
        this.password = password;
        this.id = User.id;
        User.id++;
    }

}

export default new EntityDataLayer(User);