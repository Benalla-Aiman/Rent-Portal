import express from 'express';
import { test } from '../controllers/user.controller.jsclear';

const router = express.Router();

router.get('/test', test);

export default router;