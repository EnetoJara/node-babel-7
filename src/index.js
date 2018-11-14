import express from 'express'
import bodyParse from 'body-parser'
import mongoose from 'mongoose'
import passport from 'passport'
import path from 'path'

import indexRoute from './routes/indexRoutes'
import users from './routes/users'
import profile from './routes/profiles'
import posts from './routes/posts'

import { mongoURI } from './config/keys'

const app = express()

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

// Use Routes
app.use('/api', indexRoute)
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

app.listen(3000, () => console.log('http://locolhost:3000/'))
