const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const corporateSchema=new Schema(
    {
      companyemail:{
          type:String,
      },
      companyname:{
          type:String,
      },
      department:
          {
              type:String,
          },
      numberofemployees:{
        type:String, 
      },
      country:{
          type:String
      },
      mobilenumber:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const Corporate=mongoose.model('Corporate',corporateSchema);
module.exports=Corporate;