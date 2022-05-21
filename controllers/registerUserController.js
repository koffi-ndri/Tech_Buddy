const User = require('../model/User');

module.exports.registerUserController = async(req, res) =>{
    const user = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedUser = await user.save();
        res.status(201).json({
            message: "User registered",
            userDetails: savedUser
        });
    }catch(err){
        res.status(400).send(err);
    }
};