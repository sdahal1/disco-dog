const DogController = require("../controllers/dog.controller"); //module.exports in controllers is equal to an object without a name, so i can name it whatever here, so i named it dogcontroller

module.exports = (app) => {
    app.get('/api/dogs', DogController.index);
    app.get('/api/dogs/:id', DogController.show);
    app.post('/api/dogs/create', DogController.create);
    app.put('/api/dogs/update/:id', DogController.update);
    app.get('/api/dogs/destroy/:id', DogController.destroy);

} 