const mongoose = require("mongoose");




let connectDB = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("ok");
  });
};

module.exports = connectDB;