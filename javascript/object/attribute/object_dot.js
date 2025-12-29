const person = {
    name:{
        firstname:"Gildong",
        lastname:"Hong"
    },
    age:20,
    likes:["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};
console.log(person.name.lastname); // Hong
console.log(person.name.age); // 20
console.log(person.likes[0]); // apple
console.log(person.printHello()); // hello

person.name.firstname = "Kim";
console.log(person.name.firstname);