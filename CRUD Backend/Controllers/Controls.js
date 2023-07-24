const crudService = require('../Services/project');

const SaveINDB = async (req,res)=>{ 
    try{
        let response = await crudService.AddUser(req.body);
        res.status(200).send({data:response});
    }
    catch(error){

    }
       
}
const findUser = async (req,res)=>{ 
    try{
        let response = await crudService.findUser(req.body);
        res.status(200).send({data:response});
    }
    catch(error){

    }
       
}
const userUpdation = async (req,res)=>{ 
    try{
        let response = await crudService.userUpdation(req.body);
        res.status(200).send({data:response});
    }
    catch(error){

    }
       
}

const deletion = async (req,res)=>{ 
    try{
        let response = await crudService.userDelete(req.query.id);
        res.status(200).send({data:response});    }
    catch(error){

    }
       
}

module.exports={
    findUser,
    userUpdation,
    deletion,
    SaveINDB
}
