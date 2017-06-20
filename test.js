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

result = compare({key: false}, {key: 0})
assert(false === result, 'expected false');

result = compare({key: false}, [])
assert(false === result, 'expected false');

result = compare([], [])
assert(true === result, 'expected true');