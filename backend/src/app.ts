import express from 'express'
import cors from 'cors'
import { routes } from './routes/index.ts';

export const app = express();


// Global Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || '*',
//   credentials: true
// }));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true }));

//API Routes
app.use('/api', routes)




// 404 Handler 
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Invalid route',
        path: req.originalUrl
    })
})