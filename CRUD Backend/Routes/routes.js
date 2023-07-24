const controlller = require("../Controllers/Controls");
module.exports = (app)=>{
    app.post("/addUser",controlller.SaveINDB);
    app.get('/get', controlller.findUser);
    app.put('/update', controlller.userUpdation);
    app.delete('/delete', controlller.deletion);
}   

// module.exports = (app)=>{
//     app.get('/get', controlller.findUser)
// }