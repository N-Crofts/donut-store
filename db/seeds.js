const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/donut-shop', { useNewUrlParser: true })

const Schema = require('./schema')

const Donut = Schema

const oldSchoolGlaze = new Donut ({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})