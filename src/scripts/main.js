$(function() {
  $('.examples').find('.with-save').swappable({
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
  $('.examples').find('.without-save').swappable({
    saveChanges: false,
    swapStart: function() {
      console.log('it begins');
    },
    swapChange: function() {
      console.log($(this).val());
    },
    swapEnd: function(val) {
      $(this).addClass('edited');
      console.log('it didn\'t change');
    }
  });
});
