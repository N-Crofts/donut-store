const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DonutSchema = new Schema ({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const DonutModel = mongoose.model('Donut', DonutSchema)

module.exports = {
    Donut: DonutModel 
}