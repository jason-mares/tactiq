// Project Ranking
$(document).ready(function(){
	$("#work-list li").sort(sort_li).appendTo('#work-list');

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
    },
  fadeIn: function() {
    $(this.newContainer).toggleClass('fade-in');
    this.done();
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