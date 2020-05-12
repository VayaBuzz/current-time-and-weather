// 
//  invisibleEmail.js
// 
// Given an array of inputs (location name, postal code), 
// log the current time and weather for those locations.
// Example: "./weather New York, 10005, Tokyo, São Paulo, Pluto"
// 
// We'll make this a functional program.
// Each function should:
// have a single responsibility,
// give consistent results for consistent input,
// have no side-effects (unintentional modification of other parts of the program).

// High level overview of the functions we probably need:
// 
// * main program (should cleanly exit at any stage if things go awry.)
//      accept input array
// * validateInput(): throw error if input is not an array of strings
// * cleanInput(): cherry picks bad data out of the individual strings such as ".\" or "weather"
// * createConnectionString(): based on values of the array.
// * fetchTimeAndWeather(): attempt connection to weather API
//      if API not available, throw error
// * receive result from weather API
//      if unexpected result, throw error
// * parseWeatherResult(): parse result into just the info we need, a time/temp array.
// * alignResults(): pad spacing into the array strings so they would align nicely when printed.
// * displayResults(): run output function to display time/temp array
// 
// exit.


function validateInput(x) {
  return x.every(function(i){ return typeof i === "string" });
}

main = (locationArray) => {
  console.log('main function');
  console.log(locationArray);

  // validate we have an arry of only strings as input
  if (!(validateInput(locationArray))){
    console.log("Error: Sorry, please input an array conatining only strings");
    return;
  }
}


// 
//  Test out our code and see what happens
//  
let sampleData = ["./weather New York", "10005", "Tokyo", "São Paulo", "Pluto"];
let sampleDataNotAllStrings = ["./weather New York", "10005", 10005, "São Paulo", "Pluto"];
main(sampleData);
main(sampleDataNotAllStrings);
