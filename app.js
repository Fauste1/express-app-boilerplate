if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

const indexRouter = require('./routes/index')

app.set('view engine', 'pug')
// check if below is needed
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use(express.urlencoded( {extended: true} ))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)