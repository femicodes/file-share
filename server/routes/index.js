import { Router } from 'express';
import Files from '../controllers/files';
import upload from '../config/uploadConfig';
import Response from '../utils/Response';

const router = Router();

router.get('/', (req, res) => {
  Response.success(res, 200, 'Welcome to the API');
});

router.post('/upload', upload.array('files'), Files.uploadFile);
router.get('/download/:name', Files.download);

export default router;