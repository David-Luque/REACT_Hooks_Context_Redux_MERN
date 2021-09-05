const Link = require('../models/Link');
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.newLink = async (req, res, next)=>{
    //check for errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() })
    }

    //create new Link object
    const { origin_name } = req.body;
    const link = new Link();
    link.url = shortid.generate();
    link.name = shortid.generate();
    link.origin_name = origin_name;
    

    //if user is authenticated
    if(req.user) {
        const { downloads, password } = req.body;
        //assign to link downloads number
        if(downloads) link.downloads = downloads;
        //asign a password
        if(password) {
            const salt = await bcrypt.genSalt(10);
            link.password = await bcrypt.hash(password, salt);
        };
        //asign author
        link.author = req.user.id
    }
    
    //store link in DB
    try {
        await link.save();
        res.json({ msg: `${link.url}` });
        return next();
    } catch(error) {
        console.log(error)
    }
};