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

// Función para capitalizar sólo la primer letra y las letras seguidas de un punto.
export const formatString = (str) => {
  // Transformar la cadena a minúsculas y convertirla en un array de letras
  const strArr = str.toLowerCase().split('');

  let punto = false;

  for (let i = 0; i < strArr.length; i++) {
    // El caracter actual es un punto
    if (strArr[i] === '.') {
      punto = true;
    }

    // El caracter actual es una letra
    else if (strArr[i].match(/[a-z]/i)) {
      // Si es el primer caracter o si ya se leyó un punto previamente, capitalizar el caracter actual
      if (i === 0 || punto) {
        strArr[i] = strArr[i].toUpperCase();
        punto = false;
      }
    }

    // El caracter actual no es ni un punto ni una letra
    else {
      continue;
    }
  }

  return strArr.join('');
};

/* Expresiones regulares */
export const nameRegex =
  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

export const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const phoneRegex =
  /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

export const dniRegex = /^\d{2}\d{3}\d{3}$/g;

export const oneOrMoreDigitsRegex = /^[0-9]+$/;
