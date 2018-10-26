const express = require('express');
const router = express.Router();

router.get('/', function getIndexPage(req, res) {
    // let viewModel = req.viewModel;
    // viewModel.notes = store.get('notes');
    res.render('index.pug', []);
  });

//router.get('/', (req, res) => res.status(200).send('Hello World!'));


module.exports = router;