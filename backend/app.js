const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

const corsOptions = {
  origin: [
    "https://expense-tracker-1-frontend.vercel.app",
    "http://localhost:5173",
  ],
  optionsSuccessStatus: 200,
};

// middlewares
app.use(express.json());
app.use(cors(corsOptions));

// clerk auth middleware
app.use(ClerkExpressRequireAuth());

// routes
readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
);


const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

server();
