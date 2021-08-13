const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const enrollpassengerSchema=new Schema(
    {
        firstname:{
            type: String,
        },
        lastname:{
            type: String,
        },
        email:{
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
        },
        phonenumber:{
            type:String
        }
    },
    {
        timestamps:true,
    }
);
const Enrollpassenger=mongoose.model('Enrollpassenger',enrollpassengerSchema);
module.exports=Enrollpassenger;