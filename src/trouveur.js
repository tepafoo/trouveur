(function(window) {

	// some initialisation

	function getTypeCheckFunction(type) {
		return function(o) {
			return Object.prototype.toString.call(o) === type;
		};
	}

	var document = window.document,

	/**
	 * Returns <code>true</code> if the given argument is a function.
	 * 
	 * @param o
	 */
	isFunction = getTypeCheckFunction('[object Function]'),

	/**
	 * Returns <code>true</code> if the given argument is a string.
	 * 
	 * @param o
	 */
	isString = getTypeCheckFunction('[object String]'),

	/**
	 * Returns <code>true</code> if the given argument is a object.
	 * 
	 * @param o
	 */
	isObject = getTypeCheckFunction('[object Object]'),

	highlightSettings = {
		className : 'trouveur-highlight',
		htmlPrefix : '<span class="trouveur-highlight">',
		htmlSuffix : '</span>'
	},

	// use HTML5 document.head if possible
	head = document.head || document.getElementsByTagName('head')[0],

	// internal utility functions and variables

	returnTypes = {
		count : 'c',
		firstNode : 'fn',
		anyNode : 'an',
		allOrderedNodes : 'aon',
		allUnorderedNodes : 'aun'
	},

	defaultOptions = {
		// case insensitive
		i : true,
		// whole word
		w : false,
		// highlight matches
		h : true,
		// return type
		r : returnTypes.allUnorderedNodes
	},

	alphabet = {
		lower : 'abcdefghijklmnopqrstuvwxyz',
		upper : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	},

	unhighlightRegExp = new XRegExp(
			highlightSettings.htmlPrefix + '((?:(?!</span>).)*)' + highlightSettings.htmlSuffix, 'gi'),

	// used in processXPathResult()
	TEXT_NODE_TYPE = 3;

	if (!isFunction(XRegExp)) {
		throw new Error('Trouveur - This library requires XRegExp to work');
	}

	if (head) {
		var trouveurCss = document.createElement('style');
		trouveurCss.innerHTML = '.' + highlightSettings.className + ' {background: yellow; color: black;}';
		head.appendChild(trouveurCss);
	}

	/**
	 * Returns a formatted version of the given text prior to XPath querying.
	 * 
	 * @param text
	 *            {@link String} text to format
	 * @returns {@link String} formatted text
	 */
	function formatForXpath(text) {
		return text.replace('\'', '&apos;');
	}

	/**
	 * Returns an XPath query given a keyword.
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param caseInsensitive
	 *            {@link Boolean} <code>true</code> for case-insensitive matching
	 * @returns {@link String} XPath query
	 */
	function constructXpathQuery(text, caseInsensitive) {
		var formattedText = formatForXpath(text),
			query = [];

		query.push('descendant-or-self::*');
		query.push('[(not(self::script or self::style or self::head');
		query.push(' or self::meta or self::title or self::link');
		query.push(' or self::select or self::option or self::optgroup');
		query.push(' or self::object or self::param or self::noscript');
		query.push(' or self::noframes or self::map or self::area');
		query.push(' or self::input or self::img or self::button or self::comment))');
		query.push(' and text()[contains(');
		if (caseInsensitive) {
			query.push('translate(., "');
			query.push(alphabet.upper);
			query.push('","');
			query.push(alphabet.lower);
			query.push('")');
		} else {
			query.push('.');
		}
		query.push(',"');
		if (caseInsensitive) {
			query.push(formattedText.toLowerCase());
		} else {
			query.push(formattedText);
		}

		query.push('")]]');

		return query.join('');
	}

	/**
	 * Converts the given XPath node snapshot into an array of nodes.
	 * 
	 * @param nodeSnapshot
	 *            {@link Object}
	 * 
	 * @returns {@link Array} array of nodes
	 */
	function convertXpathNodeSnapshotToArray(nodeSnapshot) {
		var result = [], 
			i;
		for (i = 0; i < nodeSnapshot.snapshotLength; i++) {
			result.push(nodeSnapshot.snapshotItem(i));
		}

		return result;
	}

	function createRegularExpression(text, options) {
		var regExpOptions = '',
			prefix = '',
			suffix = '',
			body;

		if (!(options.r === returnTypes.anyNode || options.r === returnTypes.firstNode)) {
			regExpOptions += 'g';
		}
		if (options.i) {
			regExpOptions += 'i';
		}

		if (options.w) {
			// regular expression to make sure we're matching the whole word
			// \\P{L} means any character that is not a Unicode letter, see
			// http://www.regular-expressions.info/unicode.html
			// ^ and $ are needed because \\{P} does not match them (while \\b does).
			prefix = '(^|\\P{L})';
			suffix = '(\\P{L}|$)';
		}

		body = options.h ? '(' + text + ')' : text;

		return new XRegExp(prefix + body + suffix, regExpOptions);
	}

	function createTextReplacementRegularExpression(options, replacement) {
		var prefix = '',
			suffix = '',
			textReplacement;

		if (options.w) {
			prefix = '$1';
		}

		if (options.h) {
			prefix += highlightSettings.htmlPrefix;
			suffix = highlightSettings.htmlSuffix;
		}

		if (options.w) {
			suffix += '$3';
		}

		if (isString(replacement)) {
			textReplacement = replacement;
		} else if (options.w) {
			textReplacement = '$2';
		} else {
			textReplacement = '$1';
		}

		return prefix + textReplacement + suffix;
	}

	/**
	 * Processes the XPath results:
	 * <ul>
	 * <li>If needed, filters out XPath matches that do not have the right case sensitivity
	 * <li>If needed, filters out XPath matches that are not whole word
	 * <li>If needed, highlights the matches
	 * <li>Counts the number of matches
	 * </ul>
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param nodes
	 *            {@link Array} array of nodes as returned from the XPath query
	 * @param options
	 *            {@link Object}
	 * @param replacement
	 *            {@link String} text replacement
	 * 
	 * @returns {@link Object} of the form: { matchCount : {@link Number}, nodes : {@link Array} }
	 */
	function processXPathResult(text, nodes, options, replacement) {

		var regularExpression = createRegularExpression(text, options),
		textReplacementRegularExpression = createTextReplacementRegularExpression(options, replacement),

		result = {
			matchCount : 0,
			nodes : []
		},
		
		nodeMatchCount,

		xRegExpIterateCallback = function(matchArray, matchCount, stringBeingTraversed, regExp) {

			nodeMatchCount++;

			if (options.r === returnTypes.firstNode || options.r === returnTypes.anyNode) {
				// increment the regular expression's last index to the end of the string being traversed
				// so that no further iteration is made, as one match has already been found
				regExp.lastIndex = stringBeingTraversed.length - 1;
			} else if (options.w) {
				// rewind the regular expression's last index from one index so that
				// it can detect matches that are separated by only one character, such as "find me find me"
				regExp.lastIndex--;
			}
		},

		i,
		j,
		node,
		childNode;

		for ( i = 0; i < nodes.length; i++) {
			node = nodes[i];
			nodeMatchCount = 0;

			for ( j = 0; j < node.childNodes.length; j++) {

				childNode = node.childNodes[j];

				if (childNode.nodeType === TEXT_NODE_TYPE) {
					XRegExp.iterate(childNode.data, regularExpression, xRegExpIterateCallback);
				}

				// break the INNER loop if only one match is required
				if ((options.r === returnTypes.firstNode || options.r === returnTypes.anyNode) && nodeMatchCount > 0) {
					break;
				}
			}

			if (nodeMatchCount > 0) {
				result.nodes.push(node);
				result.matchCount += nodeMatchCount;

				if (isString(replacement) || options.h) {
					node.innerHTML = node.innerHTML.replace(regularExpression, textReplacementRegularExpression);
				}

				// break the OUTER loop if only one match is required
				if (options.r === returnTypes.firstNode || options.r === returnTypes.anyNode) {
					break;
				}
			}
		}

		return result;
	}

	/**
	 * Returns <code>true</code> if the given object is an HTML element.
	 * 
	 * @param o
	 *            {@link Object} object to check against
	 * 
	 * @returns {@link Boolean} <code>true</code> if the given object is an HTML element
	 */
	function isHTMLElement(o) {
		// Object.prototype.toString.call(o) could be something else than ['object Object']
		// hence the use of typeof instead of isObject()
		return o !== null && (isObject(HTMLElement) ? o instanceof HTMLElement : // DOM2
		typeof o === 'object' && o.nodeType === 1 && isString(o.nodeName));
	}

	/**
	 * Validates the text and HTML elements input by the user.<br/>Note: Options validation is part of
	 * <code>initialiseOptions()</code>.
	 * 
	 * @param text
	 *            {@link String}
	 * @param element
	 *            {@link HTMLElement}
	 * 
	 * @throws {@link Error}
	 *             if any of the input arguments is invalid
	 */
	function validateInput(text, element) {
		var error;

		if (!(isString(text) && text !== '' && isHTMLElement(element))) {
			error = new Error('Search text and HTML element must be provided');
			error.name = 'InvalidArgumentError';
			throw error;
		}
	}

	/**
	 * Initialises the options to be used for the matching process, given the possibly incomplete user options.
	 * 
	 * @param options
	 *            {@link Object} options object as passed by the user
	 * 
	 * @returns {@link Object} validated and fully populated options object
	 * 
	 * @throws {@link Error}
	 *             if the user options object is invalid
	 */
	function initialiseOptions(options) {
		var result = {},
			property,
			error;
		// set default options if needed
		if (options !== null && isObject(options)) {
			for ( property in defaultOptions) {
				if (property in options) {
					result[property] = options[property];
				} else {
					result[property] = defaultOptions[property];
				}
			}
		}
		// Object.prototype.toString.call() does not always return ['object Undefined']. This changes per browser.
		// Hence the use of typeof instead of isObject()
		else if (options !== null && typeof options === 'undefined') {
			result = defaultOptions;
		} else {
			error = new Error('Options must be an Object');
			error.name = 'InvalidArgumentError';
			throw error;
		}

		return result;
	}

	/**
	 * Runs an XPath query and returns the resulting matching nodes.
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param element
	 *            {@link HTMLElement} HTML element to scan through
	 * @param options
	 *            {@link Object}
	 * 
	 * @returns {@link Array} array of matching nodes
	 * 
	 * @throws {@link Error}
	 *             if the return type is invalid
	 */
	function runXPathQuery(text, element, options) {

		var query = constructXpathQuery(text, options.i),
			error,
			xPathResult,

		// decide on the XPath return type
		xPathReturnType = null;
		switch (options.r) {
		case returnTypes.count:
			xPathReturnType = XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE;
			break;
		case returnTypes.anyNode:
			if (!options.i || options.w) {
				// get all the UNORDERED matches as the XPath search can't filter out occurrences
				// with wrong case sensitivity or not whole word
				xPathReturnType = XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE;
			} else {
				xPathReturnType = XPathResult.ANY_UNORDERED_NODE_TYPE;
			}
			break;
		case returnTypes.firstNode:
			if (!options.i || options.w) {
				// get all the ORDERED matches as the XPath search can't filter out occurrences
				// with wrong case sensitivity or not whole word
				xPathReturnType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
			} else {
				xPathReturnType = XPathResult.FIRST_ORDERED_NODE_TYPE;
			}
			break;
		case returnTypes.allOrderedNodes:
			xPathReturnType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
			break;
		case returnTypes.allUnorderedNodes:
			xPathReturnType = XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE;
			break;
		default:
			error = new Error('Invalid return type');
			error.name = 'InvalidArgumentError';
			throw error;
		}

		// run the query
		xPathResult = document.evaluate(query, element, null, xPathReturnType, null),

		// populate the resulting array
		nodes = null;
		switch (options.r) {
		case returnTypes.count:
		case returnTypes.allOrderedNodes:
		case returnTypes.allUnorderedNodes:
			if (xPathResult.snapshotLength > 0) {
				nodes = convertXpathNodeSnapshotToArray(xPathResult);
			}
			break;
		case returnTypes.anyNode:
		case returnTypes.firstNode:
			if (!options.i || options.w) {
				if (xPathResult.snapshotLength > 0) {
					nodes = convertXpathNodeSnapshotToArray(xPathResult);
				}
			} else if (xPathResult.singleNodeValue !== null) {
				nodes = [ xPathResult.singleNodeValue ];
			}
			break;
		}

		return nodes;
	}

	// end of internal utility functions and variables

	var Trouveur = function() {
	};

	Trouveur.version = '0.9.2';

	/**
	 * Scans through the given HTML element and counts occurrences of the given text.
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param element
	 *            {@link HTMLElement} HTML element to scan through
	 * @param options
	 *            {@link Object} optional object with any of the following optional properties:
	 * @param options.i
	 *            {@link Boolean} <code>true</code> for case-insensitive matching
	 * @param options.w
	 *            {@link Boolean} <code>true</code> for whole-word matches only
	 * @param options.h
	 *            {@link Boolean} <code>true</code> to highlight matches<br/>The default options are:
	 * 
	 * <pre>
	 * {
	 * 	i : true, // case insensitive.
	 * 	w : false, // not whole-word
	 * 	h : true
	 * // highlight matches
	 * }
	 * </pre>
	 * 
	 * @returns {@link Number} the number of occurrences of the given text in the given HTML element
	 * 
	 * @throws error
	 *             {@link Error} if any of the inputs are invalid
	 */
	Trouveur.count = function(text, element, options) {
		var optionsToUse,
			nodes,
			result = 0,
			processedResult;

		// throws error if text of element invalid
		validateInput(text, element);

		// throws error if options object invalid
		optionsToUse = initialiseOptions(options);
		optionsToUse.r = returnTypes.count;

		// throws error if options return type
		nodes = runXPathQuery(text, element, optionsToUse);

		if (nodes !== null && nodes.length > 0) {
			processedResult = processXPathResult(text, nodes, optionsToUse);

			result = processedResult.matchCount;
		}

		return result;
	};

	/**
	 * Scans through the given HTML element and finds occurrences of the given text.
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param element
	 *            {@link HTMLElement} HTML element to scan through
	 * @param options
	 *            {@link Object} optional object with any of the following optional properties:
	 * @param options.i
	 *            {@link Boolean} <code>true</code> for case-insensitive matching
	 * @param options.w
	 *            {@link Boolean} <code>true</code> for whole-word matches only
	 * @param options.h
	 *            {@link Boolean} <code>true</code> to highlight matches
	 * @param options.r
	 *            {@link String} return type, any of: {'fn','an','aon','aun'} meaning {first node, any node, all ordered
	 *            nodes, all unordered nodes}<br/>The default options are:
	 * 
	 * <pre>
	 * {
	 * 	i : true, // case insensitive.
	 * 	w : false, // not whole-word
	 * 	h : true, // highlight matches
	 * 	r : 'aun' // all unordered nodes
	 * }
	 * </pre>
	 * 
	 * @returns {@link Array} array of HTML elements that contain the given text. The number of nodes and their order
	 *          depends on the value used for <code>options.r</code>
	 * 
	 * @throws error
	 *             {@link Error} if any of the inputs are invalid
	 */
	Trouveur.find = function(text, element, options) {

		// throws error if text of element invalid
		validateInput(text, element);

		// throws error if options object invalid
		var optionsToUse = initialiseOptions(options),

		// throws error if invalid options return type
		nodes = runXPathQuery(text, element, optionsToUse),

		result = [],
		processedResult;
		if (nodes !== null && nodes.length > 0) {
			if (!optionsToUse.i || optionsToUse.w || optionsToUse.h) {
				processedResult = processXPathResult(text, nodes, optionsToUse);

				nodes = processedResult.nodes;
			}

			// check length again before assigning a result as the nodes array might have been changed
			// in the block just above
			if (nodes.length > 0) {
				result = nodes;
			}
		}

		return result;
	};

	/**
	 * Scans through the given HTML element and replaces occurrences of the given text.
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param replacement
	 *            {@link String} text replacement
	 * @param element
	 *            {@link HTMLElement} HTML element to scan through
	 * @param options
	 *            {@link Object} optional object with any of the following optional properties:
	 * @param options.i
	 *            {@link Boolean} <code>true</code> for case-insensitive matching
	 * @param options.w
	 *            {@link Boolean} <code>true</code> for whole-word matches only
	 * @param options.h
	 *            {@link Boolean} <code>true</code> to highlight matches
	 * @param options.r
	 *            {@link String} return type, any of: {'fn','an','aon','aun'} meaning {first node, any node, all ordered
	 *            nodes, all unordered nodes}<br/>The default options are:
	 * 
	 * <pre>
	 * {
	 * 	i : true, // case insensitive.
	 * 	w : false, // not whole-word
	 * 	h : true, // highlight matches
	 * 	r : 'aun' // all unordered nodes
	 * }
	 * </pre>
	 * 
	 * @returns {@link Array} array of HTML elements that contain the given text. The number of nodes and their order
	 *          depends on the value used for <code>options.r</code>
	 * 
	 * @throws error
	 *             {@link Error} if any of the inputs are invalid
	 */
	Trouveur.replace = function(text, replacement, element, options) {

		// throws error if text of element invalid
		validateInput(text, element);

		// validate the replacement text
		if (!(typeof replacement === 'string')) {
			var error = new Error('Replacement text must be provided');
			error.name = 'InvalidArgumentError';
			throw error;
		}

		// throws error if options object invalid
		var optionsToUse = initialiseOptions(options),

		// throws error if invalid options return type
		nodes = runXPathQuery(text, element, optionsToUse),
		result = [],
		processedResult;
		if (nodes !== null && nodes.length > 0) {
			processedResult = processXPathResult(text, nodes, optionsToUse, replacement);

			nodes = processedResult.nodes;

			// check length again before assigning a result as the nodes array might have been changed
			// in the block just above
			if (nodes.length > 0) {
				result = nodes;
			}
		}

		return result;
	};

	/**
	 * Scans through the given HTML element and highlights occurrences of the given text.
	 * 
	 * @param text
	 *            {@link String} text to match
	 * @param element
	 *            {@link HTMLElement} HTML element to scan through
	 * @param options
	 *            {@link Object} optional object with any of the following optional properties:
	 * @param options.i
	 *            {@link Boolean} <code>true</code> for case-insensitive matching
	 * @param options.w
	 *            {@link Boolean} <code>true</code> for whole-word matches only<br/>The default options are:
	 * 
	 * <pre>
	 * {
	 * 	i : true, // case insensitive.
	 * 	w : false
	 * // not whole-word
	 * }
	 * </pre>
	 * 
	 * @returns undefined does not return anything
	 * 
	 * @throws error
	 *             {@link Error} if any of the inputs are invalid
	 */
	Trouveur.highlight = function(text, element, options) {
		var optionsToUse = initialiseOptions(options)
		optionsToUse.h = true;

		Trouveur.count(text, element, optionsToUse);
	};

	/**
	 * Un-highlights occurrences matched through <code>Trouveur.find()</code>, <code>Trouveur.count()</code> or
	 * <code>Trouveur.replace()</code>.
	 * 
	 * @param element
	 *            {@link HTMLElement} HTML element to scan through
	 * 
	 * @returns undefined does not return anything
	 * 
	 * @throws error
	 *             {@link Error} if the input element is invalid
	 */
	Trouveur.unhighlight = function(element) {
		var highlightedElements,
			parentNode,
			error;

		if (isHTMLElement(element)) {
			highlightedElements = element.getElementsByClassName(highlightSettings.className);

			// the size of "highlightedElements" decreases dynamically as elements gets removed, hence the while loop
			while (highlightedElements.length > 0) {
				parentNode = highlightedElements[0].parentNode;
				// good news:
				// 1. if the parent contains other highlighted elements, they will be unhighlighted here too
				// 2. all unhighlighted elements dynamically get removed from the list "highlightedElements",
				// thanks to some browser magic
				parentNode.innerHTML = parentNode.innerHTML.replace(unhighlightRegExp, '$1');
			}
		} else {
			error = new Error('An HTML element must be provided');
			error.name = 'InvalidArgumentError';
			throw error;
		}
	};

	// add the object to the window
	window.Trouveur = Trouveur;
})(window);
