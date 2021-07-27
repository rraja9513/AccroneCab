const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const vehicleSchema=new Schema(
    {
      servicename:{
          type:String,
      },
      providername:{
          type:String,
      },
      capacity:
          {
              type:String,
          },
      baseprice:{
        type:String, 
      },
      pricecalculations:{
          type:String
      },
      serviceimage:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const Vehicle=mongoose.model('Vehicle',vehicleSchema);
module.exports=Vehicle;