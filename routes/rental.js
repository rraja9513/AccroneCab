const router=require('express').Router();
let Rental=require('../models/rental.model');
router.route('/').post((req, res) => {
    Rental.find()
      .then(rentals => res.json(rentals))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Rental.findById(req.params.id)
      .then(rentals => res.json(rentals))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const hour = req.body.hour;
    const kilometer = req.body.kilometer;
    const price=req.body.price;
    const newRental=new Rental({
        hour,
        kilometer,
        price
    })
    newRental.save()
  .then(() => res.json('Rental added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Rental.findById(req.params.id)
    .then(rental => {
      rental.hour = req.body.hour;
      rental.kilometer = req.body.kilometer;
      rental.price=req.body.price;
      rental.save()
        .then(() => res.json('Rental updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Rental.findByIdAndDelete(req.params.id)
    .then(() => res.json('Rental deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Rental.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;