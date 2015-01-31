$(function() {
    $('.toggle-off-canvas').on('click', function() {
        $(".canvas-wrapper").toggleClass('show-menu-off-canvas');
    });
    $('.off-canvas-menu .sub-menu-container').on('click', function() {
       $(this).toggleClass('active');
    });
});



