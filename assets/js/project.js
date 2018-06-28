const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function showTags() {
    $(".tags").css({display: 'none'});
}

function showMedium() {
    $("#project-medium").css({display: 'block'});
    $("#project-medium-hr").css({display: 'block'});
}

function showStyle() {
    $("#project-style").css({display: 'block'});
    $("#project-style-hr").css({display: 'block'});
}

function showDate() {
    $("#project-date").css({display: 'block'});
}

function hideTags() {
    $(".tags").css({display: 'none'});
}


function hideMedium() {
    $("#project-medium").css({display: 'none'});
    $("#project-medium-hr").css({display: 'none'});
}

function hideStyle() {
    $("#project-style").css({display: 'none'});
    $("#project-style-hr").css({display: 'none'});
}

function hideDate() {
    $("#project-date").css({display: 'none'});
}

$(function() {
    alert("{{page.title}}");
});

$('.close-animatedModal').on('click', function(event) {
    $("#loading").hide();
    setTimeout(
    function() {
        showTags()
        hideMedium()
        hideStyle()
         $("#project-title").css({
            'text-align': 'left'
        }),
        $("#project-desc").css({
            'text-align': 'left'
        })
        $(".title-desc").css({
            'width': '50%'
        })
        $('#project-img').attr('src', '');
        document.getElementById('animatedModal').scrollTop = 0;
    }, 300);
});