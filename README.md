# accuenergy-code-submission - Front-End - version 1.0.0

This is a project for Accuenergy's code submission. 
The page is deployed using Github Pages at: https://isissi.github.io/

## Features
This single web page includes the following features: 
- A button to support user location acquisition from browser.
- A module which allows user to input the name of a location. (Searching feature is triggered by both button click, and press enter key on the keyboard)
  1. Display the location on the map and add a marker to each searched location every time when the location is changed.
  2. A table with pagination to show all searched places:
    - It displays a maximum of 10 records on each page.
    - A checkbox at the beginning of each row to allow user to select multiple records at the same time.
    - A delete button on the top of it to delete all selected records as well as the marker on the map.
  3. Display the time zone and local time of the latest searched location. 

## System dependencies
- SASS
- Ant Design
- Google Maps API
- React Geocode
- Axios
- React Loading Skeleton
- Web Vitals

## Gif Screenshots
1. Get latitude, logitude & address from browser
![Get geolocation](https://github.com/isissi/accuenergy-code-submission/blob/main/public/screenshots/getGeolocation.gif?raw=true "Get geolocation")

2. Search location
![Search location](https://github.com/isissi/accuenergy-code-submission/blob/main/public/screenshots/searchLocation.gif?raw=true "Search location")

3. Delete location
![Delete location](https://github.com/isissi/accuenergy-code-submission/blob/main/public/screenshots/deleteLocation.gif?raw=true "Delete location")

## How To Setup
1. cd into the directory 
2. Run `npm install` to install the dependencies.
3. Rename .env.development.example.local to .env.development.local and add a valid Google Maps API key string.
4. Run `npm start`
