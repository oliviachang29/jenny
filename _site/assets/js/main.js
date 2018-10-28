$('body').hide()

jQuery(window).on("load", function(){
  fadeOutLoading()
  $('svg').css({
    'opacity': '1'
  })
});

$(function() {
  markCurrentLink()
  fadeOutLoading()
  $('body').fadeIn()
  $('svg').css({
    'opacity': '0'
  })

  var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    markCurrentLink()
    $('footer').hide();
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    fadeOutLoading()

    // alert('fade out loader')

    $el.animate({ opacity: 1 }, 400, function() {
      _this.done();
      if (window.location.pathname.split('/')[1] == 'projects') {
        smoothScroll($('.project-container'))
      }
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};
    Barba.Pjax.start();
    // hideMedium()
    // hideStyle()
});

function markCurrentLink() {
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    } else {
      $(this).removeClass('current');
    }
  });
}

function smoothScroll(target) {
    $('body,html').animate({
            'scrollTop': target.offset().top
        },
        500
    );
}

function fadeOutLoading() {
  $("#loading").fadeOut("slow");
}