'use strict';

var TinyEmitter = require('tiny-emitter');

var Downup = module.exports = function(init) {
  this.value = init || 0;
};

Downup.prototype = Object.create(TinyEmitter.prototype);

Downup.prototype.set = function(value) {
  this.value = value;
};

Downup.prototype.update = function(value) {
  var offset = value - this.value,
      min = Math.min(value, this.value),
      max = Math.max(value, this.value);

  for (var evt in this.e) {
    evt = Number(evt);
    if (evt > min && evt < max) this.emit(evt, offset);
  }

  this.value = value;
};
