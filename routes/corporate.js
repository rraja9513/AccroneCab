const router=require('express').Router();
let Corporate=require('../models/corporate.model');
router.route('/').post((req, res) => {
    Corporate.find()
      .then(corporates => res.json(corporates))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Corporate.findById(req.params.id)
      .then(corporates => res.json(corporates))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const companyemail = req.body.companyemail;
    const companyname = req.body.companyname;
    const department=req.body.department;
    const numberofemployees=req.body.numberofemployees;
    const country=req.body.country;
    const mobilenumber=req.body.mobilenumber
    const newCorporate=new Corporate({
        companyemail,
        companyname,
        department,
        numberofemployees,
        country,
        mobilenumber
    })
    newCorporate.save()
  .then(() => res.json('Corporate added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Corporate.findById(req.params.id)
    .then(corporate => {
      corporate.companyemail = req.body.companyemail;
      corporate.companyname = req.body.companyname;
      corporate.department = req.body.department;
      corporate.numberofemployees =req.body.numberofemployees;
      corporate.country=req.body.country;
      corporate.mobilenumber=req.body.mobilenumber;
      corporate.save()
        .then(() => res.json('Corporate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Corporate.findByIdAndDelete(req.params.id)
    .then(() => res.json('Corporate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Corporate.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;