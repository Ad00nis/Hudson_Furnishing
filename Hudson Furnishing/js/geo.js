/*Geolocation js begins here  */
var x = document.getElementById("Location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
/*Geolocation js ends here  */

/*Date and Time js starts here*/
const D= new Date();
document.getElementById("start").innerHTML = D;

/*Date and Time js starts here*/