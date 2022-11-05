const projets = {
    webApp : [
        {
            Nom:"Institut français du numérique",
            Id:"Ifran",
            Description:"J'ai refait le site web de mon école en intégrant un système d'authentfication avec firebase pour les étudiant",
            Image:"img/ifran.png",
            lien_code_source:null,
            lien:"https://ifran.firebaseapp.com/",
            date:"Mai 2022"
        },
        {
            Nom:"MathKid",
            Id:"MathKid",
            Description:"Application permettant d'enseigner les maths au 9-12 ans",
            Image:"img/mathkid.PNG",
            lien_code_source:"https://github.com/malickruru/MathKid",
            lien:"https://malickruru.github.io/MathKid/",
            date:"dec 2022"
        },
        {
            Nom:"7develop.com",
            Id:"7develop",
            Description:"Site web d'une agence IT",
            Image:"img/7develop.PNG",
            lien_code_source:null,
            lien:"https://7develop.com",
            date:"aout 2021"
        },
        {
            Nom:"7goto.net",
            Id:"7goto",
            Description:"Page d'accueil d'une agence d'assistance en ligne",
            Image:"img/7goto.PNG",
            lien_code_source:null,
            lien:"https://7goto.net",
            date:"sep 2021"
        },
        {
            Nom:"Ruru-css",
            Id:"ruru-css",
            Description:"Publication d'un framework css sur npm faire : npm i ruru-css pour installer",
            Image:"img/npm.png",
            lien_code_source:'https://github.com/malickruru/rurucss',
            lien:"https://www.npmjs.com/package/ruru-css",
            date:"Nov 2022"
        }
    ],
    jeux: [
        {
            Nom:"Wordle",
            Id:"Wordle",
            Description:"Deviner un le mot caché",
            Image:"img/wordle.jpg",
            lien_code_source:"https://github.com/malickruru/wordle",
            lien:"https://malickruru.github.io/wordle/",
            date:"jan 2022"
        }
    ]
}

//changer la class active et le contenu partie projets
//----------------------------------------------------
function changeactiveProjet(id, categorie) {
    //1.retirer les liens
    document.querySelectorAll('.categorie').forEach(elem =>
      elem.classList.remove('categorie-active'));
    //2.changer le lien actif
    document.querySelectorAll('.categorie')[id].classList.add('categorie-active');
    //3.mettre a jour le dom
  
    displayProject(categorie)
  }
  
  function displayProject(categorie) {
    listeProjets = "";
    document.getElementById("contenu").innerHTML = "";
    projets[categorie].forEach(elem => {
      listeProjets += "<div class='projectItem' >";
      listeProjets += "<div class='projectImage' id="+elem.Id+">";
      listeProjets += "</div>";
      listeProjets += "<div class='projectTitre'>";
      listeProjets += "<p>"+elem.date+"</p>";
      listeProjets += "<h1 class='fontsize3'>"+elem.Nom+"</h1>";
      listeProjets += "<div class='projetDescription'>";
      listeProjets += "<p>"+elem.Description+"</p>";
      elem.lien_code_source == null ? listeProjets += "<a href="+elem.lien+" target='_blank'>Voir le projet</a>" : listeProjets += "<a href="+elem.lien+" target='_blank'>Voir le projet</a> | <a href="+elem.lien_code_source+" target='_blank'>Voir le code source</a>";
      listeProjets += "</div>";
      listeProjets += "</div>";
      listeProjets += "</div>";
      document.getElementById("contenu").innerHTML += listeProjets;
      document.getElementById(elem.Id).style.backgroundImage = "url("+elem.Image+")";
      listeProjets = "";
    })
    projets[categorie].length == 1 ? carousel(false):carousel(true);
    
    // $('.owl-carousel').trigger('refresh.owl.carousel');
  }
  //initialiser le dom
  displayProject('webApp')