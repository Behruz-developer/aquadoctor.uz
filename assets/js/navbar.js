document.addEventListener("DOMContentLoaded", function () {
  const navHeight = document.querySelector(".nav").offsetHeight;
  const links = document.querySelectorAll(".nav_link, .lang-button");
  const navList = document.querySelector(".nav_list");
  const openBtn = document.querySelector(".open_btn");
  const closeBtn = document.querySelector(".close_btn");
  const dropdowns = document.querySelectorAll(".dropdown_toggle");

  function closeAllDropdowns() {
    if (window.innerWidth < 1200) {
      document.querySelectorAll('.dropdown_content').forEach(function (content) {
        content.style.display = 'none';
      });
    }
  }

  function smoothScroll(event) {
    
    const href = event.currentTarget.getAttribute("href");
    const isInternalLink = href.startsWith("#");

    if (isInternalLink) {
      event.preventDefault(); 
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const offsetPosition = targetPosition - navHeight - 40; 

        window.scroll({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      if (window.innerWidth < 1200) {
        navList.style.transform = "translateX(-110%)"; 
        closeAllDropdowns();
      }
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  openBtn.addEventListener("click", function () {
    navList.style.transform = "translateX(0)";
  });

  closeBtn.addEventListener("click", function () {
    navList.style.transform = "translateX(-110%)";
  });

  window.onscroll = function () {
    var nav = document.querySelector(".nav");
    if (window.pageYOffset > 1) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      navList.style.transform = "";
    } else {
      navList.style.transform = "translateX(-110%)";
    }
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown_toggle') && window.innerWidth < 1200) {
      closeAllDropdowns();
    }
  });
  const langButtons = document.querySelectorAll(".lang-button");
  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (window.innerWidth < 1200) {
        navList.style.transform = "translateX(-110%)";
      }
    });
  });
  AOS.init();
  
});
