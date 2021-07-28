const router=require('express').Router();
let Role=require('../models/role.model');
router.route('/').post((req, res) => {
    Role.find()
      .then(roles => res.json(roles))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Role.findById(req.params.id)
      .then(roles => res.json(roles))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const role = req.body.role;
    const description = req.body.description;
    const newRole=new Role({
        role,
        description
    })
    newRole.save()
  .then(() => res.json('Role added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Role.findById(req.params.id)
    .then(role => {
      role.role = req.body.role;
      role.description = req.body.description;
      role.save()
        .then(() => res.json('Role updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Role.findByIdAndDelete(req.params.id)
    .then(() => res.json('Role deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Role.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;