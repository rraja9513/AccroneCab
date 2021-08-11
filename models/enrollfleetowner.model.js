const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const enrollfleetownerSchema=new Schema(
    {

          ofirstname:{
              type:String
          },
          omiddlename:{
              type:String
          },
          olastname:{
              type:String
          },
          odateofbirth:{
              type:String
          },
          ogender:{
              type:String
          },
          oemail:{
              type:String
          },
          ophonenumber:{
              type:String
          },
          opermanentaddress:{
              type:String
          },
          opcountry:{
              type:String
          },
          opstate:{
              type:String
          },
          opcity:{
              type:String
          },
          opzipcode:{
              type:String
          },
          ocurrentaddress:{
              type:String
          },
          occountry:{
            type:String
        },
          ocstate:{
            type:String
        },
          occity:{
            type:String
        },
          oczipcode:{
            type:String
        },
        oadharprooffront:{
            type:String
        },
        oadharproofback:{
            type:String
        },
        opanproof:{
            type:String
        },
        vehicledetails:[{
            vvehiclemodel:{
                type:String
            },
            vvehicletype:{
                type:String
            },
            vvehiclecapacity:{
                type:String
            },
            vregistrationnumber:{
                type:String
            },
            vchassisnumber:{
                type:String
            },
            venginenumber:{
                type:String
            },
            vrccardnumber:{
                type:String
            },
            vinsurancenumber:{
                type:String
            },
            vemmissiontest:{
                type:String
            },
            vrccardrenewaldate:{
                type:String
            },
            vinsurancerenewaldate:{
                type:String
            },
            vemmissiontestrenewaldate:{
                type:String
            },
            vtaxrenewal:{
                type:String
            },
            vstatepermit:{
                type:String
            },
            vnationalpermit:{
                type:String
            },
            vstatepermitdocument:{
                type:String
            },
            vnationalpermitdocument:{
                type:String
            },
            vinsurancedocument:{
                type:String
            },
            vvehiclepicture:{
                type:String
            },
            vemissiontestdocument:{
                type:String
            },
            vrccardproof:{
                type:String
            },
            vtaxrenewalproof:{
                type:String
            }
        }],
        driverdetails:[{
            ddrivername:{
                type:String
            },
            ddriverid:{
                type:String
            },
            dgender:{
                type:String
            },
            dpermanentaddress:{
                type:String
            },
            dpresentaddress:{
                type:String
            },
            ddateofbirth:{
                type:String
            },
            dmobilenumber:{
                type:String
            },
            demergencycontactnumber:{
                type:String
            },
            dadharcardnumber:{
                type:String
            },
            dinsurancenumber:{
                type:String
            },
            ddrivinglicence:{
                type:String
            },
            dlanguagesknown:{
                type:String
            },
            dpoliceverificationcertificate:{
                type:String
            },
            ddrivinglicenceproof:{
                type:String
            },
            dpoliceverificationproof:{
                type:String
            },
            dinsuranceproof:{
                type:String
            },
            dfrontadharproof:{
                type:String
            },
            dbackadharproof:{
                type:String
            }

        }],
        bankdetails:{
            bbankname:{
                type:String
            },
            baccountnumber:{
                type:String
            },
            bbranchcode:{
                type:String
            },
            bifsccode:{
                type:String
            },
            bpassbookphoto:{
                type:String
            }

        }
    },
    {
        timestamps:true,
    }
);
const Enrollfleetowner=mongoose.model('Enrollfleetowner',enrollfleetownerSchema);
module.exports=Enrollfleetowner;