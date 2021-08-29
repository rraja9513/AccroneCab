const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const referalpointsettingSchema=new Schema(
    {
      referalpoint:{
          type:String
      },
      expdate:{
          type:Date
      }
    },
    {
        timestamps:true,
    }
);
const Referalpointsetting=mongoose.model('Referalpointsetting',referalpointsettingSchema);
module.exports=Referalpointsetting;