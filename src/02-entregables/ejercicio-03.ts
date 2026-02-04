console.log("************** DELIVERABLE 03 *********************");
// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const obj = {
  name: "kevin",
  age: 19,
};

function clone<T>(source: T): T {
  return { ...source };
}

console.log(clone(obj));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

// Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería:

function merge<T, U>(source: T, target: U) {
  return { ...clone(target), ...clone(source) };
}

console.log(merge(a, b));
// {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.
