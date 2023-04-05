export function currencyFormat(info) {
  return info?.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
