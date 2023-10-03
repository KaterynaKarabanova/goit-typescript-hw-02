/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  const mergedObj = JSON.parse(JSON.stringify(objA));
  Object.assign(mergedObj, objB);
  return mergedObj;
}
export {};
