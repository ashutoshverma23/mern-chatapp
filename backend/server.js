import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectDB from './db/conn.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.get('/', (req, res) => {
    // http://localhost:8000/
    res.send('Hello World!');
});


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});