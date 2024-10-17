//Dialog

let ID_OffenerDialog ="content-1-dialog";

function dialogOeffnen(dialogId) {
    ID_OffenerDialog = dialogId;
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}

function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar");
    document.getElementById("body-overlay").classList.remove("sichtbar");
}

function dialogSchliessen_images(dialogId) {
  document.getElementById(dialogId).classList.remove("sichtbar");
}

// GalerieSlides

let ProjectClass = "Slides_1";

function DialogOeffnenGalerieLaden(dialogId, pNrClass){
    dialogOeffnen(dialogId);
    ProjectClass=pNrClass;
    showSlides(slideIndex, ProjectClass);
}
 
function showSlides(n, p) {

    let i;
    let slides = document.getElementsByClassName(p);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex, ProjectClass);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n, ProjectClass);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n, ProjectClass);
}

function FensterOeffnen (Adresse) {
    MeinFenster = window.open(Adresse, "Zweitfenster", "width=300,height=400,left=100,top=200");
    MeinFenster.focus();
  }

