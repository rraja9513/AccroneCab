const router=require('express').Router();
let RideFeedback=require('../models/ridefeedback.model');
router.route('/').post((req, res) => {
    RideFeedback.find()
      .then(ridefeedback => res.json(ridefeedback))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const booking_id=req.body.booking_id;
    const rating=req.body.rating;
    const feedback=req.body.feedback;
    const comments=req.body.comments;
    const x_app_token=req.body.x_app_token;
    const authorization=req.body.authorization;
    const content_type=req.body.content_type;
    const newRideFeedback=new RideFeedback({
    booking_id,
    rating,
    feedback,
    comments,
    x_app_token,
    authorization,
    content_type
    })
    newRideFeedback.save()
  .then(() => res.json('RideFeedback added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 module.exports=router;