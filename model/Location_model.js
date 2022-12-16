const mongoose = require('mongoose');
//-----------------------creation du model utilisateur--------------------------------
const locationSchema = new mongoose.Schema({
    description: {type : String,require : true}, 
    prix : {type : String,require : true},
    adresse : {type : String,require : true},
    téléphone : {type : String,require : true},
    image :{type : String,require : true}
})
module.exports = mongoose.model('Location',locationSchema)