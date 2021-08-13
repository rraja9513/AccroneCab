const router=require('express').Router();
let Enrollpassenger=require('../models/enrollpassenger.model');
router.route('/').post((req, res) => {
    Enrollpassenger.find()
      .then(enrollpassengers => res.json(enrollpassengers))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Enrollpassenger.findById(req.params.id)
      .then(enrollpassengers => res.json(enrollpassengers))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/search').post((req, res) => {
    Enrollpassenger.find({firstname : req.body.firstname})
      .then(enrollpassengers => res.json(enrollpassengers))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber=req.body.phonenumber;
    const newEnrollpassenger=new Enrollpassenger({
        firstname,
        lastname,
        email,
        phonenumber
    })
    newEnrollpassenger.save()
  .then(() => res.json('Enrollpassenger added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Enrollpassenger.findById(req.params.id)
    .then(enrollpassenger => {
      enrollpassenger.firstname = req.body.firstname;
      enrollpassenger.lastname = req.body.lastname;
      enrollpassenger.email = req.body.email;
      enrollpassenger.phonenumber=req.body.phonenumber;
      enrollpassenger.save()
        .then(() => res.json('Enrollpassenger updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Enrollpassenger.findByIdAndDelete(req.params.id)
    .then(() => res.json('Enrollpassenger deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Enrollpassenger.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;