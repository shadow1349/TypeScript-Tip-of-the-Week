export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}
export class Person implements IPerson {
  firstName: string;
  lastName: string;
  age: number;
  constructor(data: IPerson) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
  }
  // Class Functions
}
