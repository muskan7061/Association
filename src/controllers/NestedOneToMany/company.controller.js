const { Comapany } = require("../../models/NestedOneToMany/company.model");
const { Product } = require("../../models/NestedOneToMany/product.models");
const {Comment} = require("../../models/NestedOneToMany/comment.model")
const {Sequelize} = require("sequelize")

const addComapny = async (req, res) => {
  try {
    const { companyName, city } = req.body;
    const createCompany = await Comapany.create({ companyName, city });
    return res.status(200).json({
      data: createCompany,
    });
  } catch (error) {
    console.log("Error in addCompany", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


// eager laoding
const getCompanyOne = async (req, res) => {
  try {
    const id = req.params.id;
    const companyFindOne = await Comapany.findOne({
      where: { id: id },
      include: [
        {
          model: Product,
          as: "product",
     
        },
      ],
    });

    return res.status(200).json({
      message: "fetch company by id successfully",
      data: companyFindOne,
    });
  } catch (error) { 
    console.log("Error in getCompanyOne", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllCompany = async (req, res) =>{
    try {
        const getAll = await Comapany.findAll({
            include: [
                {
                  model: Product,
                  as: "product",
                  required: true,
                  // this is for filtering thats why manufactureDate companyID createdAt updatedAt giving data 
                  where:{
                    product: Sequelize.col('product.createdAt'),
                  },
                  // where: {
                  //   productName: 'Ecommerce'
                  // } 
                },
              ],
        })
        return res.status(200).json({
            data: getAll
        })
    } catch (error) {
        console.log("Error in getAllCompany", error);
        return res.status(500).json({
          message: "Internal server error",
          error: error.message,
        });
    }
}

module.exports = { addComapny, getCompanyOne, getAllCompany};
