const userSchema = require('../Models/CRUD_Schema')
const AddUser = async (userDataa)=>{

    try {
        // const data = new CRUD_Schema();
        const output = await userSchema.create({
            name : userDataa.name,
            contact : userDataa.contact,
            email : userDataa.email
        })
        return output
    } catch (error) {
        
    }
}

const findUser = async () =>{
    try {
       let data = await userSchema.find()
       return data
    } catch (error) {
        
    }
}

const userUpdation = async (userDataa)=>{
    try {
        let output = await userSchema.findOneAndUpdate(
            {
                _id:userDataa._id,
            },
            {$set:{
                name:userDataa.name,
                contact:userDataa.contact,
                email:userDataa.email
             }},
             {new:true});
        return output
    } catch (error) {
        console.log(error)
    }
}



const userDelete = async (userData)=>{
    console.log("data...",userData)
    await userSchema.findOneAndDelete({_id: userData});
    return 'deleted'
}



module.exports={
    findUser,
    AddUser,
    userUpdation,   
    userDelete
}
