import express from "express";
import { controller } from "./controller";

export const router = express.Router();

router.get("/fish", controller.getProducts);
router.get("/fish/:id", controller.getSingleProduct);
router.get("/flash-sale", controller.getFlashSale);
router.get("/categories", controller.getCategories);
router.get("/most-popular", controller.getMostPopular);
