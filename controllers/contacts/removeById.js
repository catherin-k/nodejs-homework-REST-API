const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw RequestError(404, "Not Found");
  }
  res.status(200).json({ message: "Delete success" });
};

module.exports = removeById;
