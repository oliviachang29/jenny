new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
} );

$(window).on('load', function () {
    $("#loading").fadeOut("slow");;
});

$(".modal-link").animatedModal({
    color: 'white',
    animatedIn: 'fadeInDown',
    animatedOut: 'fadeOutUp',
    animationDuration: '.8s'
});

$('.modal-link').on('click', function(event) {
    var newSrc = "/assets/images/highquality/" + event.currentTarget.id + ".jpg"
    $('#project-img').attr('src', newSrc);
    $('#project-img').hide()
    $(".project-title").text(event.currentTarget.getAttribute("data-title"));
    $(".project-desc").text(event.currentTarget.getAttribute("data-desc"));

    setTimeout(
    function() {
        $('#project-img').fadeIn("slow")
    }, 600); // 600 is same number ms as animatedModal fadeOut

    // // show loading image
    // $('#loading').show();

    // // main image loaded ?
    // $('#project-img').on('load', function(){
    //   // hide/remove the loading image
    //   $('#loading').hide();
    // });

});

$('.close-animatedModal').on('click', function(event) {
    setTimeout(
    function() {
        $('#project-img').attr('src', '');
        document.getElementById('animatedModal').scrollTop = 0;
    }, 300); // 600 is same number ms as animatedModal fadeOut
});