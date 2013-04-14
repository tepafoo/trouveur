TrouveurTest = TestCase('TrouveurTest');

//
//
// invalid cases tests
//
//

//
// find()
//

TrouveurFunctions = {
	find : 'find',
	count : 'count',
	replace : 'replace',
	unhighlight : 'unhighlight',
	highlight : 'highlight',
};

DefaultReplacement = 'hello world';

function runnerUsesDefaultOptionsWhenPassingNoOptions(functionToCall) {
	/*:DOC testHTMLContent1 = <div><p>find me</p></div> */
	assertNotUndefined(this.testHTMLContent1);

	/*:DOC testHTMLContent2 = <div><p>find me</p></div> */
	assertNotUndefined(this.testHTMLContent2);

	var resultNoOptionsPassed = null;
	if (functionToCall === TrouveurFunctions.replace) {
		resultNoOptionsPassed = Trouveur[functionToCall]('find me', DefaultReplacement, this.testHTMLContent1);
	} else {
		resultNoOptionsPassed = Trouveur[functionToCall]('find me', this.testHTMLContent1);
	}

	var expectedDefaultOptions = {
		i : true,
		w : false,
		h : true
	};

	if (functionToCall === TrouveurFunctions.find || functionToCall === TrouveurFunctions.replace) {
		expectedDefaultOptions.r = 'aun';
	}

	var resultDefaultOptionsPassed = null;
	if (functionToCall === TrouveurFunctions.replace) {
		resultDefaultOptionsPassed = Trouveur[functionToCall]('find me', DefaultReplacement, this.testHTMLContent2, expectedDefaultOptions);	
	} else {
		resultDefaultOptionsPassed = Trouveur[functionToCall]('find me', this.testHTMLContent2, expectedDefaultOptions);
	}

	if (functionToCall === TrouveurFunctions.find || functionToCall === TrouveurFunctions.replace) {
		assertEquals('calling without options should be the same as using default options', resultDefaultOptionsPassed.length, resultNoOptionsPassed.length);
		assertEquals('calling without options should be the same as using default options', resultDefaultOptionsPassed[0].innerHTML, resultNoOptionsPassed[0].innerHTML);	
	} else if (functionToCall === TrouveurFunctions.count) {
		assertEquals('calling without options should be the same as using default options', resultDefaultOptionsPassed, resultNoOptionsPassed);
	} else if (functionToCall === TrouveurFunctions.highlight) {
		assertUndefined(resultDefaultOptionsPassed);
		assertUndefined(resultNoOptionsPassed);
	}
};

