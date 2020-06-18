// function logToConsole(wordLength) {
//   console.log(
//     "The length of the word " +
//       "'" +
//       wordLength +
//       "'" +
//       " is " +
//       wordLength.length +
//       " letters."
//   );
// }
// logToConsole("donkey");

// var myObject = {
//   name: "Doggie",
//   breed: "Labrador",
//   hobbies: ["music", "dogs", "friends"],
//   address: {
//     city: "oslo",
//     street: "t meyers gate",
//     country: "norway"
//   }
// };

// var myArrayOfObjects = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: false
//   },
//   {
//     id: 3,
//     text: "Dentist appt.",
//     isCompleted: false
//   }
// ];

// function addNums(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNums(5, 4));

// var numbers = [1, 2, 3, 4, 5];

// var lengthOfNumbers = numbers.length;

// for (var i = 0; i < lengthOfNumbers; i++) {

// document.title = "poopybear";

// console.dir(document.querySelector("h1"));
// // document.querySelectorAll();

// var heading2 = document.querySelector("h2");
// console.dir(heading2);

const listItems = document.querySelectorAll("li");
console.dir(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].innerText);
}
const div = query;
