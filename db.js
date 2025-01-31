const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://chdarshan99:newbackend@newbackend.z5gxh.mongodb.net/";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{
    
    },).then(()=>console.log("connected successfully"))
    .catch((err)=>{console.log(err)})
};
 module.exports= connectToMongo;