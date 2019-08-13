import { Schema, model } from 'mongoose';

const PostSchema = Schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  message: {
    type: String,
  },
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File',
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = model('Post', PostSchema);

export default Post;
