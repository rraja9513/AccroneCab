const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const rideavailabilityestimateSchema=new Schema(
    {
        pickup_lat:{
          type:Number,
      },
      pickup_lng:{
          type:Number,
      },
      category:[
          {
              type:String
          }
      ],
      drop_lat:{
        type:Number, 
      },
      drop_lng:{
        type:Number, 
      },
      service_type:[
        {
            type:String, 
          }
      ],
      pickup_mode:[
          {
              type:String
          }
      ],
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
const RideAvailabilityEstimate=mongoose.model('RideAvailabilityEstimate',rideavailabilityestimateSchema);
module.exports=RideAvailabilityEstimate;