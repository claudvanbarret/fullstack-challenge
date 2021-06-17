const routes = require("express").Router();
const professionalRoutes = require("./professional.route");
const professionalTypesRoutes = require("./professionalType.route");
const authRoutes = require("./auth.route");

routes.use("/professionals", professionalRoutes);
routes.use("/professionaltypes", professionalTypesRoutes);
routes.use("/auth", authRoutes);

module.exports = routes;
