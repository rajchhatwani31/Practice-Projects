const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CRUDSchema = new Schema(
    {
        name : {
            type: String
        },

        contact : {
            type: Number
        },
        email :{
            type: String
        },
      

    }
);

const Crud = mongoose.model('crud',CRUDSchema);

module.exports = Crud;