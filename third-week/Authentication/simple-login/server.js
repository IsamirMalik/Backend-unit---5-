const express = require("express");
const connectToDB = require("./configs/mongodb.config");
const UserRouter = require("./routes/user.routes");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();


connectToDB()
app.use(express.json());

app.get("/test", (req, res) => {
  try {
    res.status(200).json({ message: "This is test route" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
/// User Router
app.use("/users", UserRouter)

// Handling undefined route
app.use((req, res) => {
  try {
    res.status(200).json({ message: "This request is undefined" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log("Server started");
});
