const express = require("express");

const { contactsCtrl } = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(contactsCtrl.getAll));

router.get("/:contactId", ctrlWrapper(contactsCtrl.getById));

router.post(
  "/",
  validateBody(schemas.addSchema),
  ctrlWrapper(contactsCtrl.add)
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(contactsCtrl.updateStatusContact)
);

router.delete("/:contactId", ctrlWrapper(contactsCtrl.removeById));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapper(contactsCtrl.updateById)
);

module.exports = router;
