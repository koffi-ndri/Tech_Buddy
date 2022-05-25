const User = require('../model/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const userToken = async(useremail) =>{
    const user = await User.findOne({email: useremail});
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: "1h"});
    return token
}
module.exports = {userToken};