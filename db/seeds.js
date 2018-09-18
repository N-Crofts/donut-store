const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/donut-shop', { useNewUrlParser: true })

const Schema = require('./schema')

const { Donut } = Schema

const sprinkles = new Donut({

            name: "Sprinkles",
            description: "A lotta sprinkles, a lotta yum.",
            img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png"
            
})

const plain = new Donut({

            name: "Plain Ole Donut",
            description: "Plain donut for plain people.",
            img: "https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg"
})         

const chocolate = new Donut({

            name: "Chocolate",
            description: "Chocolate Donut nom nom nom",
            img: "https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg"
          
})

const holes = new Donut({

            name: "Donut Holes",
            description: "For the snackers.",
            img: "http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg"
})

Donut.deleteMany()
    .then(() => {
        return donut.insertMany([sprinkles, plain, chocolate, holes])
    })
    .then(() => {
        mongoose.connection.close()
    })

