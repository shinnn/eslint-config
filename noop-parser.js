'use strict';

const parse = require('espree').parse;

const emptyAst = parse('', {
	loc: true,
	range: true,
	tokens: true,
	comment: true,
	eslintVisitorKeys: true,
	eslintScopeManager: true
});

module.exports = {
	parseForESLint() {
		return {ast: emptyAst};
	}
};
