const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const supportcontactsettingSchema=new Schema(
    {
     passenger:{
         pcontact:{
                    type:String
         }
     },
     driver:{
         dcontact:{
                    type:String
         }
     }
    },
    {
        timestamps:true,
    }
);
const Supportcontactsetting=mongoose.model('Supportcontactsetting',supportcontactsettingSchema);
module.exports=Supportcontactsetting;