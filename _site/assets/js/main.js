$('body').hide()

jQuery(window).on("load", function(){
    $('svg').css({
      'opacity': '1'
    })
});

$(function() {
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
     setTimeout(
    function() {
        new AnimOnScroll( document.getElementById( 'grid' ), {
            minDuration : 0.4,
            maxDuration : 0.7,
            viewportFactor : 0.2
        } );
    }, 1000);
    // $("nav").slideUp()
    // $(".grid").slideDown()
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */
      _this.done();
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


function smoothScroll(target) {
    $('body,html').animate({
            'scrollTop': target.offset().top
        },
        500
    );
}

new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
} );

$(window).on('load', function () {
    $("#loading").fadeOut("slow");
});

// $(".modal-link").animatedModal({
//     color: 'white',
//     animatedIn: 'fadeInDown',
//     animatedOut: 'fadeOutUp',
//     animationDuration: '.8s'
// });