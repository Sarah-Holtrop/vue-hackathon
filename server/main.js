import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
import cors from 'cors'

import PostsController from './controllers/PostsController'

let port = 3000

let server = express()
server.use(cors())
server.use(bp.json())
server.use('/', express.static(__dirname + '/../public'))
server.use('/api/posts', new PostsController().router)

