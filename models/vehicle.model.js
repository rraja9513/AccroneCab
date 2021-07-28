const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const vehicleSchema=new Schema(
    {
      servicename:{
          type:String
      },
      providername:{
          type:String
      },
      serviceimage:{
        type:String
    },
    pricecalculations:{
        type:String
    },
    baseprice:{
        type:String
      },
      capacity:
          {
              type:String
          },
          description:{
              type:String
          },
          outstationfare:{
            outstationonewayprice:{
                type:String
            },
            outstationroundtripprice:{
                type:String
            },
            driverbata:{
                type:String
            }
          },
          rentalfare:{
              rentalperhour:{
                  type:String
              }
          },
          peaktime:{
              time:{
                  type:String
              },
              peakprice:{
                  type:String
              }
          },
          nightfare:{
              nightfarepercentage:{
                  type:String
              }
          },
          clusteredprice:{
              cityname:{
                  type:String
              },
              distance:{
                  type:String
              },
              distanceprice:{
                  type:String
              },
              citylimit:{
                  type:String
              },
              minuteprice:{
                  type:String
              }
          }
          


    },
    {
        timestamps:true,
    }
);
const Vehicle=mongoose.model('Vehicle',vehicleSchema);
module.exports=Vehicle;