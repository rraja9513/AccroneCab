const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const couponmanagementSchema=new Schema(
    {
      coupontext:{
          type:String,
      },
      percentageorflat:{
          type:String,
      },
      amount:
          {
              type:String,
          },
      couponexpirydate:{
        type:String, 
      },
      count:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const Couponmanagement=mongoose.model('Couponmanagement',couponmanagementSchema);
module.exports=Couponmanagement;