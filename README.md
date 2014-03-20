jquery.swappable.js
===================

a jQuery plugin to turn an element into an input when you click on it.

![input example](https://raw.githubusercontent.com/james2doyle/jquery.swappable.js/master/input.gif)

### Basic Usage

The HTML

```html
<p>click to edit me</p>
```

Now the JS

```javascript
$('p').swappable();
```

### Advanced Usage

```html
<p data-swap-type="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

```javascript
$('p').swappable({
  swapStart: function() {
    console.log('it begins');
  },
  swapChange: function() {
    console.log($(this).val());
  },
  swapEnd: function(val) {
    $(this).addClass('edited');
    console.log('ajax save?');
  }
});
```

### Methods and Options

```javascript
this.defaults = {
  id: 'swappable-temp-input', // the id of the input that is injected
  class: 'swappable-input', // the class of the injected input
  name: 'swappable-temp', // the name of the injected input
  evt: 'click', // starting trigger event
  end: 'blur', // ending trigger event
  saveChanges: true, // swap with input text?
  changeEvent: 'input', // change listener (might be 'keyup')
  swapStart: function() {},
  swapChange: function() {}, // on changeEvent
  swapEnd: function(inputValue) {} // when we are done
}
```


