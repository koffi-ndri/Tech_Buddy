const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

module.exports.multipleImagesController = async(req, res) =>{
    try{
        const results = [];
        const files = req.files;

        for(const file of files){
            const {path} = file;
            const result = await cloudinary.uploader.upload(path, {
                folder: "Images"
            });
            
            results.push(result);
            fs.unlinkSync(path);
        }
        console.log(results);
        res.status(200).json({
           message: 'Images Uploaded Successfully'
        });
    }catch(e){
        console.log(e);
        res.status(500).send("Something went wrong!");
    }
};