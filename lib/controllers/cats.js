const { Router } = require('express');
const CartoonCat = require('../models/Cat');

const router = new Router();

router
  .get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const cat = await CartoonCat.getById(id);
      res.json(cat);
    } catch (error) {
      error.status = 404;
      next(error);
    }
  })
  .get('/', async (req, res) => {
    const cats = await CartoonCat.getAll();
    const ids = cats.map(cat => ({ id: cat.id, name: cat.name }));
    res.json(ids);
  });

module.exports = router;
