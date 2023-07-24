const Mongoose = require('mongoose')



const TaskSchema = new Mongoose.Schema({
 posts:{type:String
 },
 images:{type:String},
 body:{type:String},
 title:{type:String},
 genre:{type:String},

 
}, { timestamps: true });

module.exports = Mongoose.model("Task", TaskSchema);