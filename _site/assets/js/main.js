const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function showMedium() {
    $("#project-medium").css({display: 'block'});
    $("#project-medium-hr").css({display: 'block'});
}

function showStyle() {
    $("#project-style").css({display: 'block'});
    $("#project-style-hr").css({display: 'block'});
}

function hideMedium() {
    $("#project-medium").css({display: 'none'});
    $("#project-medium-hr").css({display: 'none'});
}

function hideStyle() {
    $("#project-style").css({display: 'none'});
    $("#project-style-hr").css({display: 'none'});
}

$(function() {
    hideMedium()
    hideStyle()
});

new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
} );

$(window).on('load', function () {
    $("#loading").fadeOut("slow");
});

$(".modal-link").animatedModal({
    color: 'white',
    animatedIn: 'fadeInDown',
    animatedOut: 'fadeOutUp',
    animationDuration: '.8s'
});

$('.modal-link').on('click', function(event) {
    var target = event.currentTarget
    $('#project-img').hide()
    $('#project-img').attr('src', target.getAttribute("data-image-url"));
    $("#project-title").text(target.getAttribute("data-title"));
    $("#project-desc").text(target.getAttribute("data-desc"));
    
    var medium = target.getAttribute("data-medium");
    
    if (medium) {
        console.log(medium)
        showMedium()
        $("#project-medium").text(medium);
    }

    var style = target.getAttribute("data-style")

    if (style) {
        console.log(style)
        showStyle()
        $("#project-style").text(style);
    }

    var medium = target.getAttribute("data-style")
    $("#project-style").text();

    var date = new Date(target.getAttribute("data-date"))
    
    $("#project-date").text(months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());

    setTimeout(
    function() {
        $("#loading").show();
    }, 800); // 800 is same number ms as animatedModal fadeOut

    $('#project-img').on('load', function(){
        $("#loading").hide();
      $('#project-img').fadeIn()
    });

});

$('.close-animatedModal').on('click', function(event) {
    $("#loading").hide();
    setTimeout(
    function() {
        hideMedium()
        hideStyle()
        $('#project-img').attr('src', '');
        document.getElementById('animatedModal').scrollTop = 0;
    }, 300);
});