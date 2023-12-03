const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/db");
const users = require("./route/userRoute");
const teams = require("./route/teamRoute");


const app = express();
dotenv.config();
connectDB();

const corsOptions = {
  origin: "https://heliverse-assinment.vercel.app",
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
  Credentials: true,
  optionSuccessStatus:200
}

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api", users);
app.use("/api", teams);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
