 let obj1 = {
          key1 : "value1",
          key2: "value2"
        }

let obj2 = new Object({
    key1 : "varsha",
    salary : 200000,
    skills: ["System design","Microservices","Event driven"],
    address:{
        city : "Guntur",
        pincode : 522006
    }
})



obj2.skills.map((x)=>{
    console.log(x);
})
 console.log(obj1)

 console.log(obj2.skills);
 console.log(obj2)




console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))


obj2.email = "siribattineni@gmail.com"
console.log(obj2)

delete obj2.email
console.log(obj2)


Object.seal(obj1);
obj1.email ="siri"
console.log(obj1)  // here value will not be added sice
obj1.key1 = "value3"
console.log(obj1)  //here since modification is made it is done successfully



console.log(Object.isSealed(obj1));



Object.freeze(obj1);
obj1.email ="siri"
console.log(obj1)  // here value will not be added sice
obj1.key1 = "value3"
console.log(obj1)  //here since modification also not done since it is frozen 



console.log(Object.isFrozen(obj1));