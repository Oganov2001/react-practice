// Primitives

let age: number = 24;

age = 12.1;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// Complex Types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32
};

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guy';

course = 12341;

// Function & Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

stringArray[0].split('');
