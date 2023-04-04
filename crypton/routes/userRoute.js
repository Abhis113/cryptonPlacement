const express = require("express");
const { user_Added, getUser, updateUser,user_Deleted ,getSingleUser} = require("../controllers/userControllers");
const router = express.Router();


router.post("/add-user/", user_Added);
router.get("/get-user", getUser);
router.patch("/update-user/:id",updateUser );
router.delete("/user-delete/:id",user_Deleted)
router.get("/get-single/:id",getSingleUser)

module.exports = router;