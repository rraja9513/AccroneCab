const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ridecancellationSchema=new Schema(
    {
    booking_id:{
        type:String
    },
    reason:{
        type:String
    },
    category:[
        {
            type:String
        }
    ],
    pickup_lat:{
        type:Number
    },
    pickup_lng:{
        type:Number
    },
      x_app_token:{
        type:String
      },
      authorization:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const RideCancellation=mongoose.model('RideCancellation',ridecancellationSchema);
module.exports=RideCancellation;