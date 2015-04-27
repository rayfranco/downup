# downup

Tiny listener on numerical value changes.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install downup --save
```

## Usage

```javascript
var Downup = require('downup');

// Create instance
var downup = new Downup();

// Add listener
downup.on(1, function(offset) {
  console.log('Reached 1 and going %s', offset > 0 ? 'up' : 'down');
});

// Will trigger since default value is 0
downup.update(2);

// Will trigger again with offset -1
downup.update(0);

// Will not trigger
downup.set(2);

// Remove all listeners attached to number 1
downup.off(1);

// Will not trigger since the listener has been removed
downup.update(0);
```			

## Instance Methods

downup extends [TinyEmitter](https://github.com/scottcorgan/tiny-emitter) and inherit from its instance methods.

### on(number, callback[, context])

Subscribe to a number

* `number` - the number to subscribe to
* `callback` - the function to call when number is reached
* `context` - (OPTIONAL) - the context to bind the event callback to

### once(number, callback[, context])

Subscribe to an event only **once**

* `number` - the number to subscribe to
* `callback` - the function to call when number is reached
* `context` - (OPTIONAL) - the context to bind the event callback to

### off(number[, callback])

Unsubscribe from an number. If no callback is provided, it unsubscribes you from all callbacks registered to this number.

* `number` - the number to unsubscribe from
* `callback` - the function used when binding to the number

### update(number)

Update `downup.value` and trigger any registered numbers between old value and this one

* `number` - the new value

### set(number)

Similar to `update(number)` but it will not trigger any event.

* `number` - the new value

### emit(number[, offset])

Trigger a specific number (should not be used...)

* `number` - the number to emit
* `offset` - the offset to pass to the callbacks

## Test and Build
 
Build (Tests, Browserifies, and minifies)

```bash
npm install
npm run build
```

Test

```bash
npm install
npm test
```

## License

MIT
