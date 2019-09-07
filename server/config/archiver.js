import archiver from 'archiver';
import path from 'path';

const archive = (files, res) => {
  const uploadDir = path.join(__dirname, '..', 'storage');
  const zip = archiver('zip');
  res.attachment('download.zip');
  zip.pipe(res);

  files.forEach((file) => {
    const filePath = path.join(uploadDir, file.name);
    zip.file(filePath, { name: file.originalName });
  });

  zip.finalize();
};

export default archive;
