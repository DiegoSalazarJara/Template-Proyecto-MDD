'use strict';

import mongoose from 'mongoose';
import { DB_URL } from './configEnv.js';

export async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Base de datos conectada correctamente!');
    } catch (error) {
        console.error(error);
    }
}
