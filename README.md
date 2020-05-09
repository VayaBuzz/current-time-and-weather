# current-time-and-weather
Vanilla JS project for retrieving one or more locations' current time and weather

### Accepted Input
Given array of inputs (location name, postal code, etc.), log current time and weather for those locations.
```javascript
"./weather New York, 10005, Tokyo, São Paulo, Pluto"
```
##### Notes
Input file array may contain extraneous text such as "./weather cityname" rather than just "cityname"
This program will do its best to filter out extraneous text.

Input file array may contain non-earth locations such as "Saturn"
This program will do its best to maintain a sense of humor.

### Expected Output (to console)
```javascript
Location:   Time:      Weather:
----------------------------------------
New York    12:26 PM   Sunny
10005       12:26 PM   Sunny
Tokyo       01:27 AM   Cloudy
São Paulo   01:28 PM   Mostly sunny
Pluto       Unknown    Probably OK
```
