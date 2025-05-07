document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = [
      {
        title: "Missão",
        text: "Nossa missão é proporcionar educação financeira acessível e envolvente para jovens e pré-adolescentes, incentivando hábitos saudáveis de consumo e poupança desde cedo.",
        image: "CashWise-Sobre/missao.jpg"
      },
      {
        title: "Visão",
        text: "Ser a principal plataforma de gestão financeira para jovens na América Latina, reconhecida por sua abordagem educativa, criativa e inclusiva.",
        image: "CashWise-Sobre/visao.jpg"
      },
      {
        title: "Valores",
        text: "Acreditamos na educação, na transparência e no poder da tecnologia como ferramentas de transformação financeira e social. Respeito, inclusão e inovação guiam tudo o que fazemos.",
        image: "CashWise-Sobre/valores.jpg"
      },
    ];
  
    let index = 0;
    const titleEl = document.querySelector("#carousel-titulo");
    const textEl = document.querySelector("#carousel-texto");
    const imageEl = document.querySelector("#carousel-imagem");
    const indicatorsContainer = document.querySelector(".carousel-indicadores");
  
    function updateCarousel() {
      const item = carouselItems[index];
      titleEl.textContent = item.title;
      textEl.textContent = item.text;
      imageEl.src = item.image;
      imageEl.alt = `Imagem ${item.title}`;
  
      const buttons = indicatorsContainer.querySelectorAll("button");
      buttons.forEach((btn, i) => {
        btn.innerHTML = i === index ? "●" : "○";
      });
    }
  
    // Limpa e recria os indicadores
    indicatorsContainer.innerHTML = "";
    carouselItems.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.innerHTML = i === index ? "●" : "○";
      btn.addEventListener("click", () => {
        index = i;
        updateCarousel();
      });
      indicatorsContainer.appendChild(btn);
    });
  
    setInterval(() => {
      index = (index + 1) % carouselItems.length;
      updateCarousel();
    }, 5000);
  
    updateCarousel();
  
    // Botão "Conheça o Time"
    const scrollBtn = document.querySelector(".botao-scroll");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", () => {
        document.getElementById("equipe").scrollIntoView({ behavior: "smooth" });
      });
    }
  
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
  });
  