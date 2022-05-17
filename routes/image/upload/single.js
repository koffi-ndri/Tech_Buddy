const express = require('express');
const cloudinary = require('../../../utils/cloudinary');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.post("/uploadSingleImage", async(req, res)=>{
  try{
    const uploader = async (path) => await cloudinary.uploads(path, 'Images');

    const file = req.files[0];
    if(req.files.length > 1){
      res.status(400).send("Please, upload only one image");
    }else{
      const {path} = file;
      const newPath = await uploader(path);

      fs.unlinkSync(path);
      res.status(200).json({
        message: 'Image Uploaded Successfully',
        data: newPath
      });
    }
  }catch(e){
    console.log(e);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;