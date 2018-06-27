const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
    $('#project-img').hide()
    $('#project-img').attr('src', event.currentTarget.getAttribute("data-image-url"));
    $("#project-title").text(event.currentTarget.getAttribute("data-title"));
    $("#project-desc").text(event.currentTarget.getAttribute("data-desc"));
    $("#project-medium").text(event.currentTarget.getAttribute("data-medium"));
    $("#project-style").text(event.currentTarget.getAttribute("data-style"));

    var date = new Date(event.currentTarget.getAttribute("data-date"))
    
    $("#project-date").text(months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());

    $('#project-img').on('load', function(){
      $('#project-img').fadeIn("slow")
    });

});

$('.close-animatedModal').on('click', function(event) {
    setTimeout(
    function() {
        $('#project-img').attr('src', '');
        document.getElementById('animatedModal').scrollTop = 0;
    }, 300); // 600 is same number ms as animatedModal fadeOut
});