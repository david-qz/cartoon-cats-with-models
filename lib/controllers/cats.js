const { Router } = require('express');
const Cat = require('../models/Cat');

const router = new Router();

router
  .get('/:id', (req, res) => {
    // const data = cats.find(x => x.id === req.params.id);
    // res.json(data);
    res.json('Not yet implemented.');
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const ids = cats.map(cat => ({ id: cat.id, name: cat.name }));
    res.json(ids);
  });

module.exports = router;
