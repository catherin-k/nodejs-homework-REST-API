const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");

const { authCtrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(authCtrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(authCtrl.login)
);

router.get("/current", authenticate, ctrlWrapper(authCtrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(authCtrl.logout));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(authCtrl.updateAvatar)
);

module.exports = router;
