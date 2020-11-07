import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
