// 1. isPrime - Returns true or false, indicating whether the given number is prime.

function isPrime (number) {
  if (number === 0 || number === 1) {
    return false;
  } else if (number > 1 && number % 2 === 1 ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false

// 2.  iFactorial - Returns a number that is the iFactorial of the given number.

function iFactorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else { 
      return n * iFactorial(n - 1); 
  }
}
// or
function iFactorial (n) {
  let iFactorial = 1;
  for (let i = 2; i <= n; i++) {
      iFactorial = iFactorial * i;
  }
  return iFactorial;
}

console.log (iFactorial(1));                        // 1
console.log (iFactorial(0));                        // 1
console.log (iFactorial(6));                        // 720
console.log (iFactorial(1));                        // 1
console.log (iFactorial(0));                        // 1
console.log (iFactorial(6));                        // 720

// 3.  fib - Returns the nth Fibonacci number.

function fib (n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n-1) + fib(n-2);
  }
}

// function fib(n) {
//   let [a, b] = [0, 1];
//   while (n-- > 0) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// }

console.log (fib(0));                             // 0
console.log (fib(1));                            // 1
console.log (fib(10));                             // 55
console.log (fib(20));                             // 6765

// 4.  isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

function isSorted (a) {
  if(a == null) {
    return false;
}
else if (a.length == 0) {
    return true;
}
for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i+1]) {
        return false;
    }           
}
return true;
}

console.log (isSorted([]));                        // true
console.log (isSorted([-Infinity, -5, 0, 3, 9]));  // true
console.log (isSorted([3, 9, -3, 10]));            // false

// 5.  reverse - Reverses the given string (yes, using the built in reverse function is cheating).

function reverse (str) {
  let reversed = "";    
  for (let i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
  return reversed;
}

console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'

// 6. indexOf - Implement the indexOf function for arrays.

function indexOf(arr, number) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === number) {
      return j;
    }
  }
return -1;
}

console.log(indexOf([1, 2, 3], 1));               // 0
console.log(indexOf([1, 2, 3], 4));               // -1

// 7.  isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

function isPalindrome(str) {
  str = str.toLowerCase().replace(/ /g,'');
  return str == str.split('').reverse().join(''); 
}

console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true

// 8.  missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

function missing (a) {
  let n = a.length;
  if (!n) {
    return undefined;
} 
  let total = (n + 1) * (n + 2) / 2;  
          
  for (let i = 0; i < n; i++) { 
  total -= a[i]; 
  }
  return (total === n + 1) ? undefined : total; 

}

console.log(missing([]));                         // undefined
console.log(missing([1, 4, 3]));                  // 2
console.log(missing([2, 3, 4]));                  // 1
console.log(missing([5, 1, 4, 2]));               // 3
console.log(missing([1, 2, 3, 4]));               // undefined

// 9.  isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

function isBalanced (string) {
  const arr = string.split('');
  let open = [];
  
  const openBrackets = {
    '(': true,
    '[': true,
    '{': true,
  };
  
  const closedBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  
  for (let i = 0, length = arr.length; i < length; i++) {
    if (openBrackets[arr[i]]) {
      open.push(arr[i]);
    } else if (closedBrackets[arr[i]] && open.pop() !== closedBrackets[arr[i]]) {
      return false;
    }
  }
  
  return !open.length;
}

console.log(isBalanced('}{'));                      // false
console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // true
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false