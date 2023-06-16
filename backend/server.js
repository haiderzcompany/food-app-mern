import { createServer } from 'http';
import express from 'express';
import mongoose from 'mongoose';
import clientRouter from './routes/client.js';
const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 8000;
const mongoURI = 'mongodb://127.0.0.1:27017/database_name';
const mongoDbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Use plugins Start
app.use(express.json());
// Use plugins End

app.use(clientRouter);

mongoose
  .connect(mongoURI, mongoDbOptions)
  .then(() => {
    console.log('MongoDb Connected');
    server.listen(PORT, () => {
      console.log(`Server Running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
