const mongoose=require('mongoose');
const connectDB=async()=>{
    const mongoURI=process.env.MONGODB_URI;
    await mongoose.connect(mongoURI);
    console.log("database connected");
}


const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo=mongoose.model('todos',todoSchema);
module.exports={connectDB,todo};

