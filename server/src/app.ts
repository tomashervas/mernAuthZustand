import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use(authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

export default app;