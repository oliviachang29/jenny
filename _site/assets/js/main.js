var scroll;

function markCurrentLink(target) {
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    } else {
      $(this).removeClass('current');
    }
  });
}

function initJS() {
  AOS.init({
      once: true
  });

  scroll = new SmoothScroll();
  
  $(".lazy").unveil(0, function() {
    $(this).on('load', function() {
      this.style.opacity = 1;
    });
  });

  markCurrentLink()
}
// executes this stuff before load
$(function() {
  initJS()
  const swup = new Swup();
  swup.on('contentReplaced', function() {
      initJS();
      if (window.location.pathname.split('/')[1] == 'projects') {
        scroll.animateScroll($('#project-img-container'))
      }
  });
});