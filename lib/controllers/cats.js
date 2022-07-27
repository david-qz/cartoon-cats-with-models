const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = new Router();

router
  .get('/:id', (req, res) => {
    const data = cats.find(x => x.id === req.params.id);
    res.json(data);
  })
  .get('/', (req, res) => {
    const data = cats.map(x => ({ id: x.id, name: x.name }));
    res.json(data);
  });

module.exports = router;
