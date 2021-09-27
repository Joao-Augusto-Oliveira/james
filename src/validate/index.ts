import { Product } from "../types/products";

export default function validateInfo(product: Product) {
  const errors = {
    id: "",
    code: "",
    title: "",
    category: "",
    provider: "",
    price: "",
  };

  if (!product.code) {
    errors.code = "O código é obrigatório";
  }

  if (!product.title) {
    errors.title = "O nome do produto é obrigatório";
  }

  if (!product.category) {
    errors.category = "A categoria é obrigatória";
  }

  if (!product.provider) {
    errors.provider = "O fornecedor é obrigatório";
  }

  if (!product.price) {
    errors.price = "O valor do produto é obrigatório";
  }

  return errors;
}
