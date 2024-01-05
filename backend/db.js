const mongoose = require('mongoose')
const { string } = require('zod')



const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

module.exports = mongoose.model('todo', todoSchema)

