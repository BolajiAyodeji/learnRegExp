
let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;         // Must start with
re = / world$/i;    // Must ends with
re = /^hello$/i;    // Must start and end with
re = /^h.llo$/i;    // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;  //Escape character

// Brackets [] - Character sets
re = /gr[ae]y/i;     // Must be a or e
re = /[GF]ray/i;     // Must be G or F
re = /[^GF]ray/i;    // Match anything, except a G or F
re = /[A-Z]ray/;     // Match any uppercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9]ray/;     // Match any digit

// Braces {} - Qunatifiers
re = /Hel{2}o/i;      // Must occur exactly {x} amount of times
re = /Hel{2,4}o/i;    // Must occur between {x to y}
re = /Hel{2,}o/i;     // Must occur at least {x} times

// Parenthesis () - Grouping
re = /([0-9]x){3}/i;
re = /^([0-9]x){3}$/i;

// Shorthand Character Classes
re = /\w/i;       // Word character - alphanumeric or _
re = /\w+/i;      // + = one or more
re = /\W/i;       // non word characters
re = /\d/i;       // Match any digit
re = /\d+/i;      // Match any digit 0 or more times
re = /\D/i;       // Match any non digit
re = /\s/i;       // Match whitespace character
re = /\S/i;       // Match non whitespace character
re = /Hell\b/i;   // Word boundary

// Assertions
re = /x(?=y)/i;   // Match x only if its followed by y
re = /x(?!y)/i;   // Match x only if NOT followed by y


const str = 'xccy';

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str);
