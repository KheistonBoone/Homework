/* 
1. Define a function maxOfTwoNumbers that takes two numbers as
 arguments and returns the largest of them. Use the if-then-else
  construct available in Javascript. Do some googling to figure this
   out if you forget how conditionals work.
*/

function maxOfTwoNumbers(num1,num2){
if(num1>num2){
return num1
}else{
  return num2
}
}

console.log(maxOfTwoNumbers(3,4))



/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
//maxofthreenumbers
//returns the largest of the three

function maxofThree(num1,num2,num3){
    if(num1>num2 & num1>num3){
    return num1
    }else if(num2>num1 & num2>num3){
    return num2
    }
    else{
        return num3
    }
}

console.log(maxofThree(1,3,4,));

/*
3. Write a function isCharacterAVowel that takes a character
/ (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/


function isCharacterAVowel(char){
  if (char == "a" || char == "e" || char =="i" || char == "o" || char == "u") {
      return true
  }else {
          return false
      }
  }
console.log(isCharacterAVowel("z"))




/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all 
the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
and multiplyArray([1,2,3,4]) should return 24.
*/
//takes array
//adds all numbrs in array together
//for loop
//need value holder


function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
console.log(sum([1,2,3,4]));


function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}

console.log(multiply([1,2,3,4]));


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/




/*
6. Define a function reverseString that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(string){
  string = string.split('').reverse().join('')
  console.log(string)
};
reverseString('jag testar')


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/


function findLongestWord = (""){
  let longest="";
  for(let x = 0; x<arr3.length; x++){
    longest = arr3[x];
  };
return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))



/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/

function filterLongWords("")
let filter = [];
  for(let y =0; y<arr4.length;y++){
    if(arr4[y].length>n ){
      filter.push(arr2[y])
    }
  }
return filters;

console.log(filterLongWords("The quick brown fox jumped over the lazy dog"))