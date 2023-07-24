const Mongo= require('mongoose')



const registerSchema = new Mongoose.Schema({
 email:{type:String
 },
 username:{type:String},
 password:{type:String},
 

 
}, { timestamps: true });

module.exports = Mongo.model("Task", registerSchema);