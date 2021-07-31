const router=require('express').Router();
let Wagespercentage=require('../models/wagespercentage.model');
router.route('/').post((req, res) => {
    Wagespercentage.find()
      .then(wagespercentages => res.json(wagespercentages))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//   router.route('/:id').get((req, res) => {
//     Role.findById(req.params.id)
//       .then(roles => res.json(roles))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });
  router.route('/add').post((req,res)=>{
    const commission = req.body.commission;
    const newWagespercentage=new Wagespercentage({
       commission
    })
    newWagespercentage.save()
  .then(() => res.json('Wagespercentage added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
//   router.route('/update/:id').post((req,res)=>{
//   Role.findById(req.params.id)
//     .then(role => {
//       role.role = req.body.role;
//       role.description = req.body.description;
//       role.save()
//         .then(() => res.json('Role updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/:id').delete((req, res) => {
//   Role.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Role deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/delete').post(async(req,res)=>{
//   const ids=req.body.arrayids;
//   await Role.deleteMany({_id:{$in:ids}})
//   res.status(200).json({ message: 'Deleted Successfully'});
// });
 module.exports=router;