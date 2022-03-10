var outils = [
    "Javascript vanilla",
    "Wordpress",
    "React.js",
    "Laravel"
]

outilsIndex = 0;
outilsSpan = document.getElementById("outils"); 

function AfficheOutils(){
    if(outilsIndex < outils.length){
        outilsSpan.style.transform = "translateY(0)";
        outilsSpan.innerText = outils[outilsIndex];
        outilsSpan.style.opacity = "1";
        outilsIndex ++
    }else{
        outilsIndex = 0;
        AfficheOutils()
    }

}

function EffaceOutils(){
    outilsSpan.style.transform = "translateY(-15px)";
    outilsSpan.style.opacity = "0";
    setTimeout(AfficheOutils,500)
}

AfficheOutils();

setInterval(EffaceOutils , 2000);

