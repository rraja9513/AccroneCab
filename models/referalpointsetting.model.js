const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const referalpointsettingSchema=new Schema(
    {
      referalpoint:{
          type:String,
      }
    },
    {
        timestamps:true,
    }
);
const Referalpointsetting=mongoose.model('Referalpointsetting',referalpointsettingSchema);
module.exports=Referalpointsetting;