const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.listen(process.env.PORT, () => console.info(`⚙️  - Api is running on http://localhost:${process.env.PORT}`));
