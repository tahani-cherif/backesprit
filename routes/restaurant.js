import express from "express";
import { body } from "express-validator";

import { getAll, addOnce, getOnce } from "../controller/restaurant.js";

const router = express.Router();
router
  .route("/")
  .post(
    body("nom").isLength({ min: 3, max: 30 }),
    body("adresse").isLength({ min: 3, max: 30 }),
    body("tel").isLength({ min: 8, max: 8 }).isNumeric(),
    addOnce
  )
  .get(getAll);
router.route("/:id").get(getOnce);

export default router;
