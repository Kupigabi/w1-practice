/*
//      index    012345678
let variable1 = "kismacska"; //string
let variable2 = 101; //number
let variable3 = true; //boolean
let variable4 = null; //null

// index:       0       1         2         3         4       5
let array = ["alma", "barack", "szilva", "vegyes", "birs", "törköly"];
let array2 = [1, 2, 3, 4, 5];
let array3 = ["auto", 54, true, undefined, false, "62"];
let array4 = [variable1, variable2, variable3, variable4];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter = counter + 1;
}

for (let counter = 0; counter < 5; counter++) {
  console.log(counter);
}

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  if (array[index].length % 2 === 1) {
    console.log(array[index], "páratlan számú karakterből áll");
  } else {
    console.log(array[index], "páros számú karakterből áll");
  }
  // console.log('end of iteratioin')
}
for (let index = 0; index < array.length; index++) {
  if (array[index].includes("l")) {
    console.log(array[index], "tartalmaz l betűt");
  } else {
    console.log(array[index], "nem tartalmaz l beetűt");
  }
  // console.log('end of iteratioin')
}

console.log("end of code");
*/

let myArray = ["Berta", "Norbert", "Nóra", "Gábor", "Szilvi", "Hanna"]

console.log(myArray[0].length)

for (let index = 0; index < myArray.length; index++){
    if (myArray[index].length % 2 === 1) {
        console.log(myArray[index], "páratlan")
    } else {
        console.log(myArray[index], "páros")
    }
}


