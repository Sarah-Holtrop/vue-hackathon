import express from 'express'
import _postsService from '../services/PostsService'
import _commentService from '../services/CommentService'

export default class PostsController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllPosts)
      .get('/:postId', this.getPostById)
      .get('/:postId/comments', this.getCommentsByPostId) // GET api/posts/:postId/comments
      .post('', this.createPost)
  }

  async getCommentsByPostId(req, res, next) {
    try {
      let comments = await _commentService.find({ postId: req.params.postId })
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async getAllPosts(req, res, next) {
    try {
      let posts = await _postsService.find()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  async getPostById(req, res, next) {
    try {
      let post = await _postsService.findById(req.params.postId)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }
  async createPost(req, res, next) {
    try {
      let newPost = await _postsService.create(req.body)
      res.send(newPost)
    } catch (error) {
      next(error)
    }
  }
}