function runnerThrowsExceptionWhenPassingNoArguments(functionToCall) {
	try {
		Trouveur[functionToCall]();
	} catch(error) {
		assertEquals('must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('must throw an error', 'Search text and HTML element must be provided', error.message);

		return;
	}

	fail('No exception was caught!');
};

function runnerThrowsInvalidArgumentErrorWhenPassingText(functionToCall, text) {
	try {
		/*:DOC testHTMLContent = <div><p>find me</p></div> */
		assertNotUndefined(this.testHTMLContent);

		if (functionToCall === TrouveurFunctions.replace) {
			Trouveur[functionToCall](text, DefaultReplacement, this.testHTMLContent);
		} else {
			Trouveur[functionToCall](text, this.testHTMLContent);
		}
	} catch(error) {
		assertEquals('must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('must throw an error', 'Search text and HTML element must be provided', error.message);

		return;
	}

	fail('No exception was caught!');
};

function runnerThrowsInvalidArgumentErrorWhenPassingElement(functionToCall, element) {
	try {
		if (functionToCall === TrouveurFunctions.replace) {
			Trouveur[functionToCall]('find me', DefaultReplacement, element);
		} else {
			Trouveur[functionToCall]('find me', element);
		}
	} catch(error) {
		assertEquals('must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('must throw an error', 'Search text and HTML element must be provided', error.message);

		return;
	}

	fail('No exception was caught!');
};

function runnerThrowsInvalidArgumentErrorWhenPassingOptions(functionToCall, options) {
	try {
		/*:DOC testHTMLContent = <div><p>find me</p></div> */
		assertNotUndefined(this.testHTMLContent);

		if (functionToCall === TrouveurFunctions.replace) {
			Trouveur[functionToCall]('find me', DefaultReplacement, this.testHTMLContent, options);	
		} else {
			Trouveur[functionToCall]('find me', this.testHTMLContent, options);
		}
	} catch(error) {
		assertEquals('must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('must throw an error', 'Options must be an Object', error.message);

		return;
	}

	fail('No exception was caught!');
};

function runnerThrowsInvalidArgumentErrorWhenPassingInvalidReturnType(functionToCall) {
	try {
		/*:DOC testHTMLContent = <div><p>find me</p></div> */
		assertNotUndefined(this.testHTMLContent);

		if (functionToCall === TrouveurFunctions.replace) {
			Trouveur[functionToCall]('find me', DefaultReplacement, this.testHTMLContent, {
				r : 'thisIsAnInvalidReturnType'
			});	
		} else {
			Trouveur[functionToCall]('find me', this.testHTMLContent, {
				r : 'thisIsAnInvalidReturnType'
			});
		}
	} catch(error) {
		assertEquals('must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('must throw an error', 'Invalid return type', error.message);

		return;
	}

	fail('No exception was caught!');
};

TrouveurTest.prototype.testFindUsesDefaultOptionsWhenPassingNoOptions = function() {
	runnerUsesDefaultOptionsWhenPassingNoOptions(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountUsesDefaultOptionsWhenPassingNoOptions = function() {
	runnerUsesDefaultOptionsWhenPassingNoOptions(TrouveurFunctions.count);
};

TrouveurTest.prototype.testReplaceUsesDefaultOptionsWhenPassingNoOptions = function() {
	runnerUsesDefaultOptionsWhenPassingNoOptions(TrouveurFunctions.replace);
};

TrouveurTest.prototype.testHighlightUsesDefaultOptionsWhenPassingNoOptions = function() {
	runnerUsesDefaultOptionsWhenPassingNoOptions(TrouveurFunctions.highlight);
};

TrouveurTest.prototype.testFindThrowsExceptionWhenPassingNoArguments = function() {
	runnerThrowsExceptionWhenPassingNoArguments(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountThrowsExceptionWhenPassingNoArguments = function() {
	runnerThrowsExceptionWhenPassingNoArguments(TrouveurFunctions.count);
};

TrouveurTest.prototype.testReplaceThrowsExceptionWhenPassingNoArguments = function() {
	runnerThrowsExceptionWhenPassingNoArguments(TrouveurFunctions.replace);
};

TrouveurTest.prototype.testHighlightThrowsExceptionWhenPassingNoArguments = function() {
	runnerThrowsExceptionWhenPassingNoArguments(TrouveurFunctions.highlight);
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingNullText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.find, null);
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingNullText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.count, null);
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingNullText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.replace, null);
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingNullText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.highlight, null);
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingNonStringText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.find, {});
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingNonStringText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.count, {});
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingNonStringText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.replace, {});
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingNonStringText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.highlight, {});
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingEmptyText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.find, '');
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingEmptyText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.count, '');
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingEmptyText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.replace, '');
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingEmptyText = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingText(TrouveurFunctions.highlight, '');
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingNullElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.find, null);
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingNullElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.count, null);
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingNullElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.replace, null);
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingNullElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.highlight, null);
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingInvalidElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.find, {});
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingInvalidElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.count, {});
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingInvalidElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.replace, {});
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingInvalidElement = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingElement(TrouveurFunctions.highlight, {});
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingNullOptions = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.find, null);
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingNullOptions = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.count, null);
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingNullOptions = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.replace, null);
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingNullOptions = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.highlight, null);
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingInvalidOptionsObject = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.find, 123);
};

TrouveurTest.prototype.testCountThrowsInvalidArgumentErrorWhenPassingInvalidOptionsObject = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.count, 123);
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingInvalidOptionsObject = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.replace, 123);
};

