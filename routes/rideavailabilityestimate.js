const router=require('express').Router();
let RideAvailabilityEstimate=require('../models/rideavailabilityestimate.model');
router.route('/').post((req, res) => {
    RideAvailabilityEstimate.find()
      .then(rideavailabilityestimates => res.json(rideavailabilityestimates))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const pickup_lat = req.body.pickup_lat;
    const pickup_lng = req.body.pickup_lng;
    const category=req.body.category;
    const drop_lat=req.body.drop_lat;
    const drop_lng=req.body.drop_lng;
    const service_type=req.body.service_type;
    const pickup_mode=req.body.pickup_mode;
    const x_app_token=req.body.x_app_token;
    const authorization=req.body.authorization; 
    const newRideAvailabilityEstimate=new RideAvailabilityEstimate({
    pickup_lat,
    pickup_lng,
    category,
    drop_lat,
    drop_lng,
    service_type,
    pickup_mode,
    x_app_token,
    authorization
    })
    newRideAvailabilityEstimate.save()
  .then(() => res.json('RideAvailabilityEstimate added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 module.exports=router;