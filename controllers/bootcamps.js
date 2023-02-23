//GET/api/v1/bootcamps (public)
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//GET/api/v1/bootcamps/:id (public)
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

//POST/api/v1/bootcamps (private)
exports.postBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create a new bootcamp" });
};

//PUT/api/v1/bootcamps/:id (private)
exports.editBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update or alter bootcamp ${req.params.id}` });
};

//DELETE/api/v1/bootcamps/:id (private)
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
