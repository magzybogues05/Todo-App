const express=require('express');
const app=express();
const cors=require('cors');
const types=require('./types');
require('dotenv').config();

//db connection
const {connectDB,todo}=require('./db/conn');
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.post('/todo',async(req,res)=>{
    const parsedPayload=types.createTodo.safeParse({
        title:req.body.title,
        description:req.body.description
    });
    if(!parsedPayload.success)
    {
        res.status(400).json({
            message:"you sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title:req.body.title,
        description:req.body.description,
        completed:false
    });
    res.status(201).json({
        message:"Todo Created"
    })
})

app.get('/todos',async(req,res)=>{
    const todos=await todo.find({});
    res.status(200).json({
        todos
    })
});

app.put('/completed',async(req,res)=>{
    const parsedPayload=types.updateTodo.safeParse({
        id:req.body.id
    });
    if(!parsedPayload.success)
    {
        res.status(400).json({
            message:"you sent the wrong inputs",
        })
        return;
    }
    await todo.updateOne(
        { _id: req.body.id },
        { $set: { completed: true } }
    );
    res.status(200).json({
        message:"marked todo completed",
    })
    

});


app.listen(3000,()=>{
    console.log("todo backend is up and running");
})