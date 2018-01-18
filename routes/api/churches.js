const router = require("express").Router();
const churchesController = require("../../controllers/churchesController");

// Matches with "/api/books"
router.route("/")
  .get(churchesController.findAll)
  .post(churchesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(churchesController.findById)
  .put(churchesController.update)
  .delete(churchesController.remove);

module.exports = router;
