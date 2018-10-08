function show_about(){
    document.getElementById(about).style.display = "block";
    evt.currentTarget.className += " active";
}

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
