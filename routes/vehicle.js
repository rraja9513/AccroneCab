const router=require('express').Router();
const multer=require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
      cb(null, Date.now() + file.originalname);  
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
let Vehicle=require('../models/vehicle.model');
router.route('/').post((req, res) => {
    Vehicle.find()
      .then(vehicles => res.json(vehicles))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Vehicle.findById(req.params.id)
      .then(vehicles => res.json(vehicles))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.post('/add',upload.single('vehicleicon'),(req,res,next)=>{
    const vehiclename = req.body.vehiclename;
    const vehicletype = req.body.vehicletype;
    const vehicleicon=req.file.path;
    const seatingcapacity=req.body.seatingcapacity;
    const pricinglogic=req.body.pricinglogic;
    const initialwaitingtime=req.body.initialwaitingtime;
    const additionalwaitingtime=req.body.additionalwaitingtime;
    const baseprice=req.body.baseprice;
    const fareperkm=req.body.fareperkm;
    const ridetimecharges=req.body.ridetimecharges;
    const waitingfare=req.body.waitingfare;
    const minimumdistance={
      rentalplans:{
        onehr15km:req.body.onehr15km,
        twohr30km:req.body.twohr30km,
        fourhr40km:req.body.fourhr40km,
        eighthr80km:req.body.eighthr80km
      }
      
    };
    const outstation={
      basekm180for12hr:{
        basepriceperday180:req.body.basepriceperday180,
        after180km:req.body.after180km,
        dailyallowance180:req.body.dailyallowance180,
        bookingfees180:req.body.bookingfees180,
        taxes180:req.body.taxes180
      },
      basekm250for24hr:{
        basepriceperday250:req.body.basepriceperday250,
        after250km:req.body.after250km,
        dailyallowance250:req.body.dailyallowance250,
        bookingfees250:req.body.bookingfees250,
        taxes250:req.body.taxes250
      },
      
    };
    const newVehicle=new Vehicle({
       vehiclename,
       vehicletype,
       vehicleicon,
       seatingcapacity,
       pricinglogic,
       initialwaitingtime,
       additionalwaitingtime,
       baseprice,
       fareperkm,
       ridetimecharges,
       waitingfare,
       minimumdistance,
       outstation
    })
    newVehicle.save()
  .then(() => res.json('Vehicle added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.post('/update/:id',upload.single('vehicleicon'),(req,res,next)=>{
  Vehicle.findById(req.params.id)
    .then(vehicle => {
      vehicle.vehiclename = req.body.vehiclename;
      vehicle.vehicletype = req.body.vehicletype;
      vehicle.vehicleicon=req.file.path;
      vehicle.seatingcapacity=req.body.seatingcapacity;
      vehicle.pricinglogic=req.body.pricinglogic;
      vehicle.initialwaitingtime=req.body.initialwaitingtime;
      vehicle.additionalwaitingtime=req.body.additionalwaitingtime;
      vehicle.baseprice=req.body.baseprice;
      vehicle.fareperkm=req.body.fareperkm;
      vehicle.ridetimecharges=req.body.ridetimecharges;
      vehicle.waitingfare=req.body.waitingfare;
      vehicle.minimumdistance={
        rentalplans:{
          onehr15km:req.body.onehr15km,
          twohr30km:req.body.twohr30km,
          fourhr40km:req.body.fourhr40km,
          eighthr80km:req.body.eighthr80km
        }
        
      };
      vehicle.outstation={
        basekm180for12hr:{
          basepriceperday180:req.body.basepriceperday180,
          after180km:req.body.after180km,
          dailyallowance180:req.body.dailyallowance180,
          bookingfees180:req.body.bookingfees180,
          taxes180:req.body.taxes180
        },
        basekm250for24hr:{
          basepriceperday250:req.body.basepriceperday250,
          after250km:req.body.after250km,
          dailyallowance250:req.body.dailyallowance250,
          bookingfees250:req.body.bookingfees250,
          taxes250:req.body.taxes250
        },
        
      };
      vehicle.save()
        .then(() => res.json('Vehicle updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Vehicle.findByIdAndDelete(req.params.id)
    .then(() => res.json('Vehicle deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Vehicle.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;