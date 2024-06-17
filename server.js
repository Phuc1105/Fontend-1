const express = require('express');
const cors = require('cors');
const app = express();
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
