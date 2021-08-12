const router=require('express').Router();
let Enrollfleetowner=require('../models/enrollfleetowner.model');
router.route('/').post((req, res) => {
    Enrollfleetowner.find()
      .then(enrollfleetowners => res.json(enrollfleetowners))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/enrollfleetowner').post((req,res)=>{
    Enrollfleetowner.find({},{_id:0,createdAt:true,ofirstname:true,olastname:true,ophonenumber:true,oemail:true,oadharprooffront:true})
    .then(enrollfleetowners=>res.json(enrollfleetowners))
    .catch(err=>res.status(400).json('Error:'+err));
  });
  router.route('/search').post((req, res) => {
    Enrollfleetowner.find({oadhar : req.body.oadhar})
      .then(enrollfleetowners => res.json(enrollfleetowners))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Enrollfleetowner.findById(req.params.id)
      .then(enrollfleetowners => res.json(enrollfleetowners))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const ofirstname=req.body.ofirstname;
    const omiddlename=req.body.omiddlename;
    const olastname=req.body.olastname;
    const odateofbirth=req.body.odateofbirth;
    const ogender=req.body.ogender;
    const oemail=req.body.oemail;
    const ophonenumber=req.body.ophonenumber;
    const opermanentaddress=req.body.opermanentaddress;
    const opcountry=req.body.opcountry;
    const opstate=req.body.opstate;
    const opcity=req.body.opcity;
    const opzipcode=req.body.opzipcode;
    const ocurrentaddress=req.body.ocurrentaddress;
    const occountry=req.body.occountry;
    const ocstate=req.body.ocstate;
    const occity=req.body.occity;
    const oczipcode=req.body.oczipcode;
    const oadhar=req.body.oadhar;
    const oadharprooffront=req.body.oadharprooffront;
    const oadharproofback=req.body.oadharproofback;
    const opanproof=req.body.opanproof;
    const vehicledetails=[{
        vvehiclemodel:req.body.vvehiclemodel,
        vvehicletype:req.body.vvehicletype,
        vvehiclecapacity:req.body.vvehiclecapacity,
        vregistrationnumber:req.body.vregistrationnumber,
        vchassisnumber:req.body.vchassisnumber,
        venginenumber:req.body.venginenumber,
        vrccardnumber:req.body.vrccardnumber,
        vinsurancenumber:req.body.vinsurancenumber,
        vemmissiontest:req.body.vemmissiontest,
        vrccardrenewaldate:req.body.vrccardrenewaldate,
        vinsurancerenewaldate:req.body.vinsurancerenewaldate,
        vemmissiontestrenewaldate:req.body.vemmissiontestrenewaldate,
        vtaxrenewal:req.body.vtaxrenewal,
        vstatepermit:req.body.vstatepermit,
        vnationalpermit:req.body.vnationalpermit,
        vstatepermitdocument:req.body.vstatepermitdocument,
        vnationalpermitdocument:req.body.vnationalpermitdocument,
        vinsurancedocument:req.body.vinsurancedocument,
        vvehiclepicture:req.body.vvehiclepicture,
        vemissiontestdocument:req.body.vemissiontestdocument,
        vrccardproof:req.body.vrccardproof,
        vtaxrenewalproof:req.body.vtaxrenewalproof
    }];
    const driverdetails=[{
        ddrivername:req.body.ddrivername,
        ddriverid:req.body.ddriverid,
        ddgender:req.body.dgender,
        dpermanentaddress:req.body.dpermanentaddress,
        dpresentaddress:req.body.dpresentaddress,
        ddateofbirth:req.body.ddateofbirth,
        dmobilenumber:req.body.dmobilenumber,
        demergencycontactnumber:req.body.demergencycontactnumber,
        dadharcardnumber:req.body.dadharcardnumber,
        dinsurancenumber:req.body.dinsurancenumber,
        ddrivinglicence:req.body.ddrivinglicence,
        dlanguagesknown:req.body.dlanguagesknown,
        dpoliceverificationcertificate:req.body.dpoliceverificationcertificate,
        ddrivinglicenceproof:req.body.ddrivinglicenceproof,
        dpoliceverificationproof:req.body.dpoliceverificationproof,
        dinsuranceproof:req.body.dinsuranceproof,
        dfrontadharproof:req.body.dfrontadharproof,
        dbackadharproof:req.body.dbackadharproof
    }];
    const bankdetails={
        bbankname:req.body.bbankname,
        baccountnumber:req.body.baccountnumber,
        bbranchcode:req.body.bbranchcode,
        bifsccode:req.body.bifsccode,
        bpassbookphoto:req.body.bpassbookphoto
    };
    const newEnrollfleetowner=new Enrollfleetowner({
       ofirstname,
       omiddlename,
       olastname,
       odateofbirth,
       ogender,
       oemail,
       ophonenumber,
       opermanentaddress,
       opcountry,
       opstate,
       opcity,
       opzipcode,
       ocurrentaddress,
       occountry,
       ocstate,
       occity,
       oczipcode,
       oadhar,
       oadharprooffront,
       oadharproofback,
       opanproof,
       vehicledetails,
       driverdetails,
       bankdetails

    })
    newEnrollfleetowner.save()
  .then(() => res.json('Enrollfleetowner added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res)=>{
  Enrollfleetowner.findById(req.params.id)
    .then(enrollfleetowner => {
    enrollfleetowner.ofirstname=req.body.ofirstname;
    enrollfleetowner.omiddlename=req.body.omiddlename;
    enrollfleetowner.olastname=req.body.olastname;
    enrollfleetowner.odateofbirth=req.body.odateofbirth;
    enrollfleetowner.ogender=req.body.ogender;
    enrollfleetowner.oemail=req.body.oemail;
    enrollfleetowner.ophonenumber=req.body.ophonenumber;
    enrollfleetowner.opermanentaddress=req.body.opermanentaddress;
    enrollfleetowner.opcountry=req.body.opcountry;
    enrollfleetowner.opstate=req.body.opstate;
    enrollfleetowner.opcity=req.body.opcity;
    enrollfleetowner.opzipcode=req.body.opzipcode;
    enrollfleetowner.ocurrentaddress=req.body.ocurrentaddress;
    enrollfleetowner.occountry=req.body.occountry;
    enrollfleetowner.ocstate=req.body.ocstate;
    enrollfleetowner.occity=req.body.occity;
    enrollfleetowner.oczipcode=req.body.oczipcode;
    enrollfleetowner.oadhar=req.body.oadhar;
    enrollfleetowner.oadharprooffront=req.body.oadharprooffront;
    enrollfleetowner.oadharproofback=req.body.oadharproofback;
    enrollfleetowner.opanproof=req.body.opanproof;
    enrollfleetowner.vehicledetails=[{
        vvehiclemodel:req.body.vvehiclemodel,
        vvehicletype:req.body.vvehicletype,
        vvehiclecapacity:req.body.vvehiclecapacity,
        vregistrationnumber:req.body.vregistrationnumber,
        vchassisnumber:req.body.vchassisnumber,
        venginenumber:req.body.venginenumber,
        vrccardnumber:req.body.vrccardnumber,
        vinsurancenumber:req.body.vinsurancenumber,
        vemmissiontest:req.body.vemmissiontest,
        vrccardrenewaldate:req.body.vrccardrenewaldate,
        vinsurancerenewaldate:req.body.vinsurancerenewaldate,
        vemmissiontestrenewaldate:req.body.vemmissiontestrenewaldate,
        vtaxrenewal:req.body.vtaxrenewal,
        vstatepermit:req.body.vstatepermit,
        vnationalpermit:req.body.vnationalpermit,
        vstatepermitdocument:req.body.vstatepermitdocument,
        vnationalpermitdocument:req.body.vnationalpermitdocument,
        vinsurancedocument:req.body.vinsurancedocument,
        vvehiclepicture:req.body.vvehiclepicture,
        vemissiontestdocument:req.body.vemissiontestdocument,
        vrccardproof:req.body.vrccardproof,
        vtaxrenewalproof:req.body.vtaxrenewalproof
    }];
    enrollfleetowner.driverdetails=[{
        ddrivername:req.body.ddrivername,
        ddriverid:req.body.ddriverid,
        ddgender:req.body.dgender,
        dpermanentaddress:req.body.dpermanentaddress,
        dpresentaddress:req.body.dpresentaddress,
        ddateofbirth:req.body.ddateofbirth,
        dmobilenumber:req.body.dmobilenumber,
        demergencycontactnumber:req.body.demergencycontactnumber,
        dadharcardnumber:req.body.dadharcardnumber,
        dinsurancenumber:req.body.dinsurancenumber,
        ddrivinglicence:req.body.ddrivinglicence,
        dlanguagesknown:req.body.dlanguagesknown,
        dpoliceverificationcertificate:req.body.dpoliceverificationcertificate,
        ddrivinglicenceproof:req.body.ddrivinglicenceproof,
        dpoliceverificationproof:req.body.dpoliceverificationproof,
        dinsuranceproof:req.body.dinsuranceproof,
        dfrontadharproof:req.body.dfrontadharproof,
        dbackadharproof:req.body.dbackadharproof
    }];
    enrollfleetowner.bankdetails={
        bbankname:req.body.bbankname,
        baccountnumber:req.body.baccountnumber,
        bbranchcode:req.body.bbranchcode,
        bifsccode:req.body.bifsccode,
        bpassbookphoto:req.body.bpassbookphoto
    };
      enrollfleetowner.save()
        .then(() => res.json('Enrollfleetowner updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/updatevehicle/:id').post((req,res)=>{
    Enrollfleetowner.findByIdAndUpdate(req.params.id,
        {$push: {vehicledetails:{ vvehiclemodel:req.body.vvehiclemodel,
            vvehicletype:req.body.vvehicletype,
            vvehiclecapacity:req.body.vvehiclecapacity,
            vregistrationnumber:req.body.vregistrationnumber,
            vchassisnumber:req.body.vchassisnumber,
            venginenumber:req.body.venginenumber,
            vrccardnumber:req.body.vrccardnumber,
            vinsurancenumber:req.body.vinsurancenumber,
            vemmissiontest:req.body.vemmissiontest,
            vrccardrenewaldate:req.body.vrccardrenewaldate,
            vinsurancerenewaldate:req.body.vinsurancerenewaldate,
            vemmissiontestrenewaldate:req.body.vemmissiontestrenewaldate,
            vtaxrenewal:req.body.vtaxrenewal,
            vstatepermit:req.body.vstatepermit,
            vnationalpermit:req.body.vnationalpermit,
            vstatepermitdocument:req.body.vstatepermitdocument,
            vnationalpermitdocument:req.body.vnationalpermitdocument,
            vinsurancedocument:req.body.vinsurancedocument,
            vvehiclepicture:req.body.vvehiclepicture,
            vemissiontestdocument:req.body.vemissiontestdocument,
            vrccardproof:req.body.vrccardproof,
            vtaxrenewalproof:req.body.vtaxrenewalproof}}},
        {safe: true, upsert: true},
        function(err, doc) {
            if(err){
            console.log(err);
            }else{
                res.json('enrollfleetvehicleadded')
            }
        }
        )
  });
  router.route('/updatedriver/:id').post((req,res)=>{
    Enrollfleetowner.findByIdAndUpdate(req.params.id,
        {$push: {driverdetails:{ddrivername:req.body.ddrivername,
          ddriverid:req.body.ddriverid,
          ddgender:req.body.dgender,
          dpermanentaddress:req.body.dpermanentaddress,
          dpresentaddress:req.body.dpresentaddress,
          ddateofbirth:req.body.ddateofbirth,
          dmobilenumber:req.body.dmobilenumber,
          demergencycontactnumber:req.body.demergencycontactnumber,
          dadharcardnumber:req.body.dadharcardnumber,
          dinsurancenumber:req.body.dinsurancenumber,
          ddrivinglicence:req.body.ddrivinglicence,
          dlanguagesknown:req.body.dlanguagesknown,
          dpoliceverificationcertificate:req.body.dpoliceverificationcertificate,
          ddrivinglicenceproof:req.body.ddrivinglicenceproof,
          dpoliceverificationproof:req.body.dpoliceverificationproof,
          dinsuranceproof:req.body.dinsuranceproof,
          dfrontadharproof:req.body.dfrontadharproof,
          dbackadharproof:req.body.dbackadharproof}}},
        {safe: true, upsert: true},
        function(err, doc) {
            if(err){
            console.log(err);
            }else{
                res.json('enrollfleetdriveradded')
            }
        }
        )
  });
router.route('/:id').delete((req, res) => {
  Enrollfleetowner.findByIdAndDelete(req.params.id)
    .then(() => res.json('Enrollfleetowner deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Enrollfleetowner.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;