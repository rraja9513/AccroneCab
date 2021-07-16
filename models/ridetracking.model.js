const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ridetrackingSchema=new Schema(
    {
    booking_id:{
        type:String
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
const RideTracking=mongoose.model('RideTracking',ridetrackingSchema);
module.exports=RideTracking;