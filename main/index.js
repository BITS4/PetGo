

//////////////////////////
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.use(express.static('styles'))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    let data = {username: req.params.username, pets: ['Cat', 'Dog']}
    res.render('user', data)
})

app.get('/calendar', (req, res) => {
    res.render('calendar');
});

//PORT
const PORT = 3000 
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})