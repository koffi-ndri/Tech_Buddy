const User = require('../model/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const userToken = async(useremail = "", expiresIn = "1h") =>{
    //const user = await User.findOne({email: useremail});
    const token = jwt.sign({useremail}, process.env.TOKEN_SECRET, {expiresIn});
    return token
}
module.exports = {userToken};