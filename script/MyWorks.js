const projets = {
    webApp : [
        {
            Nom:"French digital institute",
            Id:"Ifran",
            Description:"I redesigned my school's website by integrating an authentication system with firebase for students",
            Image:"img/ifran.png",
            lien_code_source:null,
            lien:"https://ifran.firebaseapp.com/",
            date:"May 2022"
        },
        {
            Nom:"MathKid",
            Id:"MathKid",
            Description:"Application for teaching math to 9-12 year olds kids",
            Image:"img/mathkid.PNG",
            lien_code_source:"https://github.com/malickruru/MathKid",
            lien:"https://malickruru.github.io/MathKid/",
            date:"dec 2022"
        },
        {
            Nom:"7develop.com",
            Id:"7develop",
            Description:"IT agency website",
            Image:"img/7develop.PNG",
            lien_code_source:null,
            lien:"https://7develop.com",
            date:"aug 2021"
        },
        {
            Nom:"7goto.net",
            Id:"7goto",
            Description:"Home page of an online support agency",
            Image:"img/7goto.PNG",
            lien_code_source:null,
            lien:"https://7goto.net",
            date:"sep 2021"
        },
        {
            Nom:"Qr code scanner",
            Id:"Qrcodescanner",
            Description:"Application to scan a qr code",
            Image:"img/qrcode.jpg",
            lien_code_source:"https://github.com/malickruru/qrcode_lecteur",
            lien:"https://7develop.com/2021/7scanning2021v01/wbqr.htm",
            date:"april 2021"
        },
        {
            Nom:"Ruru-css",
            Id:"ruru-css",
            Description:"Release of a css framework on npm paste: npm i ruru-css on console to install it",
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
            Description:"Guess the hidden word",
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
      elem.lien_code_source == null ? listeProjets += "<a href="+elem.lien+" target='_blank'>See more</a>" : listeProjets += "<a href="+elem.lien+" target='_blank'>See more</a> | <a href="+elem.lien_code_source+" target='_blank'>See the source code</a>";
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