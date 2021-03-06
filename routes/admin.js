const router=require('express').Router();
const passport=require('passport');
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
// const upload=multer({dest:'uploads/'});
let Admin=require('../models/admin.model');
router.route('/').post((req, res) => {
    Admin.find()
      .then(admins => res.json(admins))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Admin.findById(req.params.id)
      .then(admin => res.json(admin))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.post('/signup',upload.single('profilepicture'),(req,res,next)=>{
  const Admins=new Admin({email:req.body.email,profilepicture:req.file.path,role:req.body.role,username:req.body.username,address:req.body.address,dateofbirth:req.body.dateofbirth,phonenumber:req.body.phonenumber});   
        Admin.register(Admins,req.body.password,function(err,admin){
            if(err)
            {
              var redir = { returnCode: "Failure",
                            returnMsg:"Admin Already Registered"};
                            return res.json(redir);
                          }
            else{
                passport.authenticate("adminLocal")(req,res,function(){
                    if (req.user) {
                        var redir = { returnCode: "Success",
                                      returnMsg:"Admin registered Successfully"};
                        return res.json(redir);
                  } else {
                    res.status(400).json({ message: 'SignupFailed' });
                  }
                });
            }
        })
    });
    router.post('/update/:id',upload.single('profilepicture'),(req,res,next)=>{
      Admin.findById(req.params.id)
        .then(admin => {
          admin.username = req.body.username;
          admin.email = req.body.email;
          admin.profilepicture = req.file.path;
          admin.save()
            .then(() => res.json('Admin updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });
router.route('/login').post((req,res)=>{
   if(!req.body.email){
    res.json({success: false, message: "email  was not given"})
  } else {
    if(!req.body.password){
      res.json({success: false, message: "Password was not given"})
    }else{
      passport.authenticate('adminLocal', function (err, user, info) { 
         if(err){
           res.json({success: false, message: err})
         } else{
          if (! user) {
            var redir={
                Code:"Fa",
                Msg:"Login Failed"
            }
            return res.json(redir)
          } else{
            req.login(user, function(err){
              if(err){
                res.json({success: false, message: err})
              }
              else{
                  var redir={
                      Code:"Su",
                      Msg:"Login Success",
                      id:user._id
                  }
                  return res.json(redir)
              }
            })
          }
         }
      })(req, res);
    }
  }
 });
 router.route('/forgotpassword').post((req,res)=>{
    Admin.findOne({ email: req.body.email })
    .then((admin) => {
        admin.setPassword(req.body.password,(err, admin) => {
            if (err) return next("User Not Found");
            admin.save();
            res.status(200).json({ message: 'Successful Password Reset' });
        });
    })
    .catch((err)=>{
      res.json("Admin  Not  Found")
    })
});
 router.route('/changepassword').post((req,res)=>{
  Admin.findOne({ email: req.body.email })
  .then((admin) => {
      admin.changePassword(req.body.oldpassword, req.body.newpassword,(err, admin) => {
          if (err) return next(err);
          admin.save();
          res.status(200).json({ message: 'Password Change Successful' });
      });
  })
  .catch((err)=>{
    res.json("Admin  Not  Found")
  })
});
 module.exports=router;