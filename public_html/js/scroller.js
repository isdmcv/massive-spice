/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

    function goToByScroll(id){
          // Reove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top-90},
            'slow');
            
    }

    $("#nav > li > a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("id"));
        
    });
