interface User {
  name: string;
  age: number;
  hobbies: string[];
}

const person: User = {
  name: 'Dax',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

console.log(person.hobbies[0]);
