const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {loginValidation} = require('../utils/hapiJoi');

module.exports.loginController = async(req, res) =>{
    //Data validation
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email not found');

    //checking if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    res.send("User Logged in");
};