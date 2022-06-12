$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* --------  Fixed Header     ---------  */
    checkScroll(scrollOffset)

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        if (header.hasClass("fixed")) {
            $("#nav").removeClass("active");
            $("#nav_toggle").removeClass("active");
        }
    }


    /* --------   Smooth scroll    ---------  */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('#nav_toggle').removeClass('active');
        $('nav').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset - 100
        }, 1000)
    })



    /* --------   Nav Menu(BurgerMenu)    ---------  */

    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $('#nav').toggleClass("active");
    })





    /* --------    Collapse       ---------  */

    $(' [data-collapse] ').on('click', function (event) {
        event.preventDefault()

        var $this = $(this)
        blockId = $this.data('collapse')

        $this.toggleClass('active')
    })


});