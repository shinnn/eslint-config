'use strict';
/*!*
 * Block comment
*/

// Line comment
process.emv.npm_config_production = true;

const {readFile} = require('fs').promises;
const {resolve} = require('path');

const {createFileSystemWatcher} = require('vscode').workspace;

console.log(typeof createFileSystemWatcher('*.js'));

let val = 0;

const obj = {
	*[Symbol.iterator]() {
		yield {
			next() {
				return {done: false, value: val++, '99999': 99999};
			}
		};
	},
	method: async () => {
		try {
			const [_, x] = await (await fetch('https://example.org/some/api')).json();
			return x;
		} catch {}

		return Promise.reject(new Error('\u2028!'));
	}
};

class Class {
	constructor(x = 1, ...y) {
		this.x = x;
		this.y = y;
	}

	method() {
		for (const num of obj) {
			if (num > 100) {
				break;
			}
			console.log(
				num ** this.z,
				Symbol('Hi')
			);
		}
	}
}

window
.count = Boolean(new Class(0b0).x);

window
.count = window.count ? Number(createId.next().value) : 'strstr' +
                                                        'str';

function createId() {
	let index = 0;
	while (index < 100000) {
		index++;
	}
	return index;
}

const encoding = ['utf8'].filter(() => typeof this === 'string');

(function() {
	const fn = console.log.bind(window.count);
	fn(...[1, 2, 3]);

	const worker = new Worker('task.js');
	const arr = [
		'\u00A9',
		'first\n' +
    'second',
		/ 🏄‍♂️{1}(?<namedCaptureGroup>a|b)/u
	];

	const second = arr[1];
	console.log(second);

	const list = {'_a.r/r': [!!{fn}, new Array(1), arr, 0, 1, 2, 3, 4, Buffer.from('5'), 0x6]};
	const getterName = 'g.e.t.t.e.r';

	list.push({
		set a(value) {
			this.v = true;
		},
		get [getterName]() {
			return this.v;
		}
	});

	for (const prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
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

module.exports = async function fn() {
	const contents = await readFile(resolve(__dirname, 'foo/bar/baz/qux.txt'), {encoding});
	console.log(`Read ${window.count++} file(s): ${contents}`);

	let isValidJson;
	try {
		JSON.parse(contents);
		isValidJson = true;
	} catch {}

	if (!isValidJson) {
		console.log('The file is not a valid JSON.');
		return false;
	}

	console.log('The file is a valid JSON.');
	return true;
};
