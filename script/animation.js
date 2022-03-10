
//console.log(document.getElementById('Apropos').childNodes)
var accueilDisplay = true;
var projetDisplayed = false;
var proposDisplayed = false;


function display(){
    
    projetDisplayed == false ? document.querySelector('#projet').style.opacity="0":document.querySelector('#projet').style.opacity="1";
    proposDisplayed == false ? document.querySelector('#Apropos').style.opacity="0":document.querySelector('#Apropos').style.opacity="1";
}

display()

var delay = 100;
document.getElementById('accueil').childNodes.forEach(elem => {
    if(elem.nodeName == "DIV"){
    elem.classList.add('Fadeup');
    elem.style.animationDelay = delay+'ms';
    delay += 100;}
})



//calculer le padding
function padding(elem,previousElem){
    pt=(getComputedStyle(document.querySelector(elem)).paddingTop).replace('px', '');
    pb=(getComputedStyle(document.querySelector(previousElem)).paddingBottom).replace('px', '');
    return Math.floor(pt)+Math.floor(pb);
}

function LimiteEcran(){
   return scrollY + window.innerHeight;
}

//console.log( LimiteEcran())

function animeAuScroll(){
    let i =1;
    if((LimiteEcran() > document.getElementById('projet').offsetTop+padding('#projet','#accueil')) && (LimiteEcran() < document.getElementById('Apropos').offsetTop+padding('#Apropos','#projet'))){
        //console.log('ok pour projet');
        document.getElementById('projet').childNodes.forEach(elem => {
            if(elem.nodeName == "DIV"){
            elem.classList.add('Fadeup');
            }
        })
        projetDisplayed = true;
        display();
    }else if(LimiteEcran() > document.getElementById('Apropos').offsetTop+padding('#Apropos','#projet')  ){
        //console.log('ok pour apropos');
        document.getElementById('Apropos').childNodes.forEach(elem => {
            if(elem.nodeName == "DIV"){
            i%2 == 0 ? elem.classList.add('FadeLeft'):elem.classList.add('FadeRight');
            i++
            }
        })
        proposDisplayed = true;
        display();
    }

    // console.log(LimiteEcran())
    // console.log(document.getElementById('Apropos').offsetTop+padding('#Apropos','#projet'));

}

document.addEventListener("scroll",animeAuScroll);

