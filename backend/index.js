import express from 'express'
import conn from './bd/conn.js'

import AnnotationRoutes from './routes/AnnotationRoutes.js'
import TechnologyRoutes from './routes/TechnologyRoutes.js'

const app = express()

// body parser
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

// static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Success"
    })
})

app.use('/annotation', AnnotationRoutes)
app.use('/technology', TechnologyRoutes)

app.listen(3000)