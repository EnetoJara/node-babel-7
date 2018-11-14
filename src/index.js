import express from 'express'
import bodyParse from 'body-parser'

import indexRoute from './routes/indexRoutes'

const app = express()
app.use(bodyParse.json())

app.use('/api', indexRoute)

app.listen(3000, () => console.log('http://locolhost:3000/'))