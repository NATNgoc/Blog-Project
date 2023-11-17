const express = require('express')
const compression = require('compression')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()


//init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
//init db
require('./dbs/init.mongodb')
//init app route
require('./routes/index')(app)


// hanlde error
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    console.error(error)
    return res.status(statusCode).json({
        error: true,
        code: statusCode,
        message: error.message
    })
})

module.exports = app