import { Schema, model } from 'mongoose';

const FileSchema = Schema({
  name: {
    type: String,
  },
  originalName: {
    type: String,
  },
  mimeType: {
    type: String,
  },
  size: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const File = model('File', FileSchema);

export default File;
