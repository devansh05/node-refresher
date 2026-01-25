const express = require("express");
const router = express.Router();
const { authorsController } = require("../controllers");

router.get("/", authorsController.getAllAuthors);

router.get("/:id", authorsController.getAuthorById);

router.post("/", authorsController.addNewAuthor);

router.delete("/", authorsController.deleteAuthorById);

module.exports = router;
