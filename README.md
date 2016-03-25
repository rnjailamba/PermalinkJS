[![NPM](https://nodei.co/npm/PermalinkJS.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/permalinkjs)
[![npm version](https://badge.fury.io/js/permalinkjs.svg)](https://www.npmjs.com/package/permalinkjs)
<a href="https://www.npmjs.com/package/permalinkjs">
    <img src="https://img.shields.io/travis/badges/shields.svg"
         alt="build status">
</a>
[![npm downloads](https://img.shields.io/npm/dm/permalinkjs.svg?style=flat)](https://www.npmjs.com/package/permalinkjs)


Permalinks for your html page
=======================================

Easy creation of permalinks on your html page! [ http://codepen.io/rnjailamba/full/eZRmXb/ ] 

## Installation

```shell
  npm install PermalinkJS --save
```
  
## Usage - Example 1

Just include the following script tag on your HTML page.        
All h1,h2,h3,h4,h5,h6 elements within the element div will get permalinks now.

```
  	<script>
		$(document).ready( function() {
			$( "#element" ).permalink( {
				tags: "h1,h2,h3,h4,h5,h6"
			} );
			
		} );
	</script>

```

## Usage - Example 2

```
  	<script>
		$(document).ready( function() {
			$( "#element" ).permalink( {
				tags: "h1"
			} );
			
		} );
	</script>

```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.0 Initial release
* 0.0.1 Initial release
* 0.0.2 Initial release
* 0.0.3 Initial release
