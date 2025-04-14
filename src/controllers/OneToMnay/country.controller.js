const { Country } = require("../../models/OneToMany/country.model");
const { State } = require("../../models/OneToMany/state.model");


const addCountry = async (req, res) =>{
    try {
        const {countryName,stateName} = req.body
        // console.log('+++++++++++++',countryName, stateName);

        
        const addcountry = await Country.findOrCreate({where: {countryName}})
        // console.log("===>", addcountry);
        
        const addstate = await State.create({
            stateName,
            countryId: addcountry[0].id
         })
         console.log("===>", addstate);
        
        return res.status(201).json({
            data: [addcountry,addstate]
        })
    } catch (error) {
        console.error("Error in addCountry", error);
        res.status(500).json({ error: error.message });
      }
    
}

module.exports = {addCountry}