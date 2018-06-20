const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

//all these routes are referenced in utils/API.js
//and they call on the articlesController.js

// Matches with "/api/articles" bc of routes/index.js (add /api) and routes/api/index.js (add /articles)
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// router.route("/api/articles")
//   .post(articlesController.create)
//   .get(articlesController.findAll);

// Matches with "/api/articles/:id"
router.route("/:id")
  // .get(articlesController.findById)
  // .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
