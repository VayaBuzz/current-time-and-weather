/*
  invisibleEmail.js
 
 Given an array of inputs (location name, postal code), 
 log the current time and weather for those locations.
 
 Example Input:
 "./weather New York, 10005, Tokyo, São Paulo, Pluto, Dallas"
 
 Example Output: 
Location:      Time:   Weather:
----------------------------------------
New York       02:05   Clear
New York       02:05   Clear
Tokyo          15:05   Partly cloudy
San Paulo      03:05   Partly cloudy
Pluto          14:05   Partly cloudy
Dallas         01:05   Clear
*/

//////////////////////////////////////////////////////////////////////////////////////////
showWeatherData = (urls) => {
  
  let requests = urls.map(url => fetch(url));
  
  Promise.all(requests)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(locations => {
    const PAD_SPACES_LOCATION = 15;
    const PAD_SPACES_TIME = 8;
    console.log("Location:".padEnd(PAD_SPACES_LOCATION) + "Time:".padEnd(PAD_SPACES_TIME) + "Weather:");
    console.log("----------------------------------------");
    locations.forEach(city => {
      let n = city.location.name.padEnd(PAD_SPACES_LOCATION);
      let t = city.location.localtime.slice(-5).padEnd(PAD_SPACES_TIME);
      let w = city.current.weather_descriptions[0]
      console.log(n + t + w);
    })
    
  });

};


//////////////////////////////////////////////////////////////////////////////////////////
createConnectionString = (location) => {
  // input:  a location  (city or zip code ok)
  // output: a http request asking for time and weather

  let weatherSite = "http://api.weatherstack.com/current?access_key="
  let apiKey = "9f59818a7e6182f67ad39a639c3c11a0" // quick, but not secure!
  let requestString = weatherSite  + apiKey + "&query=" + location;
  return requestString;
}


//////////////////////////////////////////////////////////////////////////////////////////
allArrayItemsAreStrings = (x) => {
  return x.every(function(i){ return typeof i === "string" });
}


//////////////////////////////////////////////////////////////////////////////////////////
main = (locationArray) => {

  if (!(allArrayItemsAreStrings(locationArray))){
    console.log("Error: Sorry, please input an array conatining only strings");
    return;
  }

  const connectionStrings = locationArray.map(createConnectionString);

  showWeatherData(connectionStrings);
 
}


// 
//  Test out our code and see what happens
//  
let sampleData = ["./weather New York", "10005", "Tokyo", "São Paulo", "Pluto", "Dallas"];
let sampleData2 = ["10005", "Tokyo"];
let sampleDataNotAllStrings = ["./weather New York", "10005", 10005, "São Paulo", "Pluto"];
main(sampleData);

