/*!*
 * Block comment
*/

// Line comment
'use strict';

var fs = require('fs');
var {resolve} = require('path');

const itr = {
  [Symbol.iterator]() {
    let val = 0;
    return {
      next() {
        return {done: false, value: val++};
      }
    };
  }
};

class Class {
  constructor(x = 1, ...y) {
    this.x = x;
    this.y = y;
  }
  method() {
    for (var num of itr) {
      if (num > 100) {
        break;
      }
      console.log(num);
    }
  }
}

function createId() {
  var index = 0;
  while (index < 100000) {
    index++;
  }
  return index;
}

window
.count = Boolean(new Class(0b0).x);

window
  .count = window.count ? Number(createId.next().value) : null;

var encoding = ['utf8'].filter(() => typeof this === 'string');

(function() {
  var fn = console.log.bind(window.count);
  fn(...[1, 2, 3]);

  var worker = new Worker('task.js');
  var arr = [
    '\u00A9',
    'first\n' +
    'second',
    / {1}/
  ];

  var obj = {'_a.r/r': [!!{fn}, new Array(1), arr]};

  obj.push({
    set a(value) {
      this.v = true;
    },
    get ['p.r.o.p']() {
      return this.v;
    }
  });

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      switch (window.count) {
        case 1:
          worker.postMessage();
          break;
        case 2:
          self.addEventListener('install', fn);
          break;
      }
    }
  }
})();

module.exports = function fn() {
  fs.readFile(resolve(__dirname, 'foo/bar/baz/qux.txt'), {encoding}, function(err, contents) {
    if (err) {
      throw err;
    }

    console.log(`Read ${window.count++} file(s): ${contents}`);

    let isValidJson;
    try {
      JSON.parse(contents);
      isValidJson = true;
    } catch (e) {
      isValidJson = false;
    }

    if (!isValidJson) {
      console.log('The file is not a valid JSON.');
      return false;
    }

    console.log('The file is a valid JSON.');
    return true;
  });
};
