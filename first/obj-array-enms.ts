interface User {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
}

const person: User = {
  name: 'Dax',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
// person.role.push('Admin')
// person.role[1] = 10
