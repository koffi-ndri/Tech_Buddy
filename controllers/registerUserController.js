const User = require('../model/User');
const {schema} = require('../utils/hapiJoi');

module.exports.registerUserController = async(req, res) =>{
    //Data validation
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //saving user to database
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