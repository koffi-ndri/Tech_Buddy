const express = require('express');
const cloudinary = require('../../../utils/cloudinary');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.post("/uploadSingleImage", async(req, res)=>{
  try{
     const file = req.file;
     const {path} = file;
     const result = await cloudinary.uploader.upload(path, {
       folder: "Images"
     });
    console.log(result);
     fs.unlinkSync(path);
     res.status(200).json({
       message: 'Image Uploaded Successfully'
     });
  }catch(e){
    console.log(e);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;