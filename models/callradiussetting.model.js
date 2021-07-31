const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const callradiussettingSchema=new Schema(
    {
      callradiusinmeter:{
          type:String,
      }
    },
    {
        timestamps:true,
    }
);
const Callradiussetting=mongoose.model('Callradiussetting',callradiussettingSchema);
module.exports=Callradiussetting;