$(document).ready(function() {
  console.log('document ready test');
  $('.dropdown-button').dropdown();

  // click on project image, show text for that image.  hide text for others.
  $('#project1').on('click', function() {
    console.log('click project 1 image');
    $('#project1Text').removeClass('hide').addClass('show');
    $('#project2Text').removeClass('show').addClass('hide');
  })

  $('#project1MoreDetailsLink').on('click', function() {
    console.log('click project 1 more details text');
    $('#project1Details').removeClass('hide').addClass('show');
    $('#project1MoreDetailsLink').removeClass('show').addClass('hide');
    $('#project1FewerDetails').removeClass('hide').addClass('show')
    // $('#project2Text').removeClass('show').addClass('hide');
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
