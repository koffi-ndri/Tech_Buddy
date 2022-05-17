const express = require('express');
const cloudinary = require('../../../utils/cloudinary');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.post("/uploadImages", async(req, res)=>{
    try{
        const results = [];
        const files = req.files;

        for(const file of files){
            const {path} = file;
            const result = await cloudinary.uploader.upload(path, {
                folder: "Images"
            });
            
            results.push(result);
            console.log(results);
            fs.unlinkSync(path);
            res.status(200).json({
                message: 'Images Uploaded Successfully'
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).send("Something went wrong!");
    }
});

module.exports = router;