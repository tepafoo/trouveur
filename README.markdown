Trouveur
========

Trouveur ("troo-ver", "finder" in French) is a Javascript library that can highlight, count, find and replace occurences of any text within HTML elements.

Getting started
---------------

This will highlight both "World" and "world" in the "example" element:

    <p id="example">Hello, World! Hello world. How is it going today?</p>
    
    var element = document.getElementById("example");
    Trouveur.highlight("world", element);

This will only highlight "world" (not capitalized):

    Trouveur.highlight("world", element, { i : false });

To un-highlight:

    Trouveur.unhighlight(element);

Unicode:

    <p id="example">Hello, World! コーディングは楽しいです。</p>
    
    var element = document.getElementById("example");
    Trouveur.highlight("コーディング", element);

API
---

Trouveur's functions are:

### Highlight
    
    Trouveur.highlight(text, element [, options]);
    

Scans through the given HTML `element` and highlights occurrences of the given `text`.

**Input**

`text` {String} text to match  
`element` {HTMLElement} HTML element to scan through  
`options` {Object} optional object with any of the following optional properties:  
`options.i` {Boolean} `true` for case-insensitive matching  
`options.w` {Boolean} `true` for whole-word matches only  
  
The default options are:  

    {
      i : true, // case insensitive
      w : false // not whole-word
    }

**Output**

`undefined` does not return anything  
or throws an error {Error} if any of the inputs are invalid

### Un-highlight
    
    Trouveur.unhighlight(element);
    

Un-highlights any matches contained in `element` that were previously highlighted through `Trouveur.highlight()`, `Trouveur.find()`, `Trouveur.count()` or `Trouveur.replace()`.

**Input**

`element` {HTMLElement} HTML element to scan through

**Output**

`undefined` does not return anything  
or throws an error {Error} if the input element is invalid  

### Find
    
    Trouveur.find(text, element [, options]);
    

Scans through the given HTML element and finds occurrences of the given text.

**Input**

`text` {String} text to match  
`element` {HTMLElement} HTML element to scan through  
`options` {Object} optional object with any of the following optional properties:  
`options.i` {Boolean} `true` for case-insensitive matching  
`options.w` {Boolean} `true` for whole-word matches only  
`options.h` {Boolean} `true` to highlight matches  
`options.r` {String} return type, any of: `'fn' 'an' 'aon' 'aun'` meaning `'first node' 'any node' 'all ordered nodes' 'all unordered nodes'`  

The default options are:

    {
      i : true, // case insensitive
      w : false, // not whole-word
      h : true, // highlight matches
      r : 'aun' // all unordered nodes
    }

**Output**

returns {Array} an array of HTML elements that contain the given text. The number of nodes and their order depends on the value used for `options.r`  
or throws an error {Error} if any of the inputs are invalid  

### Count
    
    Trouveur.count(text, element [, options]);
    

Scans through the given HTML element and counts occurrences of the given text.

**Input**

`text` {String} text to match  
`element`{HTMLElement} HTML element to scan through  
`options` {Object} optional object with any of the following optional properties:  
`options.i` {Boolean} `true` for case-insensitive matching  
`options.w` {Boolean} `true` for whole-word matches only  
`options.h` {Boolean} `true` to highlight matches  

The default options are:

    {
      i : true, // case insensitive
      w : false, // not whole-word
      h : true // highlight matches
    }

**Output**

returns {Number} the number of occurrences of the given text in the given HTML element  
or throws an error {Error} if any of the inputs are invalid  

### Replace
    
    Trouveur.replace(text, replacement, element [, options]);
    
    
Scans through the given HTML element and replaces occurrences of the given text.  

`text` {String} text to match  
`replacement` {String} text replacement  
`element` {HTMLElement} HTML element to scan through  
`options` {Object} optional object with any of the following optional properties:  
`options.i` {Boolean} `true` for case-insensitive matching  
`options.w` {Boolean} `true` for whole-word matches only  
`options.h` {Boolean} `true` to highlight matches  
`options.r` {String} return type, any of: `'fn' 'an' 'aon' 'aun'` meaning `'first node' 'any node' 'all ordered nodes' 'all unordered nodes'`  

The default options are:

    {
      i : true, // case insensitive
      w : false, // not whole-word
      h : true, // highlight matches
      r : 'aun' // all unordered nodes
    }

returns {Array} an array of HTML elements that contain the given text. The number of nodes and their order depends on the value used for `options.r`  
or throws an error {Error} if any of the inputs are invalid  

### Version
    
    Trouveur.version
    

Returns the version. Currently `0.9.3`.

Download
--------

Trouveur needs XRegexp with the XRegexp Unicode plugin to run (Basescript only).

Get the original source file from here: [trouveur.js](https://github.com/tepafoo/trouveur/blob/master/src/trouveur.js "trouveur.js")

Get the minified source file from here: [trouveur.min.js](https://github.com/tepafoo/trouveur/blob/master/build/target/trouveur.min.js "trouveur.min.js")

Get Trouveur packaged with XRegExp and minified from here: [trouveur.pack.min.js](https://github.com/tepafoo/trouveur/blob/master/build/target/trouveur.pack.min.js "trouveur.pack.min.js")


Tests
-----

Trouveur uses js-test-driver for its unit tests. To run them, the easiest is to configure the properties in build/local.properties and then run ant:

    > cd build
    > vi local.properties (set the correct browsers location on your machine)
    > ant

License
-------

MIT
