$( document ).ready(function() {
    
    $('a[href*=#]:not([href=#])').click(function() { /* smooth scrolling function from https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
            }
        }
    });

    $(".submit").click(function() { /* moves .results from the right after the user selects their county of residence */
        $(".results").css("position", "relative");
        $(".results").animate({left: "-50%"}, { duration: 800, easing: "easeOutCubic" });
    });
    
    $(".back").click(function() { /* moves .results from the left back to the right off the screen */
        $(".results").animate({left: "0%"}, { duration: 600, easing: "easeOutCubic" });
        $(".pick-a-county").css("display", "inherit");
    });
    
    $("#county-select").change(function() {
        
        var selectedCounty = $("#county-select :selected").attr("value");
        $(".name").empty().append("" + selectedCounty + " county");
        
    });
    
});