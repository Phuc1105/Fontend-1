const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); 
app.use(cors()); 

const userRouter = require('./models/users');
app.use('/api', userRouter);
const deliveryRouter = require('./deliveries');
app.use('/api', deliveryRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
