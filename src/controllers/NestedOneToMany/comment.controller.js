const {Comment} = require("../../models/NestedOneToMany/comment.model")
const  addComments  = async (req, res) =>{
    try {
        const {addComments, productID} = req.body
        const createComment = await Comment.create({ addComments, productID });
        // await Comment.destroy({
        //     where:{id:1},
        //   })
        await Comment.restore({
            where: {
              id: 1
            },
          });
        return res.status(200).json({
          data: createComment,
        });
    } catch (error) {
        console.log("Error in addComments", error);
        return res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })
    }
}

module.exports = {addComments}