const API = "http://localhost:5000/api/product";

export async function getProducts(order) {
  const result = await fetch(`${API}?filter=${order}`, {
    method: "GET",
  });

  return result.json();
}

export async function getProductByName(name) {
  const result = await fetch(`${API}/search?name=${name}`, {
    method: "GET",
  });

  return result.json();
}

export async function getProductByCategory(name) {
  const result = await fetch(`${API}/filter?category=${name}`, {
    method: "GET",
  });

  return result.json();
}
