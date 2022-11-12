const getCurrent = async (req, res) => {
  const { email } = req.user;
  console.log(req.user);
  res.json({
    email,
  });
};

module.exports = getCurrent;
