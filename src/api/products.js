const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products?categoryId=2`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};
