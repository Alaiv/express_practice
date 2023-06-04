class EntityDataLayer {
    constructor(Entity) {
        this._entities = [];
        this._Entity = Entity;
    }

    getAll = () => this._entities;

    addOne = (data) => {
        const newEntity = new this._Entity(data);
        this._entities.push(newEntity);

        return newEntity;
    }
    getById = (id) => {
        return this._entities.find(u => u.id.toString() === id)
    };

    update = (data) => {
        const index = this._entities.findIndex(u => +u.id === +data.id);
        this._entities[index] = {...this._entities[index], ...data};

        return this._entities[index];
    }
    deleteUser = (id) => {
        this._entities = this._entities.filter(u => +u.id !== +id);

        return this._entities;
    }
}


export default EntityDataLayer;