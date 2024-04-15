// Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // return a new array containing the first two drivers
  }
  
  // Declare a variable with const that is assigned an anonymous function.
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // return a new array containing the last two drivers
  }
  
  // This is an array containing two elements: the two functions that we previously defined.
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  // Declare a variable with const and assign a function returned by createFareMultiplier() to it.
  const fareDoubler = createFareMultiplier(2); // doubles the fare
  
  // Declare a variable with const and assign a function returned by createFareMultiplier() to it.
  const fareTripler = createFareMultiplier(3); // triples the fare
  
  // This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }
  
  // Example usage:
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(returnFirstTwoDrivers(drivers)); // => ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(drivers)); // => ['Amari', 'Mo']
  
  console.log(fareDoubler(10)); // => 20
  console.log(fareTripler(10)); // => 30
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // => ['Amari', 'Mo']
