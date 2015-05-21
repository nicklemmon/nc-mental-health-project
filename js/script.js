$( document ).ready(function() {

    $(".submit").click(function() {
        $(".results").css('left', '60%');
        $(".results").show();
    });
    
    $(window).resize(function() {
        
        if( $(this).width() < 768 ) {

            $(".submit").click(function() {
                $(".results").css('margin-top', '180px');
                $(".results").show();
            });

        };

        /*else {

            $(".submit").click(function() {
                $(".results").css('left', '60%');
                $(".results").show();   
            });

        };*/

    });
    
});