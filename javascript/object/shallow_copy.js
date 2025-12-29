const person = { // 객체는 참조 자료형
    name:"Hong Gildong"
};
const copyPerson = person;
person.name = "Hong";
console.log(person.name); // Hong
console.log(copyPerson.name); // Hong