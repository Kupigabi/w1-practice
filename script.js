let x = 10 // number
let y = "text" // string
let z = true // boolean

let arr = ["one", "two", "three", "four"] // array

let arrObj = {
  0: "one",
  1: "two",
  2: "three",
  3: "four"
}

let arr2 = [10, 5, 67, 234] // array
let arr3 = ["text", 67, false, null] // array

let newArr = [arr, arr2, arr3] // array

//console.log(newArr[0][0])

let obj = {
  key4: ['egy', `kettő${x}`, "három \"négy\""],
  key: "value",
  key2: 20,
  key3: false,
  key5: {
    nestedKey: 'nested value'
  }
}

let jsonExample = [
  {
    "name": "Gipsz Jakab",
    "age": 40,
    "hair-count": 10,
    "zokni-count": 20
  },
  {
    "name": "Példa Péter",
    "age": 11,
    "hair-count": 0,
    "zokni-count": 12
  },
  {
    "name": "John Doe",
    "age": 6,
    "hair-count": 200,
    "zokni-count": 37
  }
]

for (let i = 0; i < jsonExample.length; i++) {
  //let element = jsonExample[i]
  let user = jsonExample[i]

  /* if (user.age > 18 && user["hair-count"] > 11) {
    console.log(`${user.name} kapni fog reklámot`)
  } else {
    console.log(`${user.name} nem használhatja a sampont`)
  } */

  if (user["zokni-count"] % 2 === 1) {
    console.log(`sell ${user.name} a single zokni`)
  } else {
    console.log(`${user.name} sadly has exact pair of zoknis`)
  }
}