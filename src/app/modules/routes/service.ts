import { Collection } from "./model";

const getProducts = async (query: any | null | undefined) => {
  let result;
  if (query.category) {
    result = await Collection.find({ category: query.category });
  } else if (query.price) {
    const numbers = query.price.split("-");
    const minPrice = numbers[0];
    const maxPrice = numbers[1];
    result = await Collection.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });
  } else if (query.rating) {
    const rating = query.rating;
    const minRating = Number(rating);
    const maxRating = Number(rating) + 1;
    console.log(minRating, maxRating);
    result = await Collection.find({
      rating: { $gte: minRating, $lt: maxRating },
    });
  } else {
    result = await Collection.find();
  }

  return result;
};

const getCategories = async () => {
  const result = await Collection.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: 1 },
        items: { $push: "$$ROOT" },
      },
    },
  ]);

  return result;
};

const getMostPopular = async () => {
  const result = await Collection.aggregate([
    { $sort: { rating: -1 } },
    { $limit: 6 },
  ]);
  return result;
};

const getSingleProduct = async (id: any) => {
  const result = await Collection.find({ id: id });
  return result;
};

const getFlashSale = async (page: any) => {
  let result;
  if (page) {
    result = await Collection.find({ flashSale: true });
  } else {
    result = await Collection.aggregate([
      { $match: { flashSale: true } },
      { $sort: { rating: -1 } },
      { $limit: 3 },
      { $sort: { createdAt: 1 } },
    ]);
  }
  return result;
};

export const services = {
  getProducts,
  getFlashSale,
  getSingleProduct,
  getCategories,
  getMostPopular,
};
