exports.postsGET = (req, res, next) => {
  res.send("posts GET");
};

exports.postsPOST = (req, res, next) => {
  res.send("posts POST");
};

exports.singlePostGET = (req, res, next) => {
  res.send("Single post GET");
};

exports.singlePostPUT = (req, res, next) => {
  res.send("Single post PUT");
};

exports.singlePostDELETE = (req, res, next) => {
  res.send("Single post DELETE");
};
