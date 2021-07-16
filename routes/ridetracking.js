const router=require('express').Router();
let RideTracking=require('../models/ridetracking.model');
router.route('/').post((req, res) => {
    RideTracking.find()
      .then(ridetracking => res.json(ridetracking))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const booking_id=req.body.booking_id;
    const x_app_token=req.body.x_app_token;
    const authorization=req.body.authorization;
    const newRideTracking=new RideTracking({
    booking_id,
    x_app_token,
    authorization
    })
    newRideTracking.save()
  .then(() => res.json('RideTracking added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 module.exports=router;