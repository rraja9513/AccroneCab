const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const driverbenifitschemeSchema=new Schema(
    {
      wheelalignment:{
          type:String
      },
      oilchange:{
          type:String
      },
      carinsurance:{
          type:String
      },
      childrenbenifit:{
          type:String
      },
      familyinsurance:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const Driverbenifitscheme=mongoose.model('Driverbenifitscheme',driverbenifitschemeSchema);
module.exports=Driverbenifitscheme;