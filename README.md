# current-time-and-weather
Vanilla JS project 

Given array of inputs (location name, postal code, etc.), log current time and weather for those locations.

### Input Example

```javascript
"./weather New York, 10005, Tokyo, São Paulo, Pluto"
```
##### Notes on Input
- Input file array may contain extraneous text such as "./weather cityname" rather than just "cityname"
  - This program will do its best to filter out extraneous text.

- Input file array may contain non-earth locations such as "Saturn"
  - This program will do its best to maintain a sense of humor.

### Output Example (to console)
```
Location:   Time:      Weather:
----------------------------------------
New York    12:26 PM   Sunny
10005       12:26 PM   Sunny
Tokyo       01:27 AM   Cloudy
São Paulo   01:28 PM   Mostly sunny
Pluto       Unknown    Probably OK
```

##### Notes on Output
Obviously a very long cityname would screw up the above text alignment.

In such a scenario, the time and weather columns will shift to the right as needed to make room.

This may just be a little console program, but UX is always important :-) 
