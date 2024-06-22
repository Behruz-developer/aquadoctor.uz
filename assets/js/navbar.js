document.addEventListener("DOMContentLoaded", function () {
  const navHeight = document.querySelector(".nav").offsetHeight;
  const links = document.querySelectorAll(".nav_link, .nav_link2"); // Navbar va dropdown linklarni tanlaymiz
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
    // Havola ichki bo'limmi yoki tashqi havolami aniqlash
    const href = event.currentTarget.getAttribute("href");
    const isInternalLink = href.startsWith("#");

    if (isInternalLink) {
      event.preventDefault(); // Standart harakatni to'xtatamiz
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const offsetPosition = targetPosition - navHeight - 40; // Navbar pastidan 40px balandlikda joylashadi

        window.scroll({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      if (window.innerWidth < 1200) {
        navList.style.transform = "translateX(-110%)"; // Mobil menyuni yopamiz
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

  // Foydalanuvchi dropdown menyudan tashqari joyga bosganda, faqat mobil versiyada barcha dropdown menyulari yopiladi
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown_toggle') && window.innerWidth < 1200) {
      closeAllDropdowns();
    }
  });
  AOS.init();
});
