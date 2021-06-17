const router = require("express").Router();
const professionalController = require("../controllers/professional.controller");
const { auth } = require("../middlewares/auth.middleware");

router.get("/", auth, professionalController.index);
router.post("/", auth, professionalController.store);
router.get("/:id", auth, professionalController.read);
router.put("/:id", auth, professionalController.update);
router.delete("/:id", auth, professionalController.delete);

module.exports = router;
