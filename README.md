# Restaurant Application Review
---
## Table of Contents

* [Overview](#overview)
* [How to access webpage](#How to access webpage)
* [Features](#features)
* [Credits](#credits)
* [Author](#author)

## Overview

This is a webpage to find restaurants based on location and cuisine.

## How to access webpage

From inside the project directory, 
1. Open main.js and restaurant_info.js, update your MapBoxAPI key in the field mapboxToken 
2. launch a local client server using Python from your terminal: 
	a. Check python version by typing python -v
	b. Use the following commands based on Python version:
		Python 2: python -m SimpleHTTPServer 8000 
		Python 3: python3 -m http.server 8000
3. Visit the site in your browser at http://localhost:8000

## Features

The webpage provides users the option of selecting restaurants based on location and cuisine. The user can view detailed information about a restaurant as well. The webpage contains a responsive design and works on different viewports. The webpage also implements accessibility features for users. The webpage also implements ServiceWorkers so that the webpage can be cached and fetched by the users in offline mode.

## Credits

Most of the code has been written using the Udacity lectures. Aria information was taken from
1. https://www.w3.org/TR/wai-aria-practices-1.1/#link
2. https://stackoverflow.com/questions/44712753/what-is-a-suitable-wai-aria-role-attribute-for-a-map-element
3. https://stackoverflow.com/questions/2751127/how-to-select-the-first-second-or-third-element-with-a-given-class-name
4. https://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/
5. https://stackoverflow.com/questions/8059449/select-consecutive-groups-using-nth-child
6. https://www.w3schools.com/css/css_inline-block.asp

## Author

This project is developed by Marium Talha for the Udacity FrontEnd Web development Course using the starter code provided by Udacity.

## Dependencies

1. Leaflet.js
2. Mapbox

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). The user needs to fill mapboxToken field in main.js and restaurant.js with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 




