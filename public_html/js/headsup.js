/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var topbar = document.getElementById('headercont');
 
  
  
var isSliding = false;

function expand() {
   var heig=80;
     function animate() {

        // update parameters 
        //console.log(parseInt(elem.style.left));

        if (heig >= 550 - 25) {
            heig++;

            // console.log('slow');

        } else if (heig >= 550 - 100) {
            //  console.log('startslow');
            heig += 10;

        } else {
            heig += 25;
        }

     
   topbar.style.height = heig+"px";


        // slidercanvas.
        if (heig >= 550) { // check finish condition
            clearInterval(id);
            isSliding = false;
              document.getElementById('nav').lastElementChild.setAttribute('onclick','collapse();');
        }
    }


            var id = setInterval(animate, 10); // draw every 10ms

}

function collapse() {
   var heig=550;
     function animate() {

        // update parameters 
        //console.log(parseInt(elem.style.left));

        if (heig <= 80 + 25) {
            heig--;

            // console.log('slow');

        } else if (heig <= 80 + 100) {
            //  console.log('startslow');
            heig -= 10;

        } else {
            heig -= 25;
        }

     
   topbar.style.height = heig+"px";


        // slidercanvas.
        if (heig <= 80) { // check finish condition
            clearInterval(id);
            isSliding = false;
             document.getElementById('nav').lastElementChild.setAttribute('onclick','expand();');
      
        
         }
    }


            var id = setInterval(animate, 10); // draw every 10ms

}



