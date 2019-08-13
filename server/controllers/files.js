/* eslint-disable no-underscore-dangle */
import path from 'path';
import File from '../models/File';
import Post from '../models/Post';
import Response from '../utils/Response';

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

      return Response.success(res, 201, file);
    } catch (error) {
      return Response.error(res, 400, 'An error occured');
    }
  }

  static download(req, res) {
    const storageDir = path.join(__dirname, '..', 'storage');
    const { name } = req.params;
    const fileLocation = path.join(storageDir, name);
    // eslint-disable-next-line consistent-return
    res.download(fileLocation, name, (err) => {
      if (err) return Response.error(res, 404, 'File not found');
    });
  }
}

export default Files;
