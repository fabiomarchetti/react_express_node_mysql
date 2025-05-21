const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173'], //locazione del client
};


app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({fruits: [
      'apple', 
      'banana', 
      'orange', 
      'fragola', 
      'kiwi', 
      'mela', 
      'pera', 
      'clementina', 
      'mandarino', 
      'ultimo']});
  });


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});  