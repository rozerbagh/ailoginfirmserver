const express = require("express");
const router = express.Router();
const { login, update, getUser } = require("../controllers/user.controller");
/* GET users listing. */
router.post("/login", function (req, res, next) {
  login(res, req, next);
});
router.patch("/update", function (req, res, next) {
  update(res, req, next);
});
router.get("/:id", function (req, res, next) { 
  getUser(res, req, next);
});

module.exports = router;
