const express = require('express');
const cloudinary = require('../../../utils/cloudinary');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.post("/uploadVideos", async(req, res)=>{
    res.send(req.files);
    // try{
    //     const results = [];
    //     const files = req.files;

    //     for(const file of files){
    //         const {path} = file;
    //         const result = await cloudinary.uploader.upload_large(path, {
    //             folder: "Videos",
    //             chunk_size: 6000000
    //         });
            
    //         results.push(result);
    //         console.log(results);
    //         fs.unlinkSync(path);
    //         res.status(200).json({
    //             message: 'Videos Uploaded Successfully'
    //         });
    //     }
    // }catch(e){
    //     console.log(e);
    //     res.status(500).send("Something went wrong!");
    // }
});

module.exports = router;