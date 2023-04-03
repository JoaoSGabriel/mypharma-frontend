const API = "http://localhost:5000/api/product";

export async function getProducts() {
  const result = await fetch(`${API}`, {
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
