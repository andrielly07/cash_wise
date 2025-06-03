    // Menu 3 pontinhos
    const menuBtn = document.querySelector(".menu-pontinhos button");
    const menuSuspenso = document.getElementById("menu-suspenso");
  
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuSuspenso.classList.toggle("mostrar");
    });
  
    document.addEventListener("click", (e) => {
      if (!menuSuspenso.contains(e.target) && !menuBtn.contains(e.target)) {
        menuSuspenso.classList.remove("mostrar");
      }
    });