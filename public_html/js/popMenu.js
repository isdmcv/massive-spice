/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function showPopUp(){
  //  document.getElementById('popMenu').style.display = "block";
     $("#popMenu").slideDown();
}

function hidePopUp(){
  //  document.getElementById('popMenu').style.display = "none";
      $("#popMenu").slideUp();
}

function makeMouseOutFn(elem){
    var list = traverseChildren(elem);
    return function onMouseOut(event) {
        var e = event.toElement || event.relatedTarget;
        if (!!~list.indexOf(e)) {
            return;
        }
        hidePopUp();
     
    };
}


var parent = document.getElementById("popMenu");
parent.addEventListener('mouseout',makeMouseOutFn(parent),true);

function traverseChildren(elem){
    var children = [];
    var q = [];
    q.push(elem);
    while (q.length > 0) {
      var elem = q.pop();
      children.push(elem);
      pushAll(elem.children);
    }
    function pushAll(elemArray){
      for(var i=0; i < elemArray.length; i++) {
        q.push(elemArray[i]);
      }
    }
    return children;
}