const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../utils/hapiJoi');

module.exports.registerUserController = async(req, res) =>{
    //Data validation
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const user = new User({
        username: req.body.name,
        email: req.body.email,
        password: hashedPassword
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