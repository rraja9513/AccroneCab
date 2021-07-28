const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const rentalSchema=new Schema(
    {
      hour:{
          type:String
      },
      kilometer:{
          type:String
      },
      price:{
          type:String
      }
    },
    {
        timestamps:true,
    }
);
const Rental=mongoose.model('Rental',rentalSchema);
module.exports=Rental;