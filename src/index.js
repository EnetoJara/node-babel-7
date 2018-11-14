import express from 'express'
import bodyParse from 'body-parser'
import mongoose from 'mongoose'
import passport from 'passport'
import path from 'path'

import indexRoute from './routes/indexRoutes'
import users from './routes/users'
import profile from './ṕrofiles'
import posts from './routes/profiles'

import { mongoURI } from './config/keys'

const app = express()

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())


app.use('/api', indexRoute)

app.listen(3000, () => console.log('http://locolhost:3000/'))