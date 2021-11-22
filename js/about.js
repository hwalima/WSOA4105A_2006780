$(function() {

    createClouds(30);
  
    $('.rocket-body').on('click', function() {
      if ($('.sky').hasClass('show-details')) {
        return;
      }
      $('.rocket').addClass('lift-off');
      setTimeout(function() {
        $('.rocket').removeClass('lift-off');
        $('.sky').addClass('show-details');
      }, 2100);
    });
  
    $('.close').on('click', function() {
      $('.sky').removeClass('show-details');
    });
  
    function createClouds(numClouds) {
      for (var i = 0; i < numClouds; i++) {
        $('.clouds').append('<div class="cloud"></div>');
  
        var divsize = ((Math.random() * 100)).toFixed();
        var posLeft = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posTop = (Math.random() * ($(document).height() - divsize)).toFixed();
        var child = i + 1;
        $('.cloud:nth-child(' + child + ')').css({
          top: posTop + 'px',
          left: posLeft + 'px',
          opacity: Math.random(0.5, 1.1),
          transform: "scale(" + Math.random(1, 2) + ")"
        });
      }
    }
  });