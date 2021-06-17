const router = require("express").Router();
const professionalTypeController = require("../controllers/professionalType.controller");
const { auth } = require("../middlewares/auth.middleware");

router.get("/", auth, professionalTypeController.index);
router.post("/", auth, professionalTypeController.store);
router.get("/:id", auth, professionalTypeController.read);
router.put("/:id", auth, professionalTypeController.update);
router.delete("/:id", auth, professionalTypeController.delete);

module.exports = router;
