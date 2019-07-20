import mongoose from 'mongoose'

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  img: { type: String, required: true },
  postId: { type: ObjectId, ref: 'Post', required: true }

}, { timestamps: true })

export default mongoose.model('Comment', _schema)