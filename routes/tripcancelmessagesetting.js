const router=require('express').Router();
let Tripcancelmessagesetting=require('../models/tripcancelmessagesetting.model');
router.route('/').post((req, res) => {
    Tripcancelmessagesetting.find()
      .then(tripcancelmessagesettings => res.json(tripcancelmessagesettings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Tripcancelmessagesetting.findById(req.params.id)
      .then(tripcancelmessagesettings => res.json(tripcancelmessagesettings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const messages={
        passenger:{
            pmessage:req.body.pmessage
        },
        driver:{
            dmessage:req.body.dmessage
        }
    };
    const newTripcancelmessagesetting=new Tripcancelmessagesetting({
      messages
    })
    newTripcancelmessagesetting.save()
  .then(() => res.json('Tripcancelmessagesetting added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Tripcancelmessagesetting.findById(req.params.id)
    .then(tripcancelmessagesetting => {
      tripcancelmessagesetting.messages = {
          passenger:{
            pmessage:req.body.pmessage
          },
          driver:{
            dmessage:req.body.dmessage
          } 
      };
      tripcancelmessagesetting.save()
        .then(() => res.json('Tripcancelmessagesetting updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Tripcancelmessagesetting.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tripcancelmessagesetting deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Tripcancelmessagesetting.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;