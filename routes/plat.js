import express from "express";

import { addOnce, getrestaurant, deleteOnce } from "../controller/plat.js";

const router = express.Router();

router.route("/:restaurant").get(getrestaurant);
router.route("/:restaurant/:menu").post(addOnce).delete(deleteOnce);

export default router;
