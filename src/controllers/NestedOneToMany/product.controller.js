
const { Product } = require("../../models/NestedOneToMany/product.models");

const addProduct = async (req, res) =>{
    try {
        const {productName,productDetails,expiryDate,manufactureDate,vegeterian, companyID} = req.body
        const createProduct = await Product.create({productName,productDetails,expiryDate,manufactureDate,vegeterian, companyID})
        return res.status(200).json({
            data: createProduct
        })
    } catch (error) {
        console.log("Error in addCompany", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

module.exports = {addProduct}