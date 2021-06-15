const router = require("express").Router();
const professionalController = require("../controllers/professional.controller");

router.get("/", professionalController.index);
router.post("/", professionalController.store);
router.get("/:id", professionalController.read);
router.put("/:id", professionalController.update);
router.delete("/:id", professionalController.delete);

module.exports = router;
