const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/donut-shop', { useNewUrlParser: true })

const Schema = require('./schema')

const Donut = Schema

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/donut-shop', { useNewUrlParser: true })

const Schema = require('./schema')

const Donut = Schema

const sprinkles = new Donut({

            name: "Sprinkles",
            description: "A lotta sprinkles, a lotta yum.",
            img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
            price: 5,
            qty: 99
})

const plain = new Donut({

            name: "Plain Ole Donut",
            description: "Plain donut for plain people.",
            img: "https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg",
            price: 25,
            qty: 15
})

const chocolate = new Donut({

            name: "Chocolate",
            description: "Chocolate Donut nom nom nom",
            img: "https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg",
            price: 7000,
            qty: 1
})

const holes = new Donut({

            name: "Donut Holes",
            description: "For the snackers.",
            img: "http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg",
            price: 10,
            qty: 23
})


Donut.deleteMany()
    .then(() => {
        return Donut.insertMany([sprinkles, plain, chocolate, holes])
    })
    .then(() => {
        mongoose.connection.close()
    })

