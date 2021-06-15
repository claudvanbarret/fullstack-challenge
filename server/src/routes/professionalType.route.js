const router = require("express").Router();
const professionalTypeController = require("../controllers/professionalType.controller");

router.get("/", professionalTypeController.index);
router.post("/", professionalTypeController.store);
router.get("/:id", professionalTypeController.read);
router.put("/:id", professionalTypeController.update);
router.delete("/:id", professionalTypeController.delete);

module.exports = router;
