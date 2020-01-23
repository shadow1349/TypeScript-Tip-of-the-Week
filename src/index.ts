interface Person {
  firstName?: string;
}

const person: Person = {};

function nullCoalescing() {
  const name = person.firstName ?? "John";
  console.log(name);
}

function nonNullCoalescing() {
  let name;
  if (person.firstName !== null && person.firstName !== undefined) {
    name = person.firstName;
  } else {
    name = "John";
  }
  console.log(name);
}

function doSomethingLogicalOr(value: number) {
  const variable = value || 5;
  return variable * 2;
}

function doSomethingNullCoalescing(value: number) {
  const variable = value ?? 5;
  return variable * 2;
}

(() => {
  nullCoalescing();

  nonNullCoalescing();

  console.log(doSomethingLogicalOr(0));

  console.log(doSomethingNullCoalescing(0));
})();
