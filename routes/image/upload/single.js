const express = require('express');
const cloudinary = require('../../../utils/cloudinary');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.post("/uploadSingleImage", async(req, res)=>{
  try{
    if(req.files.length > 1){
      res.status(400).send("Please, upload only one image");
    }else{
      const file = req.files[0];
      const {path} = file;
      const result = await cloudinary.uploader.upload(path, {
        folder: "Images"
      });
      console.log(result);
      fs.unlinkSync(path);
      res.status(200).json({
        message: 'Image Uploaded Successfully'
      });
    }
  }catch(e){
    console.log(e);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;