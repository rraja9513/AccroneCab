const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ridefeedbackSchema=new Schema(
    {
    booking_id:{
        type:String
    },
    rating:[
        {
            type:Number
        }
    ],
    feedback:{
        type:String
    },
    comments:{
        type:String
    },
    x_app_token:{
        type:String
      },
      authorization:{
          type:String
      },
      content_type:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const RideFeedback=mongoose.model('RideFeedback',ridefeedbackSchema);
module.exports=RideFeedback;