const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const wagespercentageSchema=new Schema(
    {
      commission:{
          type:String,
      }
    },
    {
        timestamps:true,
    }
);
const Wagespercentage=mongoose.model('Wagespercentage',wagespercentageSchema);
module.exports=Wagespercentage;