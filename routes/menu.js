import express from "express";
import { body } from "express-validator";

import { getAll, addOnce, getOnce } from "../controller/menu.js";

const router = express.Router();

router
  .route("/")
  .post(
    body("nom").isLength({ min: 3, max: 30 }),
    body("paysOrigine").isLength({ min: 3, max: 30 }),
    addOnce
  )
  .get(getAll);
router.route("/:id").get(getOnce);

export default router;
