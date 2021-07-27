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
    const capacity=req.body.capacity;
    const baseprice=req.body.baseprice;
    const pricecalculations=req.body.pricecalculations;
    const serviceimage=req.body.serviceimage;
    const newVehicle=new Vehicle({
        servicename,
        providername,
        capacity,
        baseprice,
        pricecalculations,
        serviceimage
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
      vehicle.capacity = req.body.capacity;
      vehicle.baseprice =req.body.baseprice;
      vehicle.pricecalculations=req.body.pricecalculations;
      vehicle.serviceimage=req.body.serviceimage;
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