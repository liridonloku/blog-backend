exports.commentsGET = (req, res, next) => {
  res.send("Comments GET");
};

exports.commentsPOST = (req, res, next) => {
  res.send("Comments POST");
};

exports.commentDELETE = (req, res, next) => {
  res.send("Single comment DELETE");
};
