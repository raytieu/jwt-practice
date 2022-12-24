const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json()); //req.body
app.use(cors());

//Routes//

//Register and Log-in routes

app.use("/auth", require("./routes/jwtAuth"));

//Dashboard Route

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
