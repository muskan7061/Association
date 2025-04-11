const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./config/db");
const userRouter = require("./routes/user.route");
require("./models/index");


dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

sequelize
  .sync({ force: true })
  .then(() => console.log("Sync"))
  .catch((error) => console.log("Sync FAILED", error));

app.listen(process.env.PORT || 8080, () => {
  console.log("App is listing on", process.env.PORT || 8080);
});
