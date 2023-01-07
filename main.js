/* START CODE UNDER THIS LINE */
//Pulse Check
//Q1
let person_1 = {
    name: "mohammed" ,
    age: 23,
    gender: "male",
}
let movie = {
    name: "saw",
    length: 2,
    genre: "horror",
}
let favoriteFood = {
    favoriteFoods: ["mansaf" , "aouzi" , "breani"]
}
let store = {
    name: "mohammed",
    addre:{
        buildingNumber: 19,
        street: "name street",
    }
}

//Q2
const orderedSolarSystem = {
    Mercery: "first",
    Venus: "second",
    Earth: "third",
    Mars: "fourth",
  };


  console.log(orderedSolarSystem.Mars);
  const unorderedSolarSystem = {
    Mars: "fourth",
    Earth: "third",
    Mercery: "first",
    Venus: "second",
  };
  console.log(unorderedSolarSystem["Mars"]);


  const animalDiet = {
    mammals: {
      cat: "carnivore",
      dog: "carnivore",
      koala: "herbivore",
    },
    fish: {
      shark: "carnivore",
    },
  };
  console.log(animalDiet.mammals.koala)

  //Q3
  const studentOne = {
    englishGrade: 80,
    scienceGrade: 90,
  };
studentOne.mathGrade = 80;
studentOne.englishGrade = 90;  
studentOne.average = (studentOne.englishGrade + studentOne.scienceGrade + studentOne.mathGrade)/3


const studentTwo = {
    englishGrade: 80,
    scienceGrade: 90,
  };
studentTwo["mathGrade"] = 80;
studentTwo["englishGrade"] = 90;  
studentTwo["average"] = (studentTwo["englishGrade"]+studentTwo["scienceGrade"]+studentTwo["mathGrade"])/3


const objectKey = "key";
const objectValue = "value";

const object = {
};
object[objectKey] = objectValue ;


//Practice
//Q1
//const person_2 = (name: john, age:20)
const person_2 = {name: "john", age:20} 

//const car = {brand "Toyota", model: 2020}
const car = {brand: "Toyota", model: 2020}

//const employee ={name: "Jane", position: developer}
const employee ={name: "Jane", position: "developer"}



//Q2

/*
Access the age property.
Modify the person_3's age to be 23 years old.
Add a property called work with the value of an object with two keys, position and salary.
*/
const person_3 = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
  };
person_3.age  ;
person_3.age = 23;
person_3.work = {
    position: 1 ,
    salary: 300,
}







const employees = [
    {
      id: 1,
      name: {
        first: "John",
        last: "Doe",
      },
      position: "Designer",
    },
    {
      id: 2,
      name: {
        first: "Jane",
        last: "Doe",
      },
      position: "Engineer",
    },
  ];
employees[0].name.first;
employees[1].name.first;
employees[2] = {
    id: 3,
    name: {
      first: "mohammed",
      last: "Hammami",
    },
    position: "full-stack developer",
  }

  const cars = {
    toyota: {
      name: "prius",
      model: 2019,
    },
    nissan: {
      name: "leaf",
      model: 2020,
    },
  };
  cars.toyota.model
  cars.nissan.model
  cars.toyota.model = 2020
  cars.gms = {
    name: "acadia",
    model: 2007,
  }
  cars.toyota.isAutomatic = true
  cars.gms.isAutomatic = true
  cars.nissan.isAutomatic = true


  //Q3

  /*
    1-Write a factory function createUser that accepts two string arguments, firstName and lastName
    2- create object with two value firstName, lastName
    3- return object
  */
    const createUser = function (firstName, lastName) {
        // TODO: Your code here
        const user = {
            firstName: firstName,
            lastName: lastName,
        }
        return user;
      };

      //Q4
    /*
    1-Write a factory function createCar that accepts three string arguments, brand, name, and color
    2-create object with three value  
    3-return object
    */
    const createCar = function (brand, name, color) {
        // TODO: Your code here
        let car = {
            brand: brand,
            name: name,
            color: color,
        }
        return car
      };



      
    //Q5
    /*
    1-Write a function getFullName that accepts an object representing a person
    2-create three value firs middle last 
    3- return all
    */
    const getFullName = function (person) {
        // TODO: Your code here
        let firs = person.first
        let middle = person.middle
        let last = person.last
        return firs +" "+ middle+" " + last
      };

      //Q6
      /*
      1-Write a function olderThan that accepts two objects, personOne and personTwo
      2-if statement to know how older or if equall
      3-return name( how is older)+ " is older than"+name(how is smoller)
      */
      const olderThan = function (personOne, personTwo) {
        // TODO: Your code here
        if(personOne.age > personTwo.age){
            return personOne.name + " is older than "+personTwo.name
        }else if(personOne.age < personTwo.age){
            return personTwo.name + " is older than "+personOne.name
        }else{
            return personOne.name + " is as old as "+personTwo.name
        }
      };

      //Q7
      /*
      1-Write a function isPropertyOf that accepts a string and an object
      2-if object.string == undefined return false
      3- else return true
      */
      const isPropertyOf = function (string, object) {
        // TODO: Your code here
        console.log(string);
        console.log(object[string])
        if (object[string] === undefined){
            return false;
        }else{
            return true;
        }
      };



      //Q8
      /*
      1-Write a function numberOfKeys that accepts an object
      2-by using Object.keys()  get new array 
      3-by .length get number of keys 
      4-retur length
      */
      const numberOfKeys = function (object) {
        // TODO: Your code here
       
        return Object.keys(object).length
        
      };
      

      //Q9

    /*
    1-Write a function valuesToString that accepts an object
    2-by Object.values() get the values from object 
    3-by split conver array to string
    3- return values   
    */

    const valuesToString = function (object) {
        // TODO: Your code here
        let a = Object.values(object);
        return a.join(" ");
      };
      

