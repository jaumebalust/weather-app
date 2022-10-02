const express = require('express')
const weather = require('./utils/weather')

const app = express()
const port = process.env.PORT || 3000

app.get('',(req,res) => {
    res.send('Hello express!')
})

app.get('/help',(req,res) => {
    res.send('Help page.')
})

app.get('/weather',(req,res) => {
    let search = req.query.search
    weather(search,(error,weather)=>{
        if (error){
            //res.send(error)
        }
        res.send(weather)
    })

})

app.get('/about',(req,res) => {
    res.send('<h1>About page.</h1>')
})

app.listen(port , () => {
    console.log('Server is up on port '+port)
})
