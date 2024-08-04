// Chapter No.32     Extracting Parts of Date and Time in JavaScript

// Last Class
// var now = new Date();
// console.log(now);

// get day
// console.log(now.getDay());

// day name
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[now.getDay()])


// get year
// console.log(now.getFullYear());


// get hours
// console.log(now.getHours());

// get minutes
// console.log(now.getMinutes());

// get date
// var todayDate = now.getDate();
// console.log(todayDate);
// =================================================



// new stuff

// getting months name
// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// getting months by number
// var currntMonthIndexNum = now.getMonth();
// console.log(currntMonthIndexNum); // output is 7

// getting months by name
// var currntMonthName = months[currntMonthIndexNum];
// console.log(currntMonthName); // output is augest



// to set own time using Date object
// now = new Date(2024, 7, 8,  12, 0)
// console.log(now)
// 2024 year
// August is month index 7
// 8 date
// 12 hours
// 0 minutes

// printing hours and minutes in formatted string
// let currentHours = now.getHours();
// let currentMinutes = now.getMinutes();
// console.log({currentHours, currentMinutes});
// or 
// if (now.getMinutes() === 0) {
//   console.log(`${currentHours} : 00`)
// } else {
//   console.log(`${currentHours} : ${currentMinutes}`)
// }




// deciding AM and PM, hours > 11 PM else AM
// var hours = now.getHours();
// var minutes = now.getMinutes();

// if (hours > 12) {
//   console.log(`${hours}:${minutes} PM`) 
// } else {
//   console.log(`${hours}:${minutes} AM`)
// }
// ============================================================================================




// Chapter No.033    Specifying a Date and Time
// we can set own time to "Date" object
// var futureDate = new Date("July 15, 2025");
// var futureDate = new Date("July 15, 2025, 3:32");
// console.log(futureDate);



// Days to election
// let now = new Date();
// let election = new Date("December 8, 2024");
// // console.log(election)
// let timeToElectionInMilliseconds = election - now;
// // console.log(timeToElectionInMilliseconds)
// let dayToElection = timeToElectionInMilliseconds / (1000 * 60 * 60 * 24)
// console.log(Math.floor(dayToElection))





// hours to election
// let now = new Date();
// let election = new Date("December 8, 2024");
// let timeToElectionInMilliseconds = election - now;
// console.log(timeToElectionInMilliseconds)
// let dayToElection = timeToElectionInMilliseconds / (1000 * 60 * 60)
// console.log(Math.floor(dayToElection))

// =============================================




// Chapter No.34  Changing Elements of a Date and Time

// setFullYear
// let now = new Date();

// console.log({now})
// console.log("Before year: ", now.getFullYear());

// now.setFullYear(2045)
// now.setMonth(11)
// now.setDate(15)
// now.setHours(1)
// now.setMinutes(30)

// console.log({now})
// console.log("After year: ", now.getFullYear());

// ==============================================




// exercise of chapter 32, 33, 34

// problem 01
// let currentDate = new Date();
// console.log(currentDate.getFullYear())
// console.log(currentDate.getMonth())
// console.log(currentDate.getDate())
// console.log(currentDate.getHours())
// console.log(currentDate.getMinutes())
// console.log(currentDate.getSeconds())




// problem 02
// let now = new Date("July 4, 2024, 12:00 PM");
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getHours());

// console.log(`YYYY-MM-DD HH: `, now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours())




// problem 03
// let now = new Date(2024, 6, 4, 12, 0);
// console.log(now)

// Changing element of date and time using (set method)
// now.setMonth(11);
// now.setDate(25);
// now.getFullYear(2025);


// update date and time
// console.log(now);

// now print the given format (YYYY-MM-DD) form the updated time
// console.log(`YYYY-MM-DD: `, now.getFullYear(), now.getMonth(), now.getDate())





// problem 04
// let birthDay = new Date("Mar 4, 2002")
// console.log(birthDay)

// let daysOfWeek = birthDay.getDay()

// // Print the day of the week
// console.log(daysOfWeek);

// Explanation of the output:
// 0 represents Sunday
// 1 represents Monday
// 2 represents Tuesday
// 3 represents Wednesday
// 4 represents Thursday
// 5 represents Friday
// 6 represents Saturday






// problem 05
// let currentYearFirstDay = new Date(2024, 0, 1, 0, 0, 0)
// console.log(currentYearFirstDay)

// let currentYear = currentYearFirstDay.getFullYear();
// let currentMonth = currentYearFirstDay.getMonth() + 1;
// let currentDay = currentYearFirstDay.getDate();
// let currentHours = currentYearFirstDay.getHours();
// let currentMinutes = currentYearFirstDay.getMinutes();

// console.log(`YYYY-MM-DD HH:MM ${currentYear}-${currentMonth}-${currentDay}  ${currentHours}0:${currentMinutes}0`)






// problem 06
// Get the current date
// let currentDate = new Date();
// console.log(currentDate);

// Add 5 days to the current date
// currentDate.setDate(currentDate.getDate() + 5);

// Updated date
// let updatedCurrentDate = currentDate
// console.log(updatedCurrentDate);

// print the updated date in the format "YYYY-MM-DD".
// console.log(`YYYY-MM-DD: `, updatedCurrentDate.getFullYear(), updatedCurrentDate.getMonth() + 1, updatedCurrentDate.getDate())






























































































































































































