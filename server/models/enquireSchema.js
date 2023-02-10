const mongoose=require ('mongoose');

const enquireSchema=new mongoose.Schema({
 username : {
    type: String,
    required:true,
 },


 phone:{
    type: String,
required:true,
 },
  
 city:{
    type : String,
    required: true,
 },


 course:{
    type: String,
    required: true,
 },


})
const Enquire= new mongoose.model("ENQUIRE", enquireSchema);

module.exports = Enquire;