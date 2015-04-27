'use strict';

var assert = require('assert');
var Downup = require('..');

var downup, cb;

describe('downup', function(){

  describe('instantiation', function(){
    it('should not throw error', function(done){
      downup = new Downup();
      done();
    })

    it('should have default value to 0', function(done){
      downup = new Downup();
      assert.equal(downup.value, 0);
      done();
    });

    it('should have the value given to constructor', function(done){
      downup = new Downup(55);
      assert.equal(downup.value, 55);
      done();
    });
  });

  describe('listeners', function(){
    beforeEach('create new downup instance', function(){
      cb = function(){ console.log('foo') };
      downup = new Downup();
      downup.on(5, cb);
    });

    it('should have added event stored', function(done){
      assert.ok(downup.e[5] && downup.e[5][0]);
      done();
    });

    it('should have the same callback', function(done){
      assert.equal(downup.e[5][0].fn, cb);
      done()
    });

    // @todo: use spies to test emitters
  });
});
