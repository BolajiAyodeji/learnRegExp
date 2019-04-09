
let re;

re = /hello/;
re = /hello/i; // i flag == case insensitive
// re = /hello/g; // Global flag == Search entire content

console.log(re);
console.log(re.source);

// exec() - Return results in an array or null
const results = re.exec('hello world');
const results2 = re.exec('hi world')

console.log(results);
//["hello", index: 0, input: "hello world", groups: undefined]

console.log(results2);
//null

console.log(results[0]);
console.log(results.index);
console.log(results.input);

// test() - Returns true or false
const results3 = re.test('Hello');
const results4 = re.test('hello');

console.log(results3);
//false

console.log(results4);
//true

// match() - Return result array or null
const str = 'Hello there';
const result = str.match(re);

console.log(result)

// search() - Return index of the first match, else returns -1
const str2 = 'Bolaji Hello there';
const result2 = str2.search(re);

console.log(result2);

// replace() - Returna new string with some/or matches of a pattern
const str3 = 'Hello there';
const newStr = str.replace(re, 'hi');

console.log(newStr);
