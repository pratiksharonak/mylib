'use strict';

const designTokens = require('..');
const assert = require('assert').strict;

assert.strictEqual(designTokens(), 'Hello from designTokens');
console.info('designTokens tests passed');
