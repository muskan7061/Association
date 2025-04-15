const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./config/db");
const oneToOne = require("./routes/oneToOne.route")
const oneToManyRouter = require("./routes/oneToMany.route");
const nestedRouter = require("./routes/nestedOneToMany.route")
const manyToManyRouter = require("./routes/manyToMany.route")
require("./models/index");

dotenv.config("./.env");

const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// for one to one 
app.use("/oneToOne", oneToOne);
// for one to one
app.use("/oneToMany", oneToManyRouter);
// for one to many
app.use("/nested/many", nestedRouter)   
// for many to many 
app.use("/manyToMany",  manyToManyRouter)
 
// sequelize
//   .sync({ force: true })
//   .then(() => console.log("Sync"))
//   .catch((error) => console.log("Sync FAILED", error));

app.listen(process.env.PORT || 8080, () => {
  console.log("App is listing on", process.env.PORT || 8080);
});
