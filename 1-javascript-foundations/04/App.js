const names = ['alice', 'bob', 'carol'];

const capitalized = names.map(name =>
    name[0].toUpperCase() + name.slice(1)
);

console.log(capitalized); // The answer should be: ['Alice', 'Bob', 'Carol']