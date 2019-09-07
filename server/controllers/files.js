/* eslint-disable no-underscore-dangle */
import path from 'path';
import _ from 'lodash';
import File from '../models/File';
import Post from '../models/Post';
import Response from '../utils/Response';
import archive from '../config/archiver';

class Files {
  static async uploadFile(req, res) {
    try {
      const { files } = req;
      const { from, to, message } = req.body;

      const loadedFiles = files.map(item => ({
        name: item.filename,
        originalName: item.originalname,
        mimetype: item.mimetype,
        size: item.size,
      }));

      const file = await File.insertMany(loadedFiles);
      const fileIds = [];
      file.forEach((element) => {
        fileIds.push(element._id);
      });

      const post = new Post({
        from,
        to,
        message,
        files: fileIds,
      });

      await post.save();
      const malone = await Post.populate(post, { path: 'files' });
      return Response.success(res, 201, malone);
    } catch (error) {
      return Response.error(res, 400, 'An error occured');
    }
  }

  static async download(req, res) {
    try {
      const storageDir = path.join(__dirname, '..', 'storage');
      const { id } = req.params;
      const getFile = await File.find({ _id: id });
      const fileName = _.get(getFile, '[0].name');
      if (!fileName) return Response.error(res, 404, 'File not found');
      const fileLocation = path.join(storageDir, fileName);
      // eslint-disable-next-line consistent-return
      return res.download(fileLocation, _.get(getFile, '[0].originalName'), (err) => {
        if (err) return Response.error(res, 404, 'File not found');
      });
    } catch (error) {
      return Response.error(res, 400, 'An error occured');
    }
  }

  static async getPost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      if (!post) return Response.error(res, 404, 'File not found');
      return Response.success(res, 200, post, 'Successful');
    } catch (error) {
      return Response.error(res, 400, 'An error occured');
    }
  }

  static async downloadZip(req, res) {
    try {
      const { id } = req.params;
      const data = await Post.findById(id);
      if (!data) return Response.error(res, 404, 'File not found');
      const { files } = data;
      const archiver = archive(files, res);
      return archiver;
      /* return Response.success(res, 200, data, 'Successful'); */
    } catch (error) {
      return Response.error(res, 400, 'An error occured');
    }
  }
}

export default Files;
