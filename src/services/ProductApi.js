export async function getProducts() {
  const result = await fetch("http://localhost:5000/api/product", {
    method: "GET",
  });

  return result.json();
}
