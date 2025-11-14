import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import aiRoutes from './routes/ai.routes';
import reportRoutes from './routes/report.routes';
import testRoutes from './routes/test.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/test', testRoutes);

export default app;