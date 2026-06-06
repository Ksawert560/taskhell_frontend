// function that checks if THEME exists in local storage and changing data-theme attribute in <body>
function themeSwitcher(){
    if (typeof window === 'undefined') return;

    const body = document.getElementsByTagName("body");
    if(localStorage.getItem("THEME")){
      const currentTheme = localStorage.getItem("THEME");
      body[0].setAttribute("data-theme", currentTheme)
    }
    else{
      localStorage.setItem("THEME", "light");
      const currentTheme = localStorage.getItem("THEME")
      body[0].setAttribute("data-theme", currentTheme)
    }
}

export default themeSwitcher;