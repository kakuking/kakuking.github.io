const body = document.body;
const navbar = document.getElementById("navbar");
const button = document.getElementById("button");
var theme = localStorage.getItem('Storagetheme'); //true is light mode

// theme = localStorage.getItem('theme');
if(theme != null){
  if(theme == 'light'){
    body.classList.replace('dark_mode', 'light_mode');
    navbar.classList.replace('dark_mode', 'light_mode');
    button.classList.replace('dark', 'light');

  } else {
    body.classList.replace('light_mode', 'dark_mode');
    navbar.classList.replace('light_mode', 'dark_mode');
    button.classList.replace('light', 'dark');
  }
}

button.onclick = () => {
  if(theme != 'light'){
    body.classList.replace('dark_mode', 'light_mode');
    navbar.classList.replace('dark_mode', 'light_mode');
    button.classList.replace('dark', 'light');

    localStorage.setItem('Storagetheme', 'light');
    theme = 'light';

  } else {
    body.classList.replace('light_mode', 'dark_mode');
    navbar.classList.replace('light_mode', 'dark_mode');
    button.classList.replace('light', 'dark');
    theme = 'dark';
    localStorage.setItem('Storagetheme', 'dark');
  }
}
