/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var pic = document.getElementById('pic360');
var count = 1;
function next360() {

  var picsrc =   pic.getAttribute('src').substring(0,30);
  
  if (count===12){
      count=1;
  } else {
      count++;
  }
  
  pic.setAttribute('src', picsrc+ count+".jpg" );
  
}

function previous360() {

  var picsrc =   pic.getAttribute('src').substring(0,30);
  
  if (count===1){
      count=12;
  } else {
      count--;
  }
  
  pic.setAttribute('src', picsrc+ count+".jpg" );
  
}