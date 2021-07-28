const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const subadminSchema=new Schema(
    {
        name:{
            type: String,
        },
        email:{
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
        },
        profilepicture:{
            type:String
        },
        role:{
            type:String
        },
        password:{
            type:String
       }
    },
    {
        timestamps:true,
    }
);
const Subadmin=mongoose.model('Subadmin',subadminSchema);
module.exports=Subadmin;