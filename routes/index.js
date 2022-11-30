const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/category", require("./category.router"));
router.use("/tag", require("./tag.routes"));
router.use("/product", require("./product.routes"));

module.exports = router;
