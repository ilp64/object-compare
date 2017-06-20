# A object compare module

## Usage


		var compare = require('object-compare-function');
		var result = compare({name: 'object1'}, {name: 'object2'});

		console.log(result);

## Test


		var assert = require('assert');
		var compare = require('./index.js');

		var result = compare({l: 1}, {l: 1});
		assert(true === result, 'expected true');

		result = compare({l: 1}, {l: 2});
		assert(false === result, 'expected false');

		result = compare({l: 1, key: {}}, {l: 1, key: {}});
		assert(true === result, 'expected true');

		result = compare({l: 1, key: {}}, {l: 1, key: null});
		assert(false === result, 'expected false');

		result = compare({l: 1, key: null}, {l: 1, key: null});
		assert(true === result, 'expected true');

		result = compare({l: 1, key: null}, {l: 1, key: undefined});
		assert(false === result, 'expected false');

		result = compare({
			level: 1,
			one: {
				level: '2',
    			two: {
					level: 3,
					three: [{
        				'four-1': [1, '2', {five: 'deep'}],
        				'four-2': [1, 2, 3, ['a', 'b', 'c']]
					}]
    			}
  			},
  			name: 'object'
		}, {
			level: 1,
			one: {
    			level: '2',
				two: {
					level: 3,
					three: [{
        				'four-1': [1, '2', {five: 'deep'}],
        				'four-2': [1, 2, 3, ['a', 'b', 'c']]
					}]
    			}
			},
			name: 'object'
		});
		assert(true === result, 'expected true');

		result = compare({
			level: 1,
			one: {
				level: '2',
				two: {
					level: 3,
					three: [{
						'four-1': [1, '2', {five: 'deep???'}],
						'four-2': [1, 2, 3, ['a', 'b', 'c']]
					}]
				}
			},
			name: 'object'
		}, {
			level: 1,
			one: {
				level: '2',
				two: {
					level: 3,
					three: [{
						'four-1': [1, '2', {five: 'deep'}],
						'four-2': [1, 2, 3, ['a', 'b', 'c']]
					}]
				}
			},
			name: 'object'
		});
		assert(false === result, 'expected false');

		result = compare([{}, [{key: null}]], [{}, [{key: null}]]);
		assert(true === result, 'expected true');

		result = compare([{}, [{key: null}]], [{}, [{key: undefined}]]);
		assert(false === result, 'expected false');


## Note

This module uses `===` operator instead of `==` operator, so you will get `false` when `{key: false}` `{key: null}` `{key: undefined}` `{key: 0}` `{key: NaN}` `{key: ''}` is compared each other.
