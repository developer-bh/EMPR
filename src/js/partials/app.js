$( document ).ready(function() {

    // Scroll to element

    $(".scroll_to").on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var scenes = [];
    var scenesSelector = document.querySelectorAll('.scene');

    for(i=0; i<scenesSelector.length; i++){
        scenes[i] = new Parallax(scenesSelector[i]);
    }

});


