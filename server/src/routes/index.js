const routes = require("express").Router();
const professionalRoutes = require("./professional.route");
const professionalTypesRoutes = require("./professionalType.route");

routes.use("/professionals", professionalRoutes);
routes.use("/professionaltypes", professionalTypesRoutes);

module.exports = routes;
