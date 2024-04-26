import { Request, Response } from "express";
import { services } from "./service";

const getProducts = async (req: Request, res: Response) => {
  let result;
  if (req?.query) {
    const query = req.query;
    result = await services.getProducts(query);
  } else {
    result = await services.getProducts(null);
    console.log("null");
  }
  res.send({
    success: true,
    statusCode: 200,
    message: "Products retrieved successfully",
    data: result,
  });
};

const getCategories = async (req: Request, res: Response) => {
  const result = await services.getCategories();

  res.send({
    success: true,
    statusCode: 200,
    message: "Products retrieved successfully",
    data: result,
  });
};

const getMostPopular = async (req: Request, res: Response) => {
  const result = await services.getMostPopular();

  res.send({
    success: true,
    statusCode: 200,
    message: "Products retrieved successfully",
    data: result,
  });
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req?.params;
  console.log("id", id);
  const result = await services.getSingleProduct(id);

  res.send({
    success: true,
    statusCode: 200,
    message: "Product retrieved successfully",
    data: result,
  });
};

const getFlashSale = async (req: Request, res: Response) => {
  const { page } = req?.query;

  const result = await services.getFlashSale(page);

  res.send({
    success: true,
    statusCode: 200,
    message: "Flash Sale Products retrieved successfully",
    data: result,
  });
};
export const controller = {
  getProducts,
  getFlashSale,
  getSingleProduct,
  getCategories,
  getMostPopular,
};
