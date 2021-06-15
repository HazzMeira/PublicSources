const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: get, post, put, delete
//Query params: req.query (filters, orders, paginations)
//Route params: req.params (id)
//Body params: req.body (create obj)

//MongoDB (Não-relacional)
routes.get('/', (req,res)=>{
    res.send('Hello World!');
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;