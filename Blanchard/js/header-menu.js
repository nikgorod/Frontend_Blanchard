document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__menu-button").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".dropdown-container");
      
      document.querySelectorAll(".header__menu-button").forEach(el => {
        if (el != btn) {
          el.classList.remove("header__menu-button-active");
        }
      });
      
      document.querySelectorAll(".dropdown-container").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("dropdown-container_active");
        }
      })
      dropdown.classList.toggle("dropdown-container_active");
      btn.classList.toggle("header__menu-button-active")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__menu-list")) {
      document.querySelectorAll(".dropdown-container").forEach(el => {
          el.classList.remove("dropdown-container_active");
      })
       document.querySelectorAll(".header__menu-button").forEach(el => {
          el.classList.remove("header__menu-button-active");
      });
    }
  })
  })