TrouveurTest.prototype.testHighlightThrowsInvalidArgumentErrorWhenPassingInvalidOptionsObject = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingOptions(TrouveurFunctions.highlight, 123);
};

TrouveurTest.prototype.testFindThrowsInvalidArgumentErrorWhenPassingInvalidReturnType = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingInvalidReturnType(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountIgnoresPassingInvalidReturnType = function() {
	/*:DOC testHTMLContent = <div><p>find me</p></div> */
	assertNotUndefined(this.testHTMLContent);

	var result = Trouveur.count('find me', this.testHTMLContent, {
		r : 'thisIsAnInvalidReturnType'
	});

	assertEquals(1, result);
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingInvalidReturnType = function() {
	runnerThrowsInvalidArgumentErrorWhenPassingInvalidReturnType(TrouveurFunctions.replace);
};

//
// replace() specific
//

function runnerReplaceThrowsInvalidArgumentErrorWhenPassingReplacement(replacement) {
	try {
		/*:DOC testHTMLContent = <div><p>find me</p></div> */
		assertNotUndefined(this.testHTMLContent);

		Trouveur.replace('find me', replacement, this.testHTMLContent);	
	} catch(error) {
		assertEquals('must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('must throw an error', 'Replacement text must be provided', error.message);

		return;
	}

	fail('No exception was caught!');
}

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingNullReplacement = function() {
	runnerReplaceThrowsInvalidArgumentErrorWhenPassingReplacement(null);
};

TrouveurTest.prototype.testReplaceThrowsInvalidArgumentErrorWhenPassingInvalidReplacement = function() {
	runnerReplaceThrowsInvalidArgumentErrorWhenPassingReplacement({});
};

//
// end of replace() specific
//

//
//
// end of invalid cases tests
//
//

//
//
// tests of all combinations of options flags
//
//

function runnerLoop(options, expectedArray, functionToCall) {
	// contains:
	// - 8 occurrences of "find me", case insensitive, whole word or not. Of which
	//   - 5 occurrences case insensitive, whole word. Of which:
	//     - 1 not surrounded by any other text
	//     - 2 separated from each other by only one character
	//     - 2 capitalised
	//     - 1 all upper-case
	//     - 2 all lower-case
	//   - 3 occurrences case insensitive, not whole word. Of which:
	//     - 1 all upper-case
	//     - 2 all lower case
	//     - 2 immediately following one another
	//
	for (var i = 0; i < expectedArray.length; i++) {
		/*:DOC testHTMLContent = <div><p id="1">Find Me</p><table><tr><td><div><ul><li id="2">Here you go, Find Me please and FIND MEE too.</ul></div></td><td id="3">Find me find me canyoufind mefind me</td><td id="4">Lol, rem hip soum. FIND ME!</td></tr></table></div> */
		if (functionToCall === TrouveurFunctions.count) {
			runnerCount(expectedArray[i].given, this.testHTMLContent, options, expectedArray[i].expected);
		} else if (functionToCall === TrouveurFunctions.find || functionToCall === TrouveurFunctions.replace){
			runnerFindOrReplace(expectedArray[i].given, this.testHTMLContent, options, expectedArray[i].expected, functionToCall);
		} else if (functionToCall === TrouveurFunctions.highlight) {
			runnerHighlight(expectedArray[i].given, this.testHTMLContent, options, expectedArray[i].expected);
		}
	}
};

function runnerFindOrReplace(text, element, options, expected, functionToCall) {
	var actual = null;
	if (functionToCall === TrouveurFunctions.replace) {
		actual = Trouveur[functionToCall](text, DefaultReplacement, element, options);	
	} else {
		actual = Trouveur[functionToCall](text, element, options);
	}

	if (expected === 'emptyArray') {
		assertTrue(actual.length === 0);
	} else if (options.r === 'fn') {
		assertEquals(1, actual.length);
		assertEquals(expected, actual[0].id);
	} else if (options.r === 'an') {
		assertEquals(1, actual.length);
		assertTrue(expected.indexOf(actual[0].id) !== -1);
	} else if (options.r === 'aon') {
		assertEquals(expected.length, actual.length);
		for ( var i = 0; i < expected.length; i++) {
			assertEquals(expected[i], actual[i].id);
		}
	} else if (options.r === 'aun') {
		assertEquals(expected.length, actual.length);
		for ( var i = 0; i < actual.length; i++) {
			assertTrue(expected.indexOf(actual[i].id) !== -1);
		}
	}
};

function runnerCount(text, element, options, expected) {
	var actual = Trouveur.count(text, element, options);

	assertEquals(expected, actual);
};

function runnerHighlight(text, element, options, expected) {
	Trouveur.highlight(text, element, options);

	var highlighted = element.getElementsByClassName('trouveur-highlight');
	
	if (expected === 'emptyArray') {
		assertTrue(highlighted.length === 0);
	} else {
		assertEquals(expected.count, highlighted.length);
		for ( var i = 0; i < highlighted.length; i++) {
			assertTrue(expected.ids.indexOf(highlighted[i].parentNode.id) !== -1);
		}
	}
};

//
// The following tests follow this naming convention:
//             testCount_XXX
//                       |||
//                       |||
//    case insensitive __|||__ highlight
//                        |
//                     whole word
// 
// where X is in {0,1} -> {true, false}

//
// return type === count
//

TrouveurTest.prototype.testCount_000 = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false
	}, [ {
		given : 'find me',
		expected : 3
	}, {
		given : 'Find Me',
		expected : 2
	}, {
		given : 'FIND ME',
		expected : 2
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_001 = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true
	}, [ {
		given : 'find me',
		expected : 3
	}, {
		given : 'Find Me',
		expected : 2
	}, {
		given : 'FIND ME',
		expected : 2
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_010 = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false
	}, [ {
		given : 'find me',
		expected : 1
	}, {
		given : 'Find Me',
		expected : 2
	}, {
		given : 'FIND ME',
		expected : 1
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_011 = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true
	}, [ {
		given : 'find me',
		expected : 1
	}, {
		given : 'Find Me',
		expected : 2
	}, {
		given : 'FIND ME',
		expected : 1
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_100 = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false
	}, [ {
		given : 'find me',
		expected : 8
	}, {
		given : 'Find Me',
		expected : 8
	}, {
		given : 'FIND ME',
		expected : 8
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_101 = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true
	}, [ {
		given : 'find me',
		expected : 8
	}, {
		given : 'Find Me',
		expected : 8
	}, {
		given : 'FIND ME',
		expected : 8
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_110 = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false
	}, [ {
		given : 'find me',
		expected : 5
	}, {
		given : 'Find Me',
		expected : 5
	}, {
		given : 'FIND ME',
		expected : 5
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

TrouveurTest.prototype.testCount_111 = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true
	}, [ {
		given : 'find me',
		expected : 5
	}, {
		given : 'Find Me',
		expected : 5
	}, {
		given : 'FIND ME',
		expected : 5
	}, {
		given : 'FIND ME!',
		expected : 1
	}, {
		given : 'muahahahaha',
		expected : 0
	} ], TrouveurFunctions.count);
};

//
// end of return type === count
//

//
// The following tests follow this naming convention:
//           testFind_XXX_Y
//                    ||| |_ return type
//                    |||
// case insensitive __|||__ highlight
//                     |
//                  whole word
//
// where:
//- X is in {0,1} -> {true, false}
//- Y is the return type {fn, an, aon, aun} -> {first node, any node, all ordered nodes, all unordered nodes}

//
// return type === first node
//

TrouveurTest.prototype.testFind_000_fn = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '2'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_001_fn = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '2'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_010_fn = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '4'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_011_fn = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '4'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_100_fn = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_101_fn = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_110_fn = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_111_fn = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

//
// end of return type === first node
//

//
// return type === any node
//

TrouveurTest.prototype.testFind_000_an = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_001_an = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_010_an = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_011_an = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_100_an = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_101_an = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_110_an = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_111_an = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

//
// end of return type === any node
//

//
// return type === all ordered nodes
//

TrouveurTest.prototype.testFind_000_aon = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_001_aon = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_010_aon = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_011_aon = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_100_aon = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_101_aon = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_110_aon = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_111_aon = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

//
// end of return type === all ordered nodes
//

//
// return type === all unordered nodes
//

TrouveurTest.prototype.testFind_000_aun = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_001_aun = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_010_aun = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_011_aun = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_100_aun = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_101_aun = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_110_aun = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

TrouveurTest.prototype.testFind_111_aun = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.find);
};

//
// end of return type === all unordered nodes
//

//
// The following tests follow this naming convention:
//           testReplace_XXX_Y
//                       ||| |_ return type
//                       |||
//    case insensitive __|||__ highlight
//                        |
//                    whole word
//
// where:
//- X is in {0,1} -> {true, false}
//- Y is the return type {fn, an, aon, aun} -> {first node, any node, all ordered nodes, all unordered nodes}

//
// return type === first node
//

TrouveurTest.prototype.testReplace_000_fn = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '2'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_001_fn = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '2'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_010_fn = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '4'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_011_fn = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '3'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '4'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_100_fn = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_101_fn = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_110_fn = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_111_fn = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'fn'
	}, [ {
		given : 'find me',
		expected : '1'
	}, {
		given : 'Find Me',
		expected : '1'
	}, {
		given : 'FIND ME',
		expected : '1'
	}, {
		given : 'FIND ME!',
		expected : '4'
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

//
// end of return type === first node
//

//
// return type === any node
//

TrouveurTest.prototype.testReplace_000_an = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_001_an = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_010_an = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_011_an = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_100_an = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_101_an = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_110_an = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_111_an = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'an'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

//
// end of return type === any node
//

//
// return type === all ordered nodes
//

TrouveurTest.prototype.testReplace_000_aon = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_001_aon = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_010_aon = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_011_aon = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_100_aon = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_101_aon = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_110_aon = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_111_aon = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'aon'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

//
// end of return type === all ordered nodes
//

//
// return type === all unordered nodes
//

TrouveurTest.prototype.testReplace_000_aun = function() {
	runnerLoop({
		i : false,
		w : false,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_001_aun = function() {
	runnerLoop({
		i : false,
		w : false,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['2', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_010_aun = function() {
	runnerLoop({
		i : false,
		w : true,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_011_aun = function() {
	runnerLoop({
		i : false,
		w : true,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['3']
	}, {
		given : 'Find Me',
		expected : ['1', '2']
	}, {
		given : 'FIND ME',
		expected : ['4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_100_aun = function() {
	runnerLoop({
		i : true,
		w : false,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_101_aun = function() {
	runnerLoop({
		i : true,
		w : false,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_110_aun = function() {
	runnerLoop({
		i : true,
		w : true,
		h : false,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

TrouveurTest.prototype.testReplace_111_aun = function() {
	runnerLoop({
		i : true,
		w : true,
		h : true,
		r : 'aun'
	}, [ {
		given : 'find me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'Find Me',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME',
		expected : ['1', '2', '3', '4']
	}, {
		given : 'FIND ME!',
		expected : ['4']
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.replace);
};

//
// end of return type === all unordered nodes
//

//
// The following tests follow this naming convention:
//        testHighlight_XX
//                      ||
//   case insensitive __||__ whole word
//                     
//                
//
// where:
// - X is in {0,1} -> {true, false}
// - Y is the return type {fn, an, aon, aun} -> {first node, any node, all ordered nodes, all unordered nodes}

TrouveurTest.prototype.testHighlight_00 = function() {
	runnerLoop({
		i : false,
		w : false
	}, [ {
		given : 'find me',
		expected : {
			count : 3,
			ids : [ '3' ]
		}
	}, {
		given : 'Find Me',
		expected : {
			count : 2,
			ids : [ '1', '2' ]
		}
	}, {
		given : 'FIND ME',
		expected : {
			count : 2,
			ids : [ '2', '4' ]
		}
	}, {
		given : 'FIND ME!',
		expected : {
			count : 1,
			ids : [ '4' ]
		}
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.highlight);
};

TrouveurTest.prototype.testHighlight_01 = function() {
	runnerLoop({
		i : false,
		w : true
	}, [ {
		given : 'find me',
		expected : {
			count : 1,
			ids : [ '3' ]
		}
	}, {
		given : 'Find Me',
		expected : {
			count : 2,
			ids : [ '1', '2' ]
		}
	}, {
		given : 'FIND ME',
		expected : {
			count : 1,
			ids : [ '4' ]
		}
	}, {
		given : 'FIND ME!',
		expected : {
			count : 1,
			ids : [ '4' ]
		}
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.highlight);
};

TrouveurTest.prototype.testHighlight_10 = function() {
	runnerLoop({
		i : true,
		w : false
	}, [ {
		given : 'find me',
		expected : {
			count : 8,
			ids : [ '1', '2', '3', '4' ]
		}
	}, {
		given : 'Find Me',
		expected : {
			count : 8,
			ids : [ '1', '2', '3', '4' ]
		}
	}, {
		given : 'FIND ME',
		expected : {
			count : 8,
			ids : [ '1', '2', '3', '4' ]
		}
	}, {
		given : 'FIND ME!',
		expected : {
			count : 1,
			ids : [ '4' ]
		}
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.highlight);
};

TrouveurTest.prototype.testHighlight_11 = function() {
	runnerLoop({
		i : true,
		w : true
	}, [ {
		given : 'find me',
		expected : {
			// known issue : in whole-word mode, immediately following same patterns do not get highlighted. But they are counted correctly.
			count : 4,
			ids : [ '1', '2', '3', '4' ]
		}
	}, {
		given : 'Find Me',
		expected : {
			// known issue : in whole-word mode, immediately following same patterns do not get highlighted. But they are counted correctly.
			count : 4,
			ids : [ '1', '2', '3', '4' ]
		}
	}, {
		given : 'FIND ME',
		expected : {
			// known issue : in whole-word mode, immediately following same patterns do not get highlighted. But they are counted correctly.
			count : 4,
			ids : [ '1', '2', '3', '4' ]
		}
	}, {
		given : 'FIND ME!',
		expected : {
			count : 1,
			ids : [ '4' ]
		}
	}, {
		given : 'muahahahaha',
		expected : 'emptyArray'
	} ], TrouveurFunctions.highlight);
};

//
//
// end of tests of all combinations of options flags
//
//


//
//
// unhighlight() tests
//
//

function runnerUnhighlightThrowsInvalidArgumentError(element) {
	try {
		Trouveur.unhighlight(element);
	} catch (error) {
		assertEquals('unhighlight() must throw an error', 'InvalidArgumentError', error.name);
		assertEquals('unhighlight() must throw an error', 'An HTML element must be provided', error.message);

		return;
	}

	fail('No exception was caught!');
}

TrouveurTest.prototype.testUnhighlightThrowsInvalidArgumentErrorWhenPassingNullHTMLElement = function() {
	runnerUnhighlightThrowsInvalidArgumentError(null);
};

TrouveurTest.prototype.testUnhighlightThrowsInvalidArgumentErrorWhenPassingInvalidHTMLElement = function() {
	runnerUnhighlightThrowsInvalidArgumentError(123);
};


function runnerUnhighlight(functionToCall) {
	/*:DOC testHTMLContent = <div><p>find me find me find me</p><table><tr><td>find me but not me</td><td><div>can you FIND ME? Please, fInd mE too.</div></td></tr></table></div> */
	assertNotUndefined(this.testHTMLContent);

	if (functionToCall === TrouveurFunctions.replace) {
		Trouveur[functionToCall]('find me', DefaultReplacement, this.testHTMLContent, {
			h : true
		});	
	} else {
		Trouveur[functionToCall]('find me', this.testHTMLContent, {
			h : true
		});
	}

	var highlighted = this.testHTMLContent.getElementsByClassName('trouveur-highlight');
	assertEquals(6, highlighted.length);

	Trouveur.unhighlight(this.testHTMLContent);

	highlighted = this.testHTMLContent.getElementsByClassName('trouveur-highlight');
	assertEquals(0, highlighted.length);
}

TrouveurTest.prototype.testFindThenUnhighlight = function() {
	runnerUnhighlight(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountThenUnhighlight = function() {
	runnerUnhighlight(TrouveurFunctions.count);
};

TrouveurTest.prototype.testReplaceThenUnhighlight = function() {
	runnerUnhighlight(TrouveurFunctions.replace);
};

TrouveurTest.prototype.testHighlightThenUnhighlight = function() {
	runnerUnhighlight(TrouveurFunctions.highlight);
};

//
//
// end of unhighlight() tests
//
//


//
//
// other tests
//
//

function copyObject(object) {
	var copy = {};

	for (property in object) {
		if (object.hasOwnProperty(property)) {
			copy[property] = object[property];
		}
	}

	return copy;
};

function runnerPassedOptionsObjectNotModified(functionToCall) {
	/*:DOC testHTMLContent = <div><p>find me</p></div> */
	assertNotUndefined(this.testHTMLContent);

	var options = {
			i : false,
			h : false,
			r : 'fn'
		};

	var optionsCopy = copyObject(options);

	if (functionToCall === TrouveurFunctions.replace) {
		Trouveur[functionToCall]('find me', DefaultReplacement, this.testHTMLContent, options);	
	} else {
		Trouveur[functionToCall]('find me', this.testHTMLContent, options);
	}

	assertEquals(optionsCopy,options);	
};

TrouveurTest.prototype.testFindPassedOptionsObjectNotModified = function() {
	runnerPassedOptionsObjectNotModified(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountPassedOptionsObjectNotModified = function() {
	runnerPassedOptionsObjectNotModified(TrouveurFunctions.count);
};

TrouveurTest.prototype.testReplacePassedOptionsObjectNotModified = function() {
	runnerPassedOptionsObjectNotModified(TrouveurFunctions.replace);
};

TrouveurTest.prototype.testVersionExists = function() {
	assertNotUndefined(Trouveur.version);
	assertNotNull(Trouveur.version);
};

function runnerTextContainedInExcludedElementsNotMatched(functionToCall) {
	var createElemementWithContentAndAppendToParent = function(tagName, parent) {
		var element = document.createElement(tagName);
		element.innerHTML = 'find me';

		parent.appendChild(element);

		return element;
	};

	var head = document.createElement('head');
	createElemementWithContentAndAppendToParent('style', head);
	createElemementWithContentAndAppendToParent('script', head);
	createElemementWithContentAndAppendToParent('meta', head);
	createElemementWithContentAndAppendToParent('title', head);
	createElemementWithContentAndAppendToParent('link', head);

	var body = document.createElement('body');
	var div = document.createElement('div');
	var p = createElemementWithContentAndAppendToParent('p', div);
	body.appendChild(div);

	var select = document.createElement('select');
	var optgroup = document.createElement('optgroup');
	createElemementWithContentAndAppendToParent('option', optgroup);
	select.appendChild(optgroup);
	createElemementWithContentAndAppendToParent('option', select);
	body.appendChild(select);

	createElemementWithContentAndAppendToParent('object', body);
	createElemementWithContentAndAppendToParent('param', body);
	createElemementWithContentAndAppendToParent('noscript', body);
	createElemementWithContentAndAppendToParent('noframes', body);
	createElemementWithContentAndAppendToParent('map', body);
	createElemementWithContentAndAppendToParent('area', body);
	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('value', 'find me');
	body.appendChild(input);

	var img = document.createElement('img');
	img.setAttribute('src', 'find me');
	img.setAttribute('alt', 'find me');
	body.appendChild(img);

	var button = createElemementWithContentAndAppendToParent('button', body);
	button.setAttribute('type', 'button');
	body.appendChild(button);

	var comment = document.createElement('comment');
	comment.data = 'find me';
	body.appendChild(comment);

	var html = document.createElement('html');
	html.appendChild(head);
	html.appendChild(body);

	if (functionToCall === TrouveurFunctions.find) {
		var result = Trouveur[functionToCall]('find me', html, {
			h : false
		});

		assertEquals(1, result.length);
		assertEquals('P', result[0].tagName);
		assertEquals('find me', result[0].innerHTML);

	} else if (functionToCall === TrouveurFunctions.replace) {
		var result = Trouveur[functionToCall]('find me', DefaultReplacement, html, {
			h : false
		});

		assertEquals(1, result.length);
		assertEquals('P', result[0].tagName);
		assertEquals(DefaultReplacement, result[0].innerHTML);

	} else if (functionToCall === TrouveurFunctions.count) {
		var result = Trouveur[functionToCall]('find me', html, {
			h : false
		});

		assertEquals(1, result);

	} else if (functionToCall === TrouveurFunctions.highlight) {
		Trouveur[functionToCall]('find me', html);

		var result = html.getElementsByClassName('trouveur-highlight');

		assertEquals(1, result.length);
		assertEquals('P', result[0].parentNode.tagName);
		assertEquals('find me', result[0].innerHTML);
	}
}

TrouveurTest.prototype.testFindTextContainedInExcludedElementsNotMatched = function() {
	runnerTextContainedInExcludedElementsNotMatched(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountTextContainedInExcludedElementsNotMatched = function() {
	runnerTextContainedInExcludedElementsNotMatched(TrouveurFunctions.count);
};

TrouveurTest.prototype.testReplaceTextContainedInExcludedElementsNotMatched = function() {
	runnerTextContainedInExcludedElementsNotMatched(TrouveurFunctions.replace);
};

TrouveurTest.prototype.testHighlightTextContainedInExcludedElementsNotMatched = function() {
	runnerTextContainedInExcludedElementsNotMatched(TrouveurFunctions.highlight);
};

function runnerHandlersNotRemoved(functionToCall) {
	var form = document.createElement('form');
	var div = document.createElement('div');
	div.innerHTML = 'find me';
	form.appendChild(div);

	var events = [ 'click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout',
			'keydown', 'keypress', 'keyup', 'load', 'unload', 'abort', 'error', 'resize', 'scroll',
			'domfocusin', 'domfocusout', 'domactivate', 'subtreemodified', 'nodeinserted', 'noderemoved',
			'domnoderemovedfromdocument', 'attrmodified', 'characterdatamodified', 'touchstart', 'touchend',
			'touchmove', 'touchenter', 'touchleave', 'touchcancel', 'touchleave' ];

  // TODO - for 'focus' event to work, need to somehow insert the form on the document body first
	var formEvents = [ 'select', 'change', 'submit', 'reset', 'blur' ];

	var binEvents = function(element, events) {
		for ( var i = 0; i < events.length; i++) {
			(function(eventName) {
				$(element).bind(eventName, function(e, param) {
					param.result = (eventName === param.value);
				});
			})(events[i]);
		}
	};

	binEvents(div, events);
	binEvents(form, formEvents);

	if (functionToCall == TrouveurFunctions.replace) {
		Trouveur[functionToCall]('find me', DefaultReplacement, form, {
			h : true
		});
	} else {
		Trouveur[functionToCall]('find me', form, {
			h : true
		});
	}

	var assertResults = function(element, events) {
		for ( var i = 0; i < events.length; i++) {
			var param = {
				value : events[i],
				result : false
			};
			$(element).trigger(events[i], param);
			assertTrue('It must still be possible to trigger event "' + param.value + '"', param.result);
		}	
	};

	assertResults(div, events);
	assertResults(form, formEvents);
}

TrouveurTest.prototype.testFindHandlersNotRemoved = function() {
	runnerHandlersNotRemoved(TrouveurFunctions.find);
};

TrouveurTest.prototype.testCountHandlersNotRemoved = function() {
	runnerHandlersNotRemoved(TrouveurFunctions.count);
};

TrouveurTest.prototype.testReplaceHandlersNotRemoved = function() {
	runnerHandlersNotRemoved(TrouveurFunctions.replace);
};

TrouveurTest.prototype.testHighlightHandlersNotRemoved = function() {
	runnerHandlersNotRemoved(TrouveurFunctions.highlight);
};

//
//
// end of other tests
//
//