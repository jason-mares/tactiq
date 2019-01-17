// Project Ranking
$(function() {
  $('.js-youtube').on('click', function() {
    var $yt = $(this);
    var ytid = $yt.data('id');
    var $thumbnail = $yt.find('.js-youtube-thumbnail');
    var ytDOM = '<iframe class="iframe" width="1920" height="1080" src="https://www.youtube.com/embed/' + ytid + '?autoplay=1&rel=0&showinfo=0&showsearch=0&controls=1&loop=1" frameborder="0" allowfullscreen></iframe>';

    $thumbnail.replaceWith(ytDOM);
  });
});



// Project Ranking
$(document).ready(function(){
	$("#work-list li").sort(sort_li).appendTo('#work-list');
    
      
      /// navigation color swap
      if ( window.location.pathname == '/' ){
            $('nav').addClass('home');

        } else {
            // remove navigation color swap
            $('nav').removeClass('home');
        }
    
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 987);
    });
    
    

});

function sort_li(a, b){
    return ($(b).data('value')) < ($(a).data('value')) ? 1 : -1;
}






// Page Transitions
var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
        $(this.oldContainer).toggleClass('fade-out');

        return new Promise(function(resolve, reject) {
            window.setTimeout(function() {
               resolve();
            }, 300);
        });
      
      /// add stuff here
      
    },
  fadeIn: function() {
    $(this.newContainer).toggleClass('fade-in');
    this.done();
      
      /// navigation color fix
      if ( window.location.pathname == '/' ){
            $('nav').addClass('home');

        } else {
            // Other page
            $('nav').removeClass('home');
        }
      
      /// sort homepage portfolio
	$("#work-list li").sort(sort_li).appendTo('#work-list');
  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};






// Animated Scroll
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".reveal")
  var tag2 = $(".hide")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }

  for (var i = 0; i < tag2.length; i++) {
    var tag1 = tag2[i]

    if ($(tag1).position().top < pageBottom) {
      $(tag1).addClass("invisible")
    } else {
      $(tag1).removeClass("invisible")
    }
  }
});