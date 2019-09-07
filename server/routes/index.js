import { Router } from 'express';
import Files from '../controllers/files';
import upload from '../config/uploadConfig';
import Response from '../utils/Response';

const router = Router();

router.get('/', (req, res) => {
  Response.success(res, 200, 'Welcome to the API');
});

router.post('/upload', upload.array('files'), Files.uploadFile);
router.get('/download/:id', Files.download);
router.get('/post/:id', Files.getPost);
router.get('/post/:id/download', Files.downloadZip);

export default router;
