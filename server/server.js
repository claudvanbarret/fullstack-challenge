const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const yaml = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const routes = require("./src/routes");

const swaggerDocument = yaml.load("./swagger.yaml");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

dotenv.config();

app.listen(process.env.PORT, () => console.info(`⚙️  - Api is running on http://localhost:${process.env.PORT}`));
