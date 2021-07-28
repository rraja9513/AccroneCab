const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const session=require('express-session');
const passport=require('passport');
const Admin=require('./models/admin.model');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const port=process.env.PORT || 80;
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Atlas started successfully")
})
passport.use('adminLocal',Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());
const adminRouter=require('./routes/admin');
const corporateRouter=require('./routes/corporate');
const vehicleRouter=require('./routes/vehicle');
const subadminRouter=require('./routes/subadmin');
const roleRouter=require('./routes/role');
const rentalRouter=require('./routes/rental');
app.use('/admin',adminRouter);
app.use('/corporate',corporateRouter);
app.use('/vehicle',vehicleRouter);
app.use('/subadmin',subadminRouter);
app.use('/role',roleRouter);
app.use('/rental',rentalRouter);
app.listen(port,function(){
    console.log("Server started Successfully");
});