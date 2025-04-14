const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./config/db");
const userRouter = require("./routes/user.route");
const nestedRouter = require("./routes/nestedOneToMany.route")
const manyToManyRouter = require("./routes/manyToMany.route")
// relationship models
require("./models/index");

dotenv.config("./.env");

const app = express();

// all middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// for one to one
app.use("/api/v1/users", userRouter);

// for one to many
app.use("/nested/many", nestedRouter)   


// for many to many 
app.use("/manyToMany",  manyToManyRouter)

sequelize
  .sync({ alter: true })
  .then(() => console.log("Sync"))
  .catch((error) => console.log("Sync FAILED", error));

app.listen(process.env.PORT || 8080, () => {
  console.log("App is listing on", process.env.PORT || 8080);
});
