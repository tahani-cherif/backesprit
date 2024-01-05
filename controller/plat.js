import Plat from "../models/plat.js";
import { validationResult } from "express-validator";

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    Plat.create({
      restaurantId: req.params.restaurant,
      menuId: req.params.menu,
    })
      .then((plat) => {
        res.status(201).json(plat);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getrestaurant(req, res) {
  Plat.find({ restaurantId: req.params.restaurant })
    .then((plat) => {
      res.status(200).json(plat);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function deleteOnce(req, res) {
  Plat.findOneAndDelete({
    restaurantId: req.params.restaurant,
    menuId: req.params.menu,
  })
    .then((plat) => {
      res.status(200).json(plat);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
