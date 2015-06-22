'use strict';

var TinyEmitter = require('tiny-emitter');

var Downup = module.exports = function(init) {
  this.updating = false;
  this.value = init || 0;
  this.test = init || 0;
};

Downup.prototype = Object.create(TinyEmitter.prototype);

Downup.prototype.set = function(value) {
  this.value = value;
};

Downup.prototype.update = function(value) {
  this.test = value;

  if (this.updating && value === this.value) return;

  this.updating = true;

  if (requestAnimationFrame)
    requestAnimationFrame(this._update.bind(this)); // Browser
  else
    this._update(); // Node
};

// Internal update
Downup.prototype._update = function(){
  var offset = this.test - this.value,
      min = Math.min(this.test, this.value),
      max = Math.max(this.test, this.value);

  for (var evt in this.e) {
    evt = Number(evt);
    if (
      (evt > min && evt < max) ||
      (evt === min && offset < 0) ||
      (evt === max && offset > 0)
    ) {
      this.emit(evt, offset);
    }
  }

  this.value = this.test;
  this.updating = false;
}
