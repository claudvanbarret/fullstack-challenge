const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const yaml = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const routes = require("./src/routes");

const swaggerDocument = yaml.load("./swagger.yaml");

const app = express();

// Load config
dotenv.config();

// Passport config
require("./src/config/passport")(passport);

app.use(helmet());
app.use(cors({ credentials: true, origin: process.env.APP_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/api",
      httpOnly: true,
      secure: false,
      maxAge: 86400000 // 24 hours
    }
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api", routes);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () => console.info(`⚙️  - Api is running on http://localhost:${process.env.PORT}`));
