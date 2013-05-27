/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var elem = document.getElementById('slidercanvas');
var androidbg = document.getElementById('andbg');
elem.style.left = 0 + 'px';
androidbg.style.left = 0 + 'px';
var isSliding = false;
var x = 1;
function move(way) {



    //console.log(elem);
    var left = 0;

// console.log(slider.offsetWidth);

    var pos = parseInt(elem.style.left);
    var andpos = parseInt(androidbg.style.left);
   
    
    var cond = (slider.offsetWidth);



    function animate() {

        // update parameters 
        //console.log(parseInt(elem.style.left));

        if (left >= cond - 25) {
            left++;

            // console.log('slow');

        } else if (left >= cond - 100) {
            //  console.log('startslow');
            left += 10;

        } else {
            left += 25;
        }

        if (way === true) {
            elem.style.left = (pos - left) + 'px'; // show frame 
            androidbg.style.left = (andpos - left / 4) + 'px';
        } else {
            elem.style.left = (pos + left) + 'px'; // show frame 
            androidbg.style.left = (andpos + left / 4) + 'px';
        }



        // slidercanvas.
        if (left >= cond) { // check finish condition
            clearInterval(id);
            isSliding = false;
        
        if(x===1){
              document.getElementById("textcaptions").innerHTML = "Lancer EX";
        } else if (x===2){
            document.getElementById("textcaptions").innerHTML = "Lancer EX Hatchback";
        } else {
                document.getElementById("textcaptions").innerHTML = "Soon";
        }
        
          
        }
    }



  //  console.log(x);
    //if ((((!way) && x === 1) || ((way) && x === 4))) {
    if (x === 4 && way) {

    } else if (x === 1 && !way) {

    } else {

        if (!isSliding) {
            isSliding = true;

            if (way) {
                x += 1;
            } else {
                x -= 1;
            }

            var id = setInterval(animate, 10); // draw every 10ms

        }
    }



}
;



