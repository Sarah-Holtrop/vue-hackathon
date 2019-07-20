//addComment, deleteComment,
//editPost, deletePost, 

import express from 'express'
import _postsService from '../services/PostsService'
import _commentService from '../services/CommentService'
import { runInNewContext } from 'vm'

export default class CommentController {
  constructor() {
    this.router = express.Router()
      .get('', this.getCommentsByPost)
      .post('', this.addComment)
      .delete('/:commentId', this.deleteComment)
  }
  async getCommentsByPost(req, res, next) {
    try {
      let comments = await _commentService.find({ post: req.params.postId })
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async addComment(req, res, next) {
    try {
      let comment = await _commentService.create(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async deleteComment(req, res, next) {
    try {
      let deletedComment = await _commentService.findByIdAndDelete(req.params.commentId)
      res.send('Comment deleted')
    } catch (error) {
      next(error)
    }
  }
}
