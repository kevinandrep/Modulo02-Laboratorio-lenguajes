console.log("************** DELIVERABLE 01 *********************");

const array1 = [1, 2, 3, 4, 5, 6];
// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = <T>([primero]: T[]) => {
  return primero;
};

console.log(head(array1));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>([, ...resto]: T[]): T[] => {
  return resto;
};

console.log(tail(array1));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = <T>(array: T[]): T[] => {
  return array.slice(0, -1);
};

console.log(init(array1));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = <T>(array: T[]) => {
  const [ultimo] = array.slice(-1);
  return ultimo;
};

console.log(last(array1));
