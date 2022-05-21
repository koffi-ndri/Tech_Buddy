const cloudinary = require('../utils/cloudinary');

module.exports.retrieveVideosController = async(req, res) =>{
    const { resources } = await cloudinary.search
                                .expression('folder: Videos')
                                .sort_by('public_id', 'desc')
                                .max_results(30)
                                .execute();
    if(resources.length === 0){
        res.status(200).send("No videos available");
    }else{
        const videoUrls = resources.map(file => file.url);
        res.send(videoUrls);
    }
};