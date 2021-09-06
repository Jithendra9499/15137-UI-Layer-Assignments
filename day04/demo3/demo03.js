const person1 = new Object();
person1.firstName="Jithendra";
person1.lastName="Kumar";
person1.toString=function(){​​​​​​
    return this.firstName +" "+ this.lastName;
}​​​​​​
console.log(person1);//JSON
console.log(person1.toString());//JSON

