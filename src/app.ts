import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';

const PORT = process.env.PORT || 3050;
const HOST = process.env.HOST || 'http://127.0.0.1'

const app = express()

app.use(cors()) //{ origin: ['*', 'http://localhost:3000']}

app.use(router)
app.listen(PORT, () => console.log(`Server running ${HOST}:${PORT}`))