//changer la class active des lien du menu latéral
//----------------------------------------------------
function changeactive(id,scrollTarget=0){
    //1.retirer les liens
    document.querySelectorAll('.lien').forEach(elem =>
        elem.classList.remove('lien-actif'));
    //2.changer le lien actif
    document.querySelectorAll('.lien')[id].classList.add('lien-actif');
    //3.scroll
    window.scrollTo(0,scrollTarget);
}

//mettre a jour les liens au scroll
window.addEventListener('scroll', fctScroll);

function fctScroll() {
  if (scrollY < 686) {
    //1.retirer les liens
    document.querySelectorAll('.lien').forEach(elem =>
        elem.classList.remove('lien-actif'));
    //2.changer le lien actif
    document.querySelectorAll('.lien')[0].classList.add('lien-actif');
  } else if (scrollY < 1600 && scrollY >= 686){
    //1.retirer les liens
    document.querySelectorAll('.lien').forEach(elem =>
        elem.classList.remove('lien-actif'));
    //2.changer le lien actif
    document.querySelectorAll('.lien')[1].classList.add('lien-actif');
  }else{
    //1.retirer les liens
    document.querySelectorAll('.lien').forEach(elem =>
        elem.classList.remove('lien-actif'));
    //2.changer le lien actif
    document.querySelectorAll('.lien')[2].classList.add('lien-actif');  
  }
}
//-----------------------------------------------------------------

var theme = 'light';

function Changetheme(){
    if(theme == 'light'){
         theme = 'dark' ;
        document.body.style.setProperty('--color-one-light', '#b13126');
        document.body.style.setProperty('--color-two-light', '#F0E0C9');
        document.body.style.setProperty('--bglight', '#150b0e');
        render.options.background = '#150b0e';
        document.getElementById('changetheme').innerHTML='<i class="bi bi-brightness-high"></i>';
    }else{
         theme = 'light' ;
        document.body.style.setProperty('--color-one-light', '#150b0e');
        document.body.style.setProperty('--color-two-light', '#b13126');
        document.body.style.setProperty('--bglight', '#F0E0C9');
        render.options.background = '#F0E0C9';
        document.getElementById('changetheme').innerHTML='<i class="bi bi-moon"></i>';  
    }
    
}



//changer la class active et le contenu partie projets
//----------------------------------------------------
function changeactiveProjet(id ,categorie ){
    //1.retirer les liens
    document.querySelectorAll('.categorieProjet').forEach(elem =>
        elem.classList.remove('categorieProjet-actif'));
    //2.changer le lien actif
    document.querySelectorAll('.categorieProjet')[id].classList.add('categorieProjet-actif');
    //3.mettre a jour le dom
   
    displayProject(categorie)
}

function displayProject(categorie){
    listeProjets = "";
    document.getElementById("contenu").innerHTML="";
    projets[categorie].forEach(elem => {
        listeProjets += "<div class='carteProjet'>" ;
        listeProjets += "<img src="+elem.Image+" >";
        listeProjets += "<div class='descriptionProjet'>";
        listeProjets += "<h2>"+elem.Nom+"</h2>";
        listeProjets += "<p class='display-7'>"+elem.Description+"</p>";
        listeProjets += "</div>";
        listeProjets += "<div class='lienProjet d-flex'>";
        elem.lien_code_source == null ? listeProjets += "<a class='lienProjetManquant' href='' ><i class='bi bi-code-slash'></i> <br> <p class='display-7'>Le code source est privé</p> </a>":listeProjets += "<a class='lienProjetdispo' href="+elem.lien_code_source+" target='_blank' ><i class='bi bi-code-slash'></i> <br> <p class='display-7'>Voir le code source</p> </a>";
        listeProjets += "<a class='lienProjetdispo' href="+elem.lien+" target='_blank'><i class='bi bi-eye-fill'></i> <br> <p class='display-7'>Voir le projet</p></a>";
        listeProjets += "</div>";

        document.getElementById("contenu").innerHTML += listeProjets;
        listeProjets = "";
   })
  }
//initialiser le dom
  displayProject('webApp')

