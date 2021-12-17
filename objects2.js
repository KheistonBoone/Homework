//* ===============Exercise 1: ===========================
// * Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.


// You can set these object properties to whatever values you want, 
// as long as name is a string, legs and tails are numbers, and friends is an array.

//Only change code below this line

let myDog = {
  'name' : "Bella",
  legs : 4,
  tails : 1,
  friends: ["Daniel", "Rochelle", "Kheiston" ]
  }
  
      
  console.log(myDog.legs)
  console.log(myDog.tails)
  console.log(myDog["name"])
  console.log(myDog.friends[1])
  



//* ===============Exercise 2: ===========================
//* Setup

// Read in the property values of testObj using dot notation.
//  Set the variable hatValue equal to the object's property 
//  hat and set the variable shirtValue equal to the object's property shirt.

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  //Only change code below this line



  const hatValue = testObj.hat      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

  console.log(shirtValue)
  console.log(hatValue)




//* ===============Exercise 3: ===========================
//* Read the values of the properties 'an entree' and 'the drink' of testObj2 using bracket notation and assign them to two new variables entreeValue and drinkValue respectively.

  // Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

// Only change code below this line

testObj2["an entree"] = "Fish"
testObj2["the drink"] = "Soda" 




//* ===============Exercise 4: ===========================
//* Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber]   // Change this line





  //* ===============Exercise 5: ===========================
  // Update the myDog2 object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

  // Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line

myDog2["name"] = "Happy Coder"


//* ===============Exercise 6: ===========================
//Add a bark property to myDo3g and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

// Only change code below this line

myDog3.barkproperty = "wolf"



//* ===============Exercise 7: ===========================
//Delete the tails property from myDog4. You may use either dot or bracket notation.

// Setup
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
// Only change code below this line

delete myDog4.tails



//* ===============Exercise 8: ===========================
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

// Only change code below this line

myDog2.music.push(
  {
    "artist": "Bryson",
    "title": "Dont",
    "release_year": 2019,
    "formats": [
      "MP4",
      "8T",
      "LP"
    ],
    "gold": true
  }


)





//* ===============Exercise 9: ===========================
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };

  
// Only change code below this line

  const gloveBoxContents = undefined;

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
// Only change code below this line

myStorage.car.inside["glove box"]


//* ===============Exercise 10: FINAL BOSS ===========================
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.


const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  

// Only change code below this line

  const secondTree = "";