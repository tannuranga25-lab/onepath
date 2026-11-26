
import { Router } from 'express';
import { analyzeLearning } from '../controllers/learning.controller.js';

const router = Router();

router.post('/analyze', analyzeLearning);

export default router;
