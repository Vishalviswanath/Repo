const express = require('express');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth-routes');
const cors = require('cors');
const adminProductsRouter = require('./routes/admin/products-routes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);

app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);

app.listen(PORT, () => console.log(`listening from port ${PORT}....`));
