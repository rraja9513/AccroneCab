const router=require('express').Router();
let Couponmanagement=require('../models/couponmanagement.model');
router.route('/').post((req, res) => {
    Couponmanagement.find()
      .then(couponmanagements => res.json(couponmanagements))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Couponmanagement.findById(req.params.id)
      .then(couponmanagements => res.json(couponmanagements))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const coupontext = req.body.coupontext;
    const percentageorflat = req.body.percentageorflat;
    const amount=req.body.amount;
    const couponexpirydate=req.body.couponexpirydate;
    const count=req.body.count;
    const newCouponmanagement=new Couponmanagement({
        coupontext,
        percentageorflat,
        amount,
        couponexpirydate,
        count
    })
    newCouponmanagement.save()
  .then(() => res.json('Couponmanagement added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Couponmanagement.findById(req.params.id)
    .then(couponmanagement => {
        couponmanagement.coupontext = req.body.coupontext;
        couponmanagement.percentageorflat = req.body.percentageorflat;
        couponmanagement.amount = req.body.amount;
        couponmanagement.couponexpirydate =req.body.couponexpirydate;
        couponmanagement.count=req.body.count;
      couponmanagement.save()
        .then(() => res.json('Couponmanagement updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Couponmanagement.findByIdAndDelete(req.params.id)
    .then(() => res.json('Couponmanagement deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Couponmanagement.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;