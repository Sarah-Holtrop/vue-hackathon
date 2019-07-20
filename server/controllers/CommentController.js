//addComment, deleteComment,
//editPost, deletePost, 

import express from 'express'
import _postsService from '../services/PostsService'
import _commentService from '../services/CommentService'

export default class CommentController {
  constructor() {
    this.router = express.Router()
      //api/comments + postId or whatever
      //.get('/:postId', this.getCommentsByPost)
      .post('', this.addComment)
      .put('/:commentId', this.editComment)
      .delete('/:commentId', this.deleteComment)
  }

  async addComment(req, res, next) {
    try {
      let comment = await _commentService.create(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async editComment(req, res, next) {
    try {
      let editedComment = await _commentService.findByIdAndUpdate(req.params.commentId, req.body, { new: true })
      res.send(editedComment)
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
