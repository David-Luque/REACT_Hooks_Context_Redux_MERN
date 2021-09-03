const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res)=>{
    
    //verify if user is already authenticated
    const { email } = req.body;
    let user = await User.findOne({ email });

    if(user) {
        res.status(400).json({ msg: 'User already exist' });
    }

    user = await new User(req.body);
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt)
    
    
    user.save();

    res.json({ msg: 'User created successfully' });
};