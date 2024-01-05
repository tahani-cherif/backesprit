import Restaurant from "../models/restaurant.js";
import { validationResult } from "express-validator";

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json(validationResult(req).array());
  } else {
    Restaurant.create(req.body)
      .then((restaurant) => {
        res.status(201).json(restaurant);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getAll(req, res) {
  Restaurant.find({})
    .select("nom")
    .then((restaurant) => {
      res.status(200).json(restaurant);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
export function getOnce(req, res) {
  Restaurant.findById(req.params.id)
    .then((restaurant) => {
      res.status(200).json(restaurant);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
