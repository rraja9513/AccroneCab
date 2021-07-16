const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 80;
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Atlas started successfully")
})
const rideavailabilityestimateRouter=require('./routes/rideavailabilityestimate');
const ridebookingRouter=require('./routes/ridebooking');
const ridecancellationRouter=require('./routes/ridecancellation');
const ridefeedbackRouter=require('./routes/ridefeedback');
const ridetrackingRouter=require('./routes/ridetracking');
app.use('/rideavailabilityestimate',rideavailabilityestimateRouter);
app.use('/ridebooking',ridebookingRouter);
app.use('/ridecancellation',ridecancellationRouter);
app.use('/ridefeedback',ridefeedbackRouter);
app.use('/ridetracking',ridetrackingRouter);
app.listen(port,function(){
    console.log("Server started Successfully");
});