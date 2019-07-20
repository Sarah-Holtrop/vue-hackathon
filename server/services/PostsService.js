import mongoose from 'mongoose'

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, unique: true, required: true, maxlength: 150 },
  author: { type: String, unique: true, required: true }
}, { timestamps: true })

export default mongoose.model('Post', _schema)