let circle = document.getElementById('cursorCircle');

function rayon(){
  return (circle.offsetWidth / 2) - 5;
} 


const onMouseMove = (e) =>{
  circle.style.left = (e.pageX - rayon()) + 'px';
  circle.style.top = (e.pageY - rayon()) + 'px';
  
}
document.addEventListener('mousemove', onMouseMove);


// mouse hover & mouse out
const MouseHover = () =>{
  circle.style.width = '20px';
  circle.style.height = '20px';
  circle.style.backgroundColor = '#009b8198';
}

const MouseOut = () =>{
  circle.style.width = '50px';
  circle.style.height = '50px';
  circle.style.backgroundColor = 'transparent';
  circle.style.borderColor = 'var(--color2)';
}

//ecouteur 
//.btn



document.querySelectorAll('.MouverHoverClass').forEach(elem => {
  elem.addEventListener("mouseover", MouseHover);
 elem.addEventListener("mouseout", MouseOut);
})




//changetheme

const MouseHoverNone = () =>{
  circle.style.width = '0px';
  circle.style.height = '0px';
  circle.style.backgroundColor = '#009b8198';
}


document.querySelector('#changetheme').addEventListener("mouseover", MouseHoverNone);
document.querySelector('#changetheme').addEventListener("mouseout", MouseOut);

//photo

const MouseHoverPhoto = () =>{
  circle.style.backgroundColor = '#ea00ff94';
  circle.style.borderRadius = '0%';
}


const MouseOutPhoto = () =>{
  circle.style.borderRadius = '50%'; 
  circle.style.backgroundColor = 'transparent';
}

document.querySelector('.PhotoHover').addEventListener("mouseover", MouseHoverPhoto);
document.querySelector('.PhotoHover').addEventListener("mouseout", MouseOutPhoto);

//projectItem
document.querySelectorAll('.projectItem').forEach(elem => {
  elem.addEventListener("mouseover", MouseHover);
 elem.addEventListener("mouseout", MouseOut);
})


//footer
const MouseHoverfooter = () =>{
  
  circle.style.borderColor = '#fff';
}


document.querySelector('footer').addEventListener("mouseover", MouseHoverfooter);
document.querySelector('footer').addEventListener("mouseout", MouseOut);

//footerIcon

const MouseHoverfooterIcon = () =>{
  circle.style.width = '20px';
  circle.style.height = '20px';
}


document.querySelectorAll('.footerIconA').forEach(elem => {
  elem.addEventListener("mouseover", MouseHoverfooterIcon);
 elem.addEventListener("mouseout", MouseOut);
})