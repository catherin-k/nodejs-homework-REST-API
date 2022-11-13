const express = require("express");

const { contactsCtrl } = require("../../controllers");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(contactsCtrl.getAll));

router.get("/:contactId", authenticate, ctrlWrapper(contactsCtrl.getById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(contactsCtrl.add)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(contactsCtrl.updateStatusContact)
);

router.delete(
  "/:contactId",
  authenticate,
  ctrlWrapper(contactsCtrl.removeById)
);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(contactsCtrl.updateById)
);

module.exports = router;
