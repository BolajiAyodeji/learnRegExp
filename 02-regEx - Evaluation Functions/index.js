
const user = {
  email: 'hi@bolajiayodeji.com'
};

try{
  // // Reference error
  // myFunction();

  // // Type error
  // null.myFunction();

  // // Syntax error
  // eval('Hello world');

  // // URL error
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name!';
    throw new SyntaxError('User has no name!');
  }

} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of the result...')
}

console.log('Program continues...')
