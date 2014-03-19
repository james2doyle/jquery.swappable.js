$(function() {
  $('.examples').find('p').swappable({
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
});
