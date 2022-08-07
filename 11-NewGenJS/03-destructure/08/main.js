function ageCheck({ firstName, lastName, age }) {
  console.log(age); //?
  if (age >= 18) {
    alert(`Hi ${firstName}, ${lastName}`);
  } else {
    alert('No permission');
  }
}
let user = {
  firstName: 'bic',
  lastName: 't',
  age: 17,
};
ageCheck(user);
