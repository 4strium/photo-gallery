// Récupère l'élément modal
var modal = document.getElementById("modal");

// Récupère l'élément où afficher l'image en grand dans la modale
var modalImg = document.getElementById("fullImage");

// Récupère la croix de fermeture
var closeBtn = document.querySelector(".close");

// Récupère toutes les images miniatures
var thumbnails = document.querySelectorAll(".image-thumbnail img");

// Ajoute un événement de clic à chaque image miniature
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden";
    });
});

// Quand l'utilisateur clique sur la croix, ferme la modale
closeBtn.onclick = function() { 
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Fermer la modale si on clique en dehors de l'image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}