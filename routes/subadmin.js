const router=require('express').Router();
const multer=require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
      cb(null, Date.now() + file.originalname);  
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
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
  router.route('/search').post((req, res) => {
    Subadmin.find({name : req.body.name})
      .then(names => res.json(names))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.post('/add',upload.single('profilepicture'),(req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const profilepicture=req.file.path;
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
 router.post('/update/:id',upload.single('profilepicture'),(req,res,next)=>{
  Subadmin.findById(req.params.id)
    .then(subadmin => {
      subadmin.name = req.body.name;
      subadmin.email = req.body.email;
      subadmin.profilepicture=req.file.path;
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