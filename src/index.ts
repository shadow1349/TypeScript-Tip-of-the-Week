import { IPerson, Person } from "./person-library";

interface IEmployee extends IPerson {
  jobTitle: string;
  salary: number;
}
class Employee extends Person implements IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
  salary: number;
  constructor(data: IEmployee) {
    super(data);
    this.jobTitle = data.jobTitle;
    this.salary = data.salary;
  }
  // Class Functions
}
const me = new Employee({
  firstName: "Sam",
  lastName: "Redmond",
  age: 100,
  jobTitle: "Software Engineer",
  salary: 1000000
});

console.log(me);