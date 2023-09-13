$(function() {
  function adjustAutocompletePosition() {
    $(".ui-autocomplete").css({
      'width': $("#sd-search-wrapper").width(),
      'margin': $(".searchbar").css(['margin-top', 'margin-right', 'margin-bottom', 'margin-left']),
      'left': $(".searchbar").offset().left
    });

    // check if autocomplete box is overflowing off the right side of the screen
    var autocompleteRightEdge = $(".ui-autocomplete").offset().left + $(".ui-autocomplete").outerWidth();
    var windowRightEdge = $(window).width();
    if (autocompleteRightEdge > windowRightEdge) {
      $(".ui-autocomplete").css({
        'left': $(".searchbar").offset().left - ($(".ui-autocomplete").outerWidth() - $(".searchbar").outerWidth())
      });
    }
  }

  $("#search-input").autocomplete({
    source: "/autocomplete/",
    minLength: 1,
    autoFocus: true,
    delay: 500,
    appendTo: "#search-input-container",
    search: function() {
      $.ajaxSettings.cache = false;
    },
    open: function() {
      $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
      $(".formbar").css('border-radius', '20px 20px 0 0');
      $(".ui-autocomplete").css('top', '241px');
      adjustAutocompletePosition();
    },
    close: function() {
      $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
      $(".formbar").css('border-radius', '20px');
    },
    select: function(event, ui) {
      $("#search-input").val(ui.item.label); // set the value of the search input to the selected suggestion
      $("#search-form").submit(); // submit the search form
      return false; // prevent the autocomplete widget from updating the input value with the selected item
    }
  }).autocomplete("instance")._renderItem = function(ul, item) {
    return $("<li>")
      .append("<div>" + item.label + "</div>")
      .appendTo(ul);
  };

  $(window).resize(function() {
    adjustAutocompletePosition();
  });

  // Toggle right sidenav when hamburger button is clicked
$('.navbar-toggler').on('click', function() {
  $('.right-nav').toggleClass('show');
});



});
