const router=require('express').Router();
let RideBooking=require('../models/ridebooking.model');
router.route('/').post((req, res) => {
    RideBooking.find()
      .then(ridebooking => res.json(ridebooking))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const pickup_lat = req.body.pickup_lat;
    const pickup_lng = req.body.pickup_lng;
    const category=req.body.category;
    const drop_lat=req.body.drop_lat;
    const drop_lng=req.body.drop_lng;
    const pickup_mode=req.body.pickup_mode;
    const payment_instrument_type=req.body.payment_instrument_type;
    const fare_id=req.body.fare_id;
    const affiliate_uid=req.body.affiliate_uid;
    const coupon_code=req.body.coupon_code;
    const merchant_txn_id=req.body.merchant_txn_id;
    const booking_id=req.body.booking_id;
    const x_app_token=req.body.x_app_token;
    const authorization=req.body.authorization;
    const content_type=req.body.content_type; 
    const newRideBooking=new RideBooking({
    pickup_lat,
    pickup_lng,
    category,
    drop_lat,
    drop_lng,
    pickup_mode,
    payment_instrument_type,
    fare_id,
    affiliate_uid,
    coupon_code,
    merchant_txn_id,
    booking_id,
    x_app_token,
    authorization,
    content_type
    })
    newRideBooking.save()
  .then(() => res.json('RideBooking added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 module.exports=router;