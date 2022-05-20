const cloudinary = require('../utils/cloudinary');

module.exports.retrieveImagesController = async(req, res) =>{
    const { resources } = await cloudinary.search
                                .expression('folder: Images')
                                .sort_by('public_id', 'desc')
                                .max_results(30)
                                .execute();
    if(resources.length === 0){
        res.status(200).send("No images available");
    }else{
        const imageUrls = resources.map(file => file.url);
        res.send(imageUrls);
    }
};