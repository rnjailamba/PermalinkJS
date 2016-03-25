// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variables rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = "permalink",
			defaults = {
				propertyName: "value"
			};
		var className = 'anchor';
		var idcache = {};
		var count = 0;		


		function injectStyles() {
		var css = ['.anchor {',
		  'height: 20px;',
		  'width: 20px;',
		  'display: block;',
		  'padding-right: 6px;',
		  'padding-left: 30px;',
		  'margin-left: -30px;',
		  'cursor: pointer;',
		  'position: absolute;',
		  'top: 0;',
		  'left: 0;',
		  'text-decoration: none;',
		  'height: 100%;',
		  'background: transparent;',
		  'color: #3C4342;',
		'}',
		'',
		'.anchor:hover {',
		 'color: #3C4342;',
		'}',
		'h1,h2,h3,h4,h5,h6 { position: relative; }',
		'',
		'h1:hover .anchor span:before,',
		'h2:hover .anchor span:before,',
		'h3:hover .anchor span:before,',
		'h4:hover .anchor span:before,',
		'h5:hover .anchor span:before,',
		'h6:hover .anchor span:before {',
		  'content: "¶";',
		  'position: absolute;',
		  'left: 0px;',
		  'top: 0;',
		'}'].join('').replace(/\.anchor/g, '.' + className);

		var style = document.createElement('style');
		style.innerHTML = css;
		document.head.appendChild(style);
		}

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			// console.log(element);
			// console.log(options);
			// console.log(defaults);
			this._defaults = defaults;
			this._name = pluginName;
			this.init(options,element);
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function(options,element) {

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g
				// you can add more functions like the one below and
				// call them like the example . this.element
				// and this.settingsbelow
				this.addPermalinks(options,element);
				this.yourOtherFunction( "jQuery Boilerplate" );
			},
			addPermalinks: function(options,element){
				// console.log(element.children());
				var anchor = document.createElement('a');
			    anchor.className = className;
			    anchor.innerHTML = '<span></span>';
				console.log(anchor);

				var x = $('#element').children().each(function () {
				    // alert(this.textContent); // "this" is the current element in the loop
				    console.log(this.id);
				    if (!this.id) {
				    	// alert("id not thhere");
						// let's make one
						var id = (this.textContent||this.innerText).replace(/&.*?;/g, '').replace(/\s+/g, '-').replace(/[^\w\-]/g, '').toLowerCase();
						if (idcache[id]) {
						  	id = id + '-' + count;
						}
						this.id = id;
						idcache[id] = 1;
						// alert(id);
					}
					var clone = anchor.cloneNode(true);
					clone.href = '#' + this.id;
					this.insertBefore(clone, this.firstChild);
					count = count + 1;					
				});
				console.log($('#element').children());
			},
			yourOtherFunction: function( text ) {
				injectStyles();
			    if (window.location.hash && window.scrollY === 0) {
				  // touching the location will cause the window to scroll
				  window.location = window.location;
				}
				// some logic
				// console.log(this.element);
				// $( this.element ).text( text );
			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
