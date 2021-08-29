const router=require('express').Router();
let Referalpointsetting=require('../models/referalpointsetting.model');
router.route('/').post((req, res) => {
    Referalpointsetting.find()
      .then(referalpointsettings => res.json(referalpointsettings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
//   router.route('/:id').get((req, res) => {
//     Role.findById(req.params.id)
//       .then(roles => res.json(roles))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });
  router.route('/add').post((req,res)=>{
    const referalpoint = req.body.referalpoint;
    const expdate = Date(req.body.expdate);
    const newReferalpointsetting=new Referalpointsetting({
       referalpoint,
       expdate
    })
    newReferalpointsetting.save()
  .then(() => res.json('Referalpointsetting added!'))
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