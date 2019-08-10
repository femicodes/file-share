import multer from 'multer';
import path from 'path';

// File storage configuration
const storageDir = path.join(__dirname, '..', 'storage');
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storageDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storageConfig });

export default upload;
