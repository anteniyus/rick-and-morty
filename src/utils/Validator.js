export const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";

export const notNullArray = (arrayToCheck) =>
  Array.isArray(arrayToCheck) && arrayToCheck.length;

export const isObject = (objectToCheck) =>
  objectToCheck && objectToCheck.constructor === Object;

export const isEmptyObject = (objectToCheck) =>
  isObject(objectToCheck) && Object.keys(objectToCheck).length === 0;
