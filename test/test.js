/*global require, describe, it, assert */
var assert = require('assert'),
    fs = require('fs'),
    
    graph = require('../lib/graph.js');

function test(testcase) {
  var input = 'test/fixtures/' + testcase + '.js',
      expected = fs.readFileSync('test/expected/' + testcase + '.dot');
  
  return assert.equal(graph(input, 'fancy'), expected);
}

describe('states', function () {
  it('should identify the initial state', function() {
    test('initial');
  });
  
  it('should identify the final state', function() {
    test('final');
  });
  
  it('should identify the entry condition', function() {
    test('entry');
  });
  
  it('should identify the exit condition', function() {
    test('exit');
  });
  
  it('should identify the do activity', function() {
    test('do');
  });
  
  it('should handle state without activities', function() {
    test('simple-state');
  });
});

describe('activity handlers', function () {
  it('should identify handler name when anonymous function', function() {
    test('anonymous');
  });
  
  it('should identify handler name when function has name', function() {
    test('name');
  });
  
  it('should identify reference name', function() {
    test('reference');
  });
});