/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */





function initialize() {
  var myLatlng = new google.maps.LatLng(14.581977,121.13063);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content"><img src="images/cat.gif"/>Meow'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth:150
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'MMPC HQ'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
  
  
 
   new google.maps.Marker({
      position: new google.maps.LatLng(14.619646,121.098346),
      map: map,
      title: 'Diamond Marcos Highway, Inc.'
  });
 
   new google.maps.Marker({
      position: new google.maps.LatLng(14.54828,121.014157),
      map: map,
      title: 'Peak Motors Phils., Inc. – Manila Bay'
  });
    new google.maps.Marker({
      position: new google.maps.LatLng(14.54828,121.014157),
      map: map,
      title: 'Peak Motors Phils., Inc. – Manila Bay'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);