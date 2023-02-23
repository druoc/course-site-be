const {
  getBootcamps,
  getBootcamp,
  postBootcamp,
  editBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const express = require("express");
const router = express.Router();

router.route("/").get(getBootcamps).post(postBootcamp);

router.route("/:id").get(getBootcamp).put(editBootcamp).delete(deleteBootcamp);

module.exports = router;
