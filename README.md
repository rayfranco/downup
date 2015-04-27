# downup

Tiny listener on numerical value changes.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install downup --save
```

## Usage

```javascript
var downup = new Downup();

// Add listener
downup.on(1, function(offset) {
  console.log('Reached 1 and going %s', offset > 0 ? 'up' : 'down');
});

// Will log since default value is 0
downup.update(2);

// Will trigger again
downup.update(0);

// Will not trigger
downup.set(2);

// Remove listener
downup.off(1);

// Will not trigger
downup.update(0);
```

## License

MIT
