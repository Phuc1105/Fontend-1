const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./users');
const productRouter = require('./products');


app.use(express.json()); 
app.use(cors()); 

app.use('/api',productRouter)
app.use('/api', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
