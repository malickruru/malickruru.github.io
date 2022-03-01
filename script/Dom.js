const main = document.createElement("div");
main.classList.add('main')  ;

//style
let maintop = document.getElementById('header').offsetHeight;
let mainleft = document.getElementById('Menu').offsetWidth;
let bodywidth = document.body.offsetWidth;
let bodyheight = document.body.offsetHeight;
//console.log(bodyleft);
main.style.top = String(1.5*maintop)+"px";
main.style.left = String(1.5*mainleft)+"px";
main.style.width = String(bodywidth - 2*mainleft)+"px";
main.style.height = String(bodyheight - 2*maintop)+"px";
document.getElementById('canvas-wrap').appendChild(main);



function changeactive(id){
    //1.retirer les liens
    document.querySelectorAll('.lien').forEach(elem =>
        elem.classList.remove('lien-actif'));
    //2.changer le lien actif
    console.log(document.querySelectorAll('.lien')[0]);
    document.querySelectorAll('.lien')[id].classList.add('lien-actif');
    //3.mettre a jour le dom
    majDom(id);    
}

//---------------------------------------------------
//les diffentes parties
//---------------------------------------------------

const contenu = [
    {
        inner_html : "<h1>RUBENS</h1><h1>MENSAH</h1><p>Developpeur web</p>",
        class_list : ["Accueil"]
    },//section compétence
    {
        card:[
            {
                titre:"Compétences Frontend",
                competence:["<i class='fa-brands fa-html5' style='color: rgb(255, 51, 0);'></i> HTML <br>",
                            "<i class='fa-brands fa-css3' style='color: rgb(53, 147, 255);'></i> css <br>",
                            "<i class='fa-brands fa-js' style='color: rgb(255, 242, 53);' ></i> javascript <br>",
                            "<i class='fa-brands fa-react'></i> react.js <br>"
                            ]
            },
            {
                titre : "Compétences Backend",
                competence:[
                    "<i class='fa-brands fa-php' style='color: rgb(53, 147, 255);'></i> <br>",
                    "<img src='./images/mysql.png' alt='mysql'> Mysql</div> <br>",
                    "<i class='fa-brands fa-laravel'></i> Laravel "
                ]
            }
        ],
        inner_html : "",
        class_list : ["flex-center"]
    },
    {
        inner_html : "<h1>RUBENS</h1><h1>MENSAH</h1><p>Projets</p>",
        class_list : ["flex-center"]
    },
    {
        inner_html : "<h1>RUBENS</h1><h1>MENSAH</h1><p>Mon parcours</p>",
        class_list : ["flex-center"]
    },
    {
        inner_html : "<h1>RUBENS</h1><h1>MENSAH</h1><p>Contact</p>",
        class_list : ["flex-center","flex-column"]
    },
    {
        inner_html : "<h1>RUBENS</h1><h1>MENSAH</h1><p>bonus</p>",
        class_list : ["flex-center","flex-column"]
    }
]

const every_class = ["flex-center","flex-column","Accueil"];
//---------------------------------------------------
//mise à jour du dom
//---------------------------------------------------

function majDom(id){
    main.innerHTML= contenu[id].inner_html;
    every_class.forEach(elem =>{
        main.classList.remove(elem)
    });
    contenu[id].class_list.forEach(elem =>{
        main.classList.add(elem)
    });
}

//---------------------------------------------------
//différent element du dom
//---------------------------------------------------




//functions initiale
majDom(0);
SectionCompetence();

function SectionCompetence(){
    let card = "";
    
    
    contenu[1].card.forEach(elem => {
        card = "<div>";
        card += "<div><h2>"+elem.titre+"</h2></div>";
        card += "<div>";
        elem.competence.forEach(skills => {
            card += skills
        });
        card+="</div></div>";
        contenu[1].inner_html += card
    });
}