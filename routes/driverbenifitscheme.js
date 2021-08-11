const router=require('express').Router();
let Driverbenifitscheme=require('../models/driverbenifitscheme.model');
router.route('/').post((req, res) => {
    Driverbenifitscheme.find()
      .then(driverbenifitschemes => res.json(driverbenifitschemes))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Driverbenifitscheme.findById(req.params.id)
      .then(driverbenifitschemes => res.json(driverbenifitschemes))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const wheelalignment = req.body.wheelalignment;
    const oilchange = req.body.oilchange;
    const carinsurance=req.body.carinsurance;
    const childrenbenifit=req.body.childrenbenifit;
    const familyinsurance=req.body.familyinsurance;
    const newDriverbenifitscheme=new Driverbenifitscheme({
        wheelalignment,
        oilchange,
        carinsurance,
        childrenbenifit,
        familyinsurance
    })
    newDriverbenifitscheme.save()
  .then(() => res.json('Driverbenifitscheme added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Driverbenifitscheme.findById(req.params.id)
    .then(driverbenifitscheme => {
      driverbenifitscheme.wheelalignment = req.body.wheelalignment;
      driverbenifitscheme.oilchange = req.body.oilchange;
      driverbenifitscheme.carinsurance=req.body.carinsurance;
      driverbenifitscheme.childrenbenifit=req.body.childrenbenifit;
      driverbenifitscheme.familyinsurance=req.body.familyinsurance;
      driverbenifitscheme.save()
        .then(() => res.json('Driverbenifitscheme updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Driverbenifitscheme.findByIdAndDelete(req.params.id)
    .then(() => res.json('Driverbenifitscheme deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Driverbenifitscheme.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;