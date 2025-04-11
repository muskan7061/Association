const {Sequelize} = require("sequelize")


const sequelize = new Sequelize(
    "association",
    "root",
    "", 
    {
        host: "localhost",
        dialect: "mysql",
        logging: true
    }
)


sequelize.authenticate()
.then(() =>console.log("Connected to Mysql"))
.catch(() => console.log("Failed  connect to Mysql"))


module.exports = sequelize 