const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

module.exports.multipleVideosController = async(req, res)=>{
    try{
        const results = [];
        const files = req.files;

        for(const file of files){
            const {path} = file;
            const result = await cloudinary.uploader.upload_large(path, {
                folder: "Videos",
                chunk_size: 6000000,
                resource_type: "video"
            });
            
            results.push(result);
            fs.unlinkSync(path);
        }
        console.log(results);
        res.status(200).json({
            message: 'Videos Uploaded Successfully'
        });
    }catch(e){
        console.log(e);
        res.status(500).send("Something went wrong!");
    }
};