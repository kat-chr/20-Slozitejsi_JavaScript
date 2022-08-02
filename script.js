console.log("JavaScript funguje!");

let vizualniHlavniOdstavec = document.querySelector(".hlavni-odstavec");
vizualniHlavniOdstavec.textContent = "Domovska stranka";

let visualniMojeFoto = document.querySelector(".moje-foto");
visualniMojeFoto.src = "img/druhe-foto.jpeg";

let visualVzdelani = document.querySelector(".vzdelani");
visualVzdelani.textContent = "Skoly";

let VisualPredstaveniSe = document.querySelector(".predstaveni-se");
VisualPredstaveniSe.style.color = "blue";


function pridejZvyrazneni() {
    let visualniZvyrazneny = document.querySelector(".tlacitko1");
    visualniZvyrazneny.classList.add("zvyrazneny");
}