//(1)Print prime numbers between 100 to 1000
//function to check if a number  is prime

// let a = 100;
// let b = 1000;
// function isPrime(num){
//     if(num<2) return false;
//     for(let i = 2;i<=Math.sqrt(num);i++){
//         if(num % i === 0) return false
//     }
//     return true
// }
//Print prime numbers between 100 to 1000
// for(let i = a;i<=b;i++){
//     if(isPrime(i)){
//        console.log(i)
//     }
// }

//(a) isPrime(num) checks if a number is divisible by any number from 2 to √num.
//(b) if divisible it's not prime otherwise, It's prime
//(c) Loop from 100 to 1000 and print numbers that pass prime check

//(2) find unique value(non-duplicate) from array -Main three methods
//(a)Using set fastest and Easiest

// const arr = [1, 2, 3, 2, 4, 1, 5];
// const uniqueArr = [...new Set(arr)];     
// console.log(uniqueArr)

//Explanation - new Set(arr) Removes duplicates automatically,[...Set] Converts the set back to an array

//(b) Using filter() and  indexOf()
// const arr = [1, 2, 3, 2, 4, 1, 5];
// const uniqueArr = arr.filter((item, index)=>arr.indexOf(item)===index);
// console.log(uniqueArr)
//Explanation - indexOf() always gives the first index of value. filter() - lets only those elements pass whose first index matchs their current index
 //filter() - Create a new array with elements that pass the condition inside  the callback.

 //(c) Using reduce
//  const arr = [1, 2, 3, 2, 4, 1, 5];

//  const uniqueA  = arr.reduce((acc, curr)=>{
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc
//  }, [])

//  console.log(uniqueA)
 //Exlanation - The reduce becomes an accumulator (Acc) in which we store unique elements.
 //If the current element is not already in the Acc.Push it 

 //(c) Using object as a Frequency Map
// const ar = [1, 2, 3, 2, 4, 1, 5];

// const obj = {}
// const uniqueArr = [];
// Step 1: Count occurrences

// for(let num of ar){
//     if(obj[num]){
//         obj[num] += 1   // already exists → increase count
//     } else{
//         obj[num] = 1   // first time → set count 1
//     }
// }
// Step 2: Push only unique values
// for(let key in obj){
//     if(obj[key] === 1){
//         uniqueArr.push(Number(key))
//     }
// }

// console.log(obj)
// console.log(uniqueArr)

//Explanation-obj ek object hai jo har number ki frequency (kitni baar aaya) store karta hai.Pehle loop me count karte hain.

//Dusre loop me sirf un keys ko lete hain jo 1 baar hi aayi → unique
//Obj is an object that stores the frequency (number of times it occurs) of each number.
//lets count in the first loop.
//In the second loop, only those keys are taken which appear only once → unique.

//(3)  Reverse String - (a) Using built-in methods
// function reverseString(str){
// return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello"))

//(b) Using a for loop

// function reverseString(str){
//       let reversed = ""
//       for(let i = str.length-1;i>=0;i--){
//         reversed +=str[i]
//       }
//       return reversed;
// }
// console.log(reverseString("hello"))


//(c) - using recursion  Recursion -  A function calling itselft with a smaller input until it reaches a stopping condition(called the basecase).

// function reverseString(str){ 
 //   if(str === "") return "";   //When the string becomes empty(""),the function stops calling itself and returns an empty string.
    //This prevents infinite recursion
   // return reverseString(str.substr(1)) + str[0];  //str.substr(1)-remove the first character  from the string
    //str[0]-then it adds first character at the end
// }
// console.log(reverseString("Hello"))

//(d) Using two- pointer technique
// function reverseString(str){
//     let arr = str.split("");
//     let left = 0 , right  = arr.length - 1;
//     while(left<right){
//         [arr[left], arr[right]] = [arr[right], arr[left]];  //swap
//         left++;
//         right--
//     }
//     return arr.join("");
// }
// console.log(reverseString('hello'))

//(4) Check Palindrome String - A string is a palindrome if it reads the same forword and backword

//two - pointer approach
// function isPalindrome(str){
//    let left = 0;
//    let right = str.length - 1;

//    while(left<right){
//     if(str[left]!==str[right]){
//         return false
//     }
//     left++;
//     right--;
//    }
//    return true;
// }
// console.log(isPalindrome('madam'));
// console.log(isPalindrome("hello"));     //o(n) time and o(1) space

//(b)-Using reverse string
// function isPalindrome(str){
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"))

//(c) - Case-Insensitive & Ignoring Non-Alphanumeric

function isPalindrome(str){
    // r//emove non-alphanumeric & convert to lowercase
     str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

     let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("No lemon, no melon")); // true
console.log(isPalindrome("hello")); // false