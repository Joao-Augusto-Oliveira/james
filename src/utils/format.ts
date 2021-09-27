const options = { style: "currency", currency: "BRL" };
export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", options);
