$(document).ready(function() {
  console.log('document ready test');
  $('.dropdown-button').dropdown();
  $('.parallax').parallax();
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  // click on project image, show text for that image.  hide text for others.
  $('#project1').on('click', function() {
    if ($('#project1Text').hasClass('hide')) {
      // show basic project text.
      $('#project1Text').removeClass('hide').addClass('show');
      // hide text from other projects
      $('#project2Text').removeClass('show').addClass('hide');
      // hide detailed project text
      $('#project1Details').removeClass('show').addClass('hide');
      // show link to get more details again
      $('#project1MoreDetailsLink').removeClass('hide').addClass('show');
      // hide link to get fewer details
      $('#project1FewerDetails').removeClass('show').addClass('hide');
    } else {
      $('#project1Text').removeClass('show').addClass('hide');
    }
  })

  $('#project1MoreDetailsLink').on('click', function() {
    $('#project1Details').removeClass('hide').addClass('show');
    $('#project1MoreDetailsLink').removeClass('show').addClass('hide');
    $('#project1FewerDetails').removeClass('hide').addClass('show');
  })

  $('#project1FewerDetails').on('click', function() {
    console.log('clicked project 1 fewer details');
    $('#project1Details').removeClass('show').addClass('hide');
    $('#project1MoreDetailsLink').removeClass('hide').addClass('show');
    $('#project1FewerDetails').removeClass('show').addClass('hide');
  })

  // click on project image, show text for that image.  hide text for others.
  $('#project2').on('click', function() {
    console.log('click project 2 image');
    $('#project2Text').removeClass('hide').addClass('show');
    $('#project1Text').removeClass('show').addClass('hide');
  })

  $('.project').on('click', function() {
    console.log('smarter click test');
    $()
  })


})
