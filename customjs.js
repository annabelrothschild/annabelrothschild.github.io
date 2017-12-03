function displayBio(){
    var artistSt = "Annabel Rothschild is a photographer from Atlanta, GA. Her work explores personal identity & narrative and subconscious/automatic production and has been selected to appear at SCAD Atlanta and the 79th Atlanta Dogwood Festival, among other venues. Her work has also appeared the national publication, Photographer’s Forum Best of Photography 2016, The Blue Rider literary magazine, and received several awards, including three Silver keys, from the Scholastic Art Awards."
    if (document.getElementById("statement").textContent.length < 1){
        document.getElementById("statement").innerHTML = artistSt;
    }
    else{
        document.getElementById("statement").innerHTML = "";
    }
    
}

function openCity(evt, cityName) {
    if (cityName == 'art'){
        var modal = document.getElementById('artModal');

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    document.getElementById("homeImage").style.display = "none";
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
window.onload = function(){

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-108114820-1');
