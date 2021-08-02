const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const tripcancelmessagesettingSchema=new Schema(
    {
     passenger:{
         pmessage:{
                    type:String
         }
     },
     driver:{
         dmessage:{
                    type:String
         }
     }
    },
    {
        timestamps:true,
    }
);
const Tripcancelmessagesetting=mongoose.model('Tripcancelmessagesetting',tripcancelmessagesettingSchema);
module.exports=Tripcancelmessagesetting;