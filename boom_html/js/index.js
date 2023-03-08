$( document ).ready( function() {
    $( '.menu-trigger' ).click( function() {
      $( '.menu-trigger' ).addClass( 'on' );
      $( '.m-nav' ).addClass( 'on' );
    } );
    $( '.close' ).click( function() {
        $( '.menu-trigger' ).removeClass( 'on' );
        $( '.m-nav' ).removeClass( 'on' );
      } );
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
    // $(".m-nav-item").click(function(){
    //     $(this).children().toggleClass("open").slideUp();
    //     if($(this).children().hasClass("open"))
    //       $(".m-nav-item").not(this).children().removeClass("open").slideDown();
    //   })
    $(".m-nav-item > ul").hide();
    $(".m-nav-item").click(function(){
        $(".m-nav-item > ul").slideUp(200);
        $(this).children(".m-nav-item > ul").stop().slideToggle(200);
    });
});

