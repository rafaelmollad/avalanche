// Formatear los precios a moneda argentina, elimina el espacio entre el símbolo peso y el precio
export const formatPrice = (number) => {
  return new Intl.NumberFormat('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace(/\s/g, '');
};
