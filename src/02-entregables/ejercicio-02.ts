console.log("************** DELIVERABLE 02 *********************");
// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10, 11, 12];

const concat = (a: number[], b: number[]) => {
  return [...a, ...b];
};

console.log(concat(arr1, arr2));

// Opcional
// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const concatNewVersion = (...arrays: number[][]) => {
  return arrays.reduce<number[]>((acc, elem) => [...acc, ...elem], []);
};

console.log(concatNewVersion(arr1, arr2, arr3));
