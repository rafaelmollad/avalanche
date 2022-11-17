import { getDoc, getDocs, doc } from 'firebase/firestore';
import { productsRef } from '../services/fbConfig';

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
    const querySnapshot = await getDocs(query);

    if (querySnapshot.docs.length === 0) {
      return [];
    }

    const items = getDocuments(querySnapshot);

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
    const docRef = doc(productsRef, id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }

    return null;
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

export const formatString = (str) => {
  const strArr = str.toLowerCase().split('');

  let punto = false;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '.') {
      punto = true;
    } else if (strArr[i].match(/[a-z]/i)) {
      if (i === 0 || punto) {
        strArr[i] = strArr[i].toUpperCase();
        punto = false;
      }
    } else {
      continue;
    }
  }

  return strArr.join('');
};

export const nameRegex =
  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

export const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const phoneRegex =
  /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

export const dniRegex = /^\d{2}\d{3}\d{3}$/g;

export const oneOrMoreDigitsRegex = /^[0-9]+$/;
