const Mongoose = require('mongoose')



const TaskSchema = new Mongoose.Schema({
 posts:[Object],
 blogPosts:[String],
 images:{type:String},
 body:{type:String},
 title:{type:String},
 genre:{type:String},
 tags:[String, ],
 read:{type:String}
 

 
}, { timestamps: true });

module.exports = Mongoose.model("Task", TaskSchema);