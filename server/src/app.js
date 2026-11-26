
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import learningRoutes from './routes/learning.routes.js';

const app = express();

app.use(helmet());

app.use(
    cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    })
);

app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (req, res) => {
    res.status(200).json({
    success: true,
    message: 'OnePath API is running',
    });
});

app.use('/api/learning', learningRoutes);

app.use((req, res) => {
    res.status(404).json({
    success: false,
    message: 'Route not found',
    });
});

export default app;
