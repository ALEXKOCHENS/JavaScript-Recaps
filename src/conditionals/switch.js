// Switch
// console.log(`switch`);

// Switch

let grade = '';
let score = 90;

switch (score) {
  case 40:
    grade = 'F';
    console.log(`You had bad performance, grade = ${grade}`);
    break;

  case 50:
    grade = 'E';
    console.log(`You had an poor performance, grade = ${grade}`);
    break;

  case 60:
    grade = 'D';
    console.log(`You had a moderate performance, grade = ${grade}`);
    break;

  case 70:
    grade = 'C';
    console.log(`You had a good performance, grade = ${grade}`);
    break;
  case 80:
    grade = 'B';
    console.log(`You had a very good performance, grade = ${grade}`);
    break;

  case 90:
    grade = 'A';
    console.log(`You had  an excellent performance, grade = ${grade}`);
    break;
  default:
    console.log(`No marks detected, Contact your administrator!!`);
  //This is clean but better with if statements. Switches are used for known values, can't be used in value ranges,for instance if there is a score of 77, the code fails to run.
}

// Example that takes in the status of a user. here the switch statements work perfectly.

let status = 'suspended';

switch (status) {
  case 'active':
    console.log(`The user is active`);
    break;
  case 'suspended':
    console.log(`The user has been suspended`);
    break;
  case 'LoggedOut':
    console.log(`The user has logged out!`);
    break;

  default:
    console.log(`No users yet!!`);
}
