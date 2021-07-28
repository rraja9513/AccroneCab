const router=require('express').Router();
const passport=require('passport');
let Subadmin=require('../models/subadmin.model');
router.route('/').post((req, res) => {
    Subadmin.find()
      .then(subadmins => res.json(subadmins))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/add').post((req,res)=>{
  const Subadmins=new Subadmin({name:req.body.name,email:req.body.email,profilepicture:req.body.profilepicture,role:req.body.role});   
        Subadmin.register(Subadmins,req.body.password,function(err,subadmin){
            if(err)
            {
              var redir = { returnCode: "Failure",
                            returnMsg:"Subadmin Already Registered"};
                            return res.json(redir);
                          }
            else{
                passport.authenticate("subadminLocal")(req,res,function(){
                    if (req.user) {
                        var redir = { returnCode: "Success",
                                      returnMsg:"Subadmin registered Successfully"};
                        return res.json(redir);
                  } else {
                    res.status(400).json({ message: 'SignupFailed' });
                  }
                });
            }
        })
    });
 module.exports=router;