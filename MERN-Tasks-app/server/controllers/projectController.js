const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createProject = async (req, res)=>{

    //check for errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    try {

        //create new project
        const project = new Project(req.body);

        //save owner by JWT
        project.owner = req.user.id

        project.save();

        res.json(project)


    } catch(error) {
        console.log(error);
        res.status(500).send("there wan an error" );
    }
    
};