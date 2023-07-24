const Mongos = require('mongoose')



const LoginSchema = new Mongos.Schema({
 email:{type:String
 },
 username:{type:String},
 password:{type:String},
 

 
}, { timestamps: true });

module.exports = Mongos.model("User", LoginSchema);