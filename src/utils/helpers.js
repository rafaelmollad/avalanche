import { getDoc, getDocs, doc } from 'firebase/firestore';
import { productsRef } from '../services/fbConfig';

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

export const getItems = async (query) => {
  try {
    const response = await getDocs(query);
    const items = getDocuments(response);

    return items;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getItemsArray = async (queries) => {
  try {
    const responseArray = await Promise.all(
      queries.map((query) => getDocs(query))
    );

    let itemsArray = [];

    responseArray.forEach((array) => {
      itemsArray.push(getDocuments(array));
    });

    return itemsArray;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getItem = async (id) => {
  try {
    const ref = doc(productsRef, id);

    const response = await getDoc(ref);

    return { id: response.id, ...response.data() };
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getDocuments = (arr) => {
  return arr.docs.map((product) => ({
    id: product.id,
    ...product.data(),
  }));
};
