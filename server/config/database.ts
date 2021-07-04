import mongoose from 'mongoose'
const dotenv = require("dotenv").config();

const mongoURI =
  `mongodb+srv://blog:${process.env.MONGODB_PASS}@cluster0.os5w6.mongodb.net/blogDatabase?retryWrites=true&w=majority`;

mongoose.connect(`${mongoURI}`, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err) throw err;
  console.log('Mongodb connection')
})