const { Comapany } = require("../../models/NestedOneToMany/company.model");

const addComapny = async (req, res) =>{
    try {
        const {productName, city} = req.body
        const createCompany = await Comapany.create({companyName, city})
        return res.status(200).json({
            data: createCompany
        })
    } catch (error) {
        console.log("Error in addCompany", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

module.exports = {addComapny}