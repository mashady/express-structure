const clg = function (req, res, next) {
  console.log("Hello from ", req.url);
  next();
};
export default clg;
