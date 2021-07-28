const router=require('express').Router();
let Subadmin=require('../models/subadmin.model');
router.route('/').post((req, res) => {
    Subadmin.find()
      .then(subadmins => res.json(subadmins))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Subadmin.findById(req.params.id)
      .then(subadmins => res.json(subadmins))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const name = req.body.hour;
    const email = req.body.kilometer;
    const profilepicture=req.body.profilepicture;
    const role=req.body.role;
    const password=req.body.password;
    const newSubadmin=new Subadmin({
        name,
        email,
        profilepicture,
        role,
        password
    })
    newSubadmin.save()
  .then(() => res.json('Subadmin added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Subadmin.findById(req.params.id)
    .then(subadmin => {
      subadmin.name = req.body.name;
      subadmin.email = req.body.email;
      subadmin.profilepicture=req.body.profilepicture;
      subadmin.role=req.body.role;
      subadmin.password=req.body.password;
      subadmin.save()
        .then(() => res.json('Subadmin updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Subadmin.findByIdAndDelete(req.params.id)
    .then(() => res.json('Subadmin deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Subadmin.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;