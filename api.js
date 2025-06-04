const API_URL = "http://localhost:3000/products";

// Examples
export const getProducts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};
