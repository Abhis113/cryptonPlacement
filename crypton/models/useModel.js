const mongoose = require("mongoose");

//Schemea of user

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleased add a name"],
    },
    createdOn:{
      type:String,
      required:true
    },
    gender:{
      type:String,
      required:true,
      default:"Male"    
    },
    Db:{
      type:String,
      required:true,
    },
    city:{
      type:String,
      required:true,
    },
    state:{
      type:String,
      required:true,
    },
    pc:{
      type:Number,
      required:true,
    },
    modifiedOn:{
      type:String,
      required:true
    }
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

 

const User = mongoose.model("User", userSchema);
module.exports = User;
