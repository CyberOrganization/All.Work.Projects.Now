const numbers = [1,2,3]

const newNumber = [...numbers, 4];

console.log(newNumber);


const newNumber = [numbers, 5];

console.log(newNumber);

const Person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28,
}

console.log(newPerson);