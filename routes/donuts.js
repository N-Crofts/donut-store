var express = require('express');
var router = express.Router();
const { Donut } = require('../db/schema')


// INDEX, SHOW ALL
router.get('/', (req, res) => {
  Donut.find()
    .then((donuts) => {
      res.render('donuts/index', { donuts })
    })
})

// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
  res.render('donuts/new')
})

// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
  Donut.findById(req.params.id)
  .then((donut) => {
    res.render('donuts/show', { donut })
  })
})

// EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  Donut.findById(req.params.id)
  .then((donut) => {
    res.render('donuts/edit', { donut })
  })
})

// CREATE
router.post('/', (req, res) => {
  Donut.create(req.body)
    .then((donut) => {
      res.redirect(`/donuts/${donut._id}`)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
  Donut.findByIdAndUpdate(req.params.id, req.body)
    .then((donut) => {
      res.redirect(`/donuts/${donut._id}`)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  Donut.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/donuts')
  })
})

module.exports = router;
