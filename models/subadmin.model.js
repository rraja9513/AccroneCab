const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
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
        }
    },
    {
        timestamps:true,
    }
);
subadminSchema.plugin(passportLocalMongoose,{usernameField: 'email'});
const Subadmin=mongoose.model('Subadmin',subadminSchema);
module.exports=Subadmin;