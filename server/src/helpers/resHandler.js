exports.responseHandler = (req, res, message, name) => {
  // eslint-disable-next-line prefer-const
  let obj = {};
  obj.success = true;
  obj[name] = message;
  res.status(200).json(obj);
};
