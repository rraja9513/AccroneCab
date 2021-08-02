const router=require('express').Router();
let Supportcontactsetting=require('../models/supportcontactsetting.model');
router.route('/').post((req, res) => {
    Supportcontactsetting.find()
      .then(supportcontactsettings => res.json(supportcontactsettings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Supportcontactsetting.findById(req.params.id)
      .then(supportcontactsettings => res.json(supportcontactsettings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const contacts={
        passenger:{
            pcontact:req.body.pcontact
        },
        driver:{
            dcontact:req.body.dcontact
        }
    };
    const newSupportcontactsetting=new Supportcontactsetting({
      contacts
    })
    newSupportcontactsetting.save()
  .then(() => res.json('Supportcontactsetting added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Supportcontactsetting.findById(req.params.id)
    .then(supportcontactsetting => {
      supportcontactsetting.contacts = {
          passenger:{
            pcontact:req.body.pcontact
          },
          driver:{
            dcontact:req.body.dcontact
          } 
      };
      supportcontactsetting.save()
        .then(() => res.json('Supportcontactsetting updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Supportcontactsetting.findByIdAndDelete(req.params.id)
    .then(() => res.json('Supportcontactsetting deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Supportcontactsetting.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;