const router=require('express').Router();
let RideCancellation=require('../models/ridecancellation.model');
router.route('/').post((req, res) => {
    RideCancellation.find()
      .then(ridecancellation => res.json(ridecancellation))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const booking_id=req.body.booking_id;
    const reason=req.body.reason;
    const category=req.body.category;
    const pickup_lat=req.body.pickup_lat;
    const pickup_lng=req.body.pickup_lng;
    const x_app_token=req.body.x_app_token;
    const authorization=req.body.authorization;
    const newRideCancellation=new RideCancellation({
    booking_id,
    reason,
    category,
    pickup_lat,
    pickup_lng,
    x_app_token,
    authorization
    })
    newRideCancellation.save()
  .then(() => res.json('RideCancellation added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 module.exports=router;