const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();


const pathToFile = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname , '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pathToFile))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Meal Booking App'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'Meal Booking App'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Meal Booking App'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error : 'Error 404 : Page Not Found'
    })
})

app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})