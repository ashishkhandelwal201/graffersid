import { mongoose } from '../utils/import.js'


const url = `mongodb://${process.env.host}:${process.env.mongo_PORT}/${process.env.collection}`;
mongoose.connect(url);
console.log("Successfully connected to mongodb database....");