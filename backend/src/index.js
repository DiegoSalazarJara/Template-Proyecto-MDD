'use strict';

import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes.js';
import { connectDB } from './config/configDB.js';
import { HOST, PORT } from './config/configEnv.js';
const router = express();

router.use(morgan('dev'));
router.use(express.json());

router.use('/api', indexRoutes);

router.listen(PORT, () => {
    console.log(`URL: http://${HOST}:${PORT}`);
    connectDB();
});
