$(document).ready(function () {
  $("#banner-area .owl-carousel").owlCarousel({ dots: true, items: 1 });

  // owl carousel top sale

  $("#top-sale .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // isotope filter

  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });

  //filter items on button click
  $(".button-group").on("click", "button", function () {
    var filtervalue = $(this).attr("data-filter");
    $grid.isotope({ filter: filtervalue });
  });

  //   new phones caroousel

  $("#new-phones .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  //   blogs

  $("#blogs .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  //   product qty section
  let $qty_up = $(".qty .qty-up");
  let $qty_down = $(".qty .qty-down");
  //   let $input = $(".qty-input");

  $qty_up.click(function (event) {
    let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);

    if ($input.val() >= 1 && $input.val() <= 9) {
      $input.val(function (i, oldval) {
        return ++oldval;
      });
    }
  });

  $qty_down.click(function (event) {
    let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);

    if ($input.val() > 1 && $input.val() <= 9) {
      $input.val(function (i, oldval) {
        return --oldval;
      });
    }
  });
});