//Q10

/*
1-Write a function keyInObject that accepts two arguments, object and key
2-checks if the key is present within the object BY hasOwnProperty
3-Return true if the key is present 
4-Return false if it is absent
*/
const keyInObject = function (object, key) {
    // TODO: Your code here
    return object.hasOwnProperty(key)
  };
  
//Advanced
//Q1

// JOHN >>jane,bill
//bill >> Mark,Sarah,Samuel
//Sarah >> Smith,Stan
const family = {
    name: "John",
    children: [
      {
        name: "Bill",
        children: [
          {
            name: "Mark",
            children: [], //delet
          },
          {
            name: "Sarah",
            children: [
              {
                name: "Smith",
                children: [], //delet
              },
              {
                name: "Stan",
                children: [],//delet
              },
            ],
          },
          {
            name: "Samuel",
            children: [],
          },
        ],
      },
      {
        name: "Jane",
        children: [],//delet
      },
    ],
  };
  console.log(family.children[0].children[1].children)
  console.log(family.children[0].children[2].children)

// add children to Samuel
  family.children[0].children[2].children=[
    {name: "Marry ",
    children: [],},
    {name: "Gwen",
    children: [],},
  ]


  //Delete the children property from the people who don't have children.

  delete family.children[0].children[2].children[0].children
  delete family.children[0].children[2].children[1].children
  delete family.children[0].children[0].children
  delete family.children[0].children[1].children[0].children
  delete family.children[0].children[1].children[1].children
  delete family.children[1].children


  //Q2
  /*
  1-Write a factory function createIceCream that accepts Three arguments, coneType, flavour, and topping
  2-
  */
  const createIceCream = function (coneType, iceCreamFlavour, topping) {
    return {
        coneType:coneType,
        iceCreamFlavour:iceCreamFlavour,
        topping:topping,
    }
  };
  

  //Q3
  const employeeOne = {
    id: 0,
    name: "John",
    position: "",
  };
  
  const employeeTwo = {
    id: 1,
    name: "Jane",
    position: "Developer",
  };
  
  if (employeeOne.id) {// = 0 >>false
    console.log(employeeOne.name);
  }
  
  if (employeeTwo.id) {// = 1 >> true
    console.log(employeeOne.name);//>>print name on console
  }
  
  if (employeeOne.position) {// = null or false becuse string empty
    console.log(employeeOne.name);
  }
  
  if (employeeTwo.position) {//true becuse string not empty
    console.log(employeeOne.name);
  }
  
  if (employeeOne.salary) { // undfiend false
    console.log(employeeOne.name);
  }


  //Q4
  /*
  1-Write a function isValidUser that accepts an object representing login information and
  2-if the user is valid return true
  3-if the user is otherwise  return false
  */
 
  const users = {
    mrpotato: {
      email: "mr.potato@gmail.com",
      password: "LonelyPotato",
    },
    thewiseman: {
      email: "wiseMan9999@gmail.com",
      password: "12345678",
    },
  };
  
  const isValidUser = function (loginInfo) {
    // TODO: Your code here
    if(users[loginInfo.username]){
      if(users[loginInfo.username][password] === loginInfo.password){
        if(loginInfo.password >=8  && loginInfo.email >= 6){
          return true
        }else{
          return false
        }

      }else{
        return false
      }
    }else{
      return false
    }
  };
  
  isValidUser({
    username: "MrPotato",
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  }); // => true
  
  isValidUser({
    username: "MrPotato",
    email: "mr.potato@gmail.com",
    password: "Lonely",
  }); // => false
  
  isValidUser({
    username: "MrPotato",
    email: "mr.potato.gmail.com",
    password: "LonelyPotato",
  }); // => false
  
 // things to validate:
// 1- length of the email is greater than or equal to 6 // 
// 2- length of the password is greater than or equal to 8 
// 3- email contains `@` and `.com`
// 4- the user must be in the users object // done
// 5- both of the passwords match // done
// 6- when you compare information make sure to reference the users object and access the value form there





//Q5
const compareKeys = function (objectOne, objectTwo) {
  // TODO: Your code here
  let a = Object.keys(objectOne)
  let b = Object.keys(objectTwo)
  a = a.join()
  b = b.join()
  if(a === b){
    return true
  }
  return false
};
