const router=require('express').Router();
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
  router.route('/add').post((req,res)=>{
    const servicename = req.body.servicename;
    const providername = req.body.providername;
    const serviceimage=req.body.serviceimage;
    const pricecalculations=req.body.pricecalculations;
    const baseprice=req.body.baseprice;
    const capacity=req.body.capacity;
    const description=req.body.description;
    const outstationfare={
      outstationonewayprice:req.body.outstationonewayprice,
      outstationroundtripprice:req.body.outstationroundtripprice,
      driverbata:req.body.driverbata
    };
    const rentalfare={
      rentalperhour:req.body.rentalperhour
    };
    const peaktime={
      time:req.body.time,
      peakprice:req.body.peakprice
    };
    const nightfare={
      nightfarepercentage:req.body.nightfarepercentage
    };
    const clusteredprice={
      cityname:req.body.cityname,
      distance:req.body.distance,
      distanceprice:req.body.distanceprice,
      citylimit:req.body.citylimit,
      minuteprice:req.body.minuteprice
    };

    
    
    
    const newVehicle=new Vehicle({
        servicename,
        providername,
        serviceimage,
        pricecalculations,
        baseprice,
        capacity,
        description,
        outstationfare,
        rentalfare,
        peaktime,
        nightfare,
        clusteredprice 
    })
    newVehicle.save()
  .then(() => res.json('Vehicle added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Vehicle.findById(req.params.id)
    .then(vehicle => {
      vehicle.servicename = req.body.servicename;
      vehicle.providername = req.body.providername;
      vehicle.serviceimage=req.body.serviceimage;
      vehicle.pricecalculations=req.body.pricecalculations;
      vehicle.baseprice =req.body.baseprice;
      vehicle.capacity = req.body.capacity;
      vehicle.description=req.body.description;
      vehicle.outstationfare={
        outstationonewayprice:req.body.outstationonewayprice,
        outstationroundtripprice:req.body.outstationroundtripprice,
        driverbata:req.body.driverbata
      };
      vehicle.rentalfare={
        rentalperhour:req.body.rentalperhour
      };
      vehicle.peaktime={
        time:req.body.time,
        peakprice:req.body.peakprice
      };
      vehicle.nightfare={
        nightfarepercentage:req.body.nightfarepercentage
      };
      vehicle.clusteredprice={
        cityname:req.body.cityname,
        distance:req.body.distance,
        distanceprice:req.body.distanceprice,
        citylimit:req.body.citylimit,
        minuteprice:req.body.minuteprice
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