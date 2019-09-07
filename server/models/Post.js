import { Schema, model } from 'mongoose';
import mongooseAutopopulate from 'mongoose-autopopulate';

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
    autopopulate: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

PostSchema.plugin(mongooseAutopopulate);
const Post = model('Post', PostSchema);

export default Post;
