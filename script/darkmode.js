var theme = 'light';

function Changetheme() {
  if (theme == 'light') {
    theme = 'dark';
    document.body.style.setProperty('--color1', '#121212');
    document.body.style.setProperty('--color2', '#fff');
    document.getElementById('changetheme').innerHTML = '<i class="bi bi-brightness-high" onclick="Changetheme()"></i>';
    document.getElementById('changetheme2').innerHTML = '<i class="bi bi-brightness-high" onclick="Changetheme()"></i>';
    document.querySelector('.icon').style.filter = 'invert(100%)';
    document.querySelector('.icon2').style.filter = 'invert(100%)';
    document.querySelector('html').style.cursor = 'url(./css/cursorblanc.png), auto';
  } else {
    theme = 'light';
    document.body.style.setProperty('--color1', '#fff');
    document.body.style.setProperty('--color2', '#000');
    document.getElementById('changetheme').innerHTML = '<i class="bi bi-moon" onclick="Changetheme()"></i>';
    document.getElementById('changetheme2').innerHTML = '<i class="bi bi-moon" onclick="Changetheme()"></i>';
    document.querySelector('.icon').style.filter = 'invert(0%)';
    document.querySelector('.icon2').style.filter = 'invert(0%)';
    document.querySelector('html').style.cursor = 'url(./css/cursornoir.png), auto';

  }

}