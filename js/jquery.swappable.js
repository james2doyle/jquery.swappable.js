(function() {
  $.fn.extend({
    swappable: function(options) {
      this.defaults = {
        id: 'swappable-temp-input',
        class: 'swappable-input',
        name: 'swappable-temp',
        evt: 'click', // start event
        end: 'blur', // end event
        saveChanges: true, // swap with input text?
        changeEvent: 'input', // change listener (could be keyup)
        swapStart: function() {},
        swapChange: function() {}, // on changeEvent
        swapEnd: function() {} // when we are done
      };
      var settings = $.extend({}, this.defaults, options);

      function makeTemplate() {
        // textareas are special
        if (settings.type === 'textarea') {
          return '<textarea class="' + settings.class + '" name="' + settings.name + '" id="' + settings.id + '">' + settings.text + '</textarea>';
        } else {
          // something is messed. let there be inputs
          return '<input type="text" class="' + settings.class + '" name="' + settings.name + '" id="' + settings.id + '" value="' + settings.text + '">';
        }
      }

      function handleSwap() {
        // are we just using this for a text copy scenario?
        var val = (!settings.saveChanges) ? settings.temp: $(this).val();
        // convert our saved element to a real element
        var $p = $(settings.temp);
        // swap the inner text with the new one is applicable
        $p.text(val);
        // do the swap
        $(this).replaceWith($p);
        // call itself with the settings from the first run
        $p.swappable(settings);
        // pass the real element as 'this'
        settings.swapEnd.call($p[0]);
      }

      function handleClick() {
        // we started bitches
        settings.swapStart();
        var $this = $(this);
        // save this entire element as a string
        settings.temp = this.outerHTML;
        // save the innards
        settings.text = $this.text();
        // get the swap element if its there
        settings.type = $this.attr('data-swap-type');
        // replace with our template
        $this.replaceWith(makeTemplate());
        var $input = $('#' + settings.id);
        // add the event listeners for the change and the end
        $input.on(settings.changeEvent, settings.swapChange).on(settings.end, handleSwap).focus();
      }
      return this.each(function() {
        $(this).on(settings.evt, handleClick);
      });
    }
  });
})();
