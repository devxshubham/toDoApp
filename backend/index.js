const express = require('express')

const app = express()
const zod = require('zod')
const {create, update} = require('./valid')
const mongoose = require('mongoose')

const cors = require("cors")
app.use(cors({}))

 
require('dotenv').config()

mongoose.connect(`mongodb://localhost:${process.env.MONGOURL}/todoapp`)
    .then(() => {
        console.log('SUCCEFULLY CONNECTED TO MONGODB')
    })
    .catch(err => {
        console.log('CONNECTION FAILED WITH MONGO')
        console.log(err)
    })
const Todo = require('./db')

app.use(express.json());

app.get('/todo', async(req,res)=>{
    const todos = await Todo.find({})
    
    res.json({todos})
})

app.post('/todo', async(req, res)=>{
    const payload = create.safeParse(req.body)
    if(!payload.success){
        res.status(500).json({
            msg : "sent wrong inputs"
        })
        return;
    }

    const task = await Todo.create({
        title : req.body.title,
        description : req.body.description,
        completed : false
    })
    task.save()

    res.send('todo added')

})
app.get('/todo/:id', async(req, res)=>{
    const id = req.params.id;
    
    const todo = await Todo.findById(id);
    console.log(typeof(todo))
    res.send(todo)
})

app.put('/completed', async(req, res) => {
    const {_id} = req.body
    const payload = update.safeParse(req.body)
    if(!payload.success){
        res.status(500).json({
            msg : "sent wrong inputs"
        })
        return;
    }

    const task = await Todo.updateOne({_id}, {completed : true})
    if( task.modifiedCount == 1 ){
        res.send("updated")
    }
    else{
        res.send("didn't modified")
    }
})
app.delete('/todo', async(req, res) => {
    const id = req.body._id
    console.log(id)
    await Todo.findByIdAndDelete(id)
    const todos = await Todo.find({})
    res.json({todos})
})

app.listen(3000, ()=> {
    console.log("listening on 3000")
})