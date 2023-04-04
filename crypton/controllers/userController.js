const asyncHandler = require("express-async-handler")
const User = require("../models/useModel")

// add user 
const user_Added =async (req, res) => {
     try{
      console.log("enter")
        // get request body 
        const request = req?.body;

        if(!request) return res.status(200).json({
          message:"Enter Valid Detail To Proceed Further.",
         
        })

        if(request){
          var name = request?.name;
          var createdOn = request?.createdOn;
          var gender= request?.gender;
          var Db = request?.Db;
          var city= request?.city;
          var state = request?.state;
          var pc = request?.pc;
          var modifiedOn = request?.modifiedOn;
        }

        
        const obj_p = {
          name:name,
          createdOn:createdOn,
          gender:gender,
          Db:Db,
          city:city,
          state:state,
          pc:pc,
          modifiedOn:modifiedOn
        }

        if(obj_p){
          var user_created = await User.create(obj_p);
          if(user_created){
            return res.status(200).json({
              message:"User Created Successfully.",
              data:[]
            })
          }
          else{
            return res.status(200).json({
              message:"User Creation Failed.",
              data:[]
            })
          }
        }
     }
     catch(err){
      return res.status(200).json({
        error:err
      })
     }
}
r = asyncHandler(async (req, res) => {
   try{
        const user = await User.find().lean().exec();
        if(user){
          return res.status(200).json({
            message:"User Get Successfully.",
            Data:user
          })
        }
        else{
          return res.status(200).json({
            message:"User List Not Found",
            data:[]
          })
        }
   }
   catch(err){
    return res.status(200).json({
      error:err
    })
   }
});


const updateUser = asyncHandler(async (req, res) => {
   try{
      const user_id = req.params.id;

      if(!user_id) return res.status(200).json({
        message:"Enter Valid Detail To Proceed Further.",
       
      })
      
      const update_request = req?.body;

      const user_updated = await User.findByIdAndUpdate(user_id,update_request);

      if(user_updated){
        return res.status(200).json({
          message:"User Updated Successfully.",
        
        })
      }
      else{
        return res.status(200).json({
          message:"User Updation Failed.",
         
        })
      }

   }
   catch(err){
    return res.status(200).json({
      error:err
    })
   }
})
  


const user_Deleted = async(req,res)=>{
  try{
      const deleted_id = req.params.id;
      if(!deleted_id) return res.status(200).json({
        message:"Enter Valid Detail To Proceed Further.",
        data:[]
      })
      
      const user = await User.findByIdAndDelete(deleted_id)

      if(user){
        return res.status(200).json({
          message:"User Deleted Successfully.",
          Data:[]
        })
      }
      else{
        return res.status(200).json({
          message:"User Deletion Failed.",
          data:[]
        })
      }

  }
  catch(err){
    return res.status(200).json({
      error:err
    })
  }
}



const getSingleUser = async(req,res)=>{
  try{
      const get_id = req.params.id;
      if(!get_id) return res.status(200).json({
        message:"Enter Valid Detail To Proceed Further.",
        data:[]
      })
      
      const user = await User.findById(get_id)

      if(user){
        return res.status(200).json({
          message:"User Get Successfully.",
          Data:user
        })
      }
      else{
        return res.status(200).json({
          message:"User Not Found.",
          data:[]
        })
      }

  }
  catch(err){
    return res.status(200).json({
      error:err
    })
  }
}


module.exports = {
  user_Added,
  getUser,
  updateUser,
  user_Deleted,
  getSingleUser
};
