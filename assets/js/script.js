"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Create falling stars
function createStars() {
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars-container";
  document.body.appendChild(starsContainer);

  // Create 50 stars
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random properties for each star
    const size = Math.random() * 5 + 1;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 10;
    const left = Math.random() * 100;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${left}%`;
    star.style.top = `-10vh`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    // Random twinkle effect
    if (Math.random() > 0.7) {
      star.style.boxShadow = `0 0 ${Math.random() * 5 + 5}px white`;
    }

    starsContainer.appendChild(star);
  }
}

// Call the function when the page loads
window.addEventListener("load", createStars);



//projects
const projects = [
  {
    title: "E-Commerce",
    category: "Web development",
    image: "./assets/images/project-1.jpg",
    github: "https://github.com/atulj10/ECommerce",
    live: null
  },
  {
    title: "MPV(lead generator)",
    category: "Web development",
    image: "./assets/images/project-2.png",
    github: null,
    live: null
  },
  {
    title: "Figma clone",
    category: "Web development",
    image: "./assets/images/project-4.png",
    github: "https://github.com/atulj10/figma_clone",
    live: "https://figma-clone-nu-ten.vercel.app/"
  },
  {
    title: "Alumnuat(social media)",
    category: "Web development",
    image: "./assets/images/project-5.png",
    github: null,
    live: null
  },
  {
    title: "Task manager",
    category: "Web development",
    image: "./assets/images/project-6.png",
    github: "https://github.com/atulj10/Advance-Task-Manager",
    live: "https://advance-task-manager.vercel.app/"
  },
  {
    title: "Landing page(firm eservices)",
    category: "Web development",
    image: "./assets/images/project-7.png",
    github: "https://github.com/atulj10/E-Service",
    live: "https://e-service-zeta.vercel.app/"
  }
];

const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.className = "project-item active";
    li.setAttribute("data-filter-item", "");
    li.setAttribute("data-category", project.category.toLowerCase());

    li.innerHTML = `
      <a class="project-container" href="#">
        <figure class="project-img">
          ${project.live ? `
            <div onclick="window.location.href='${project.live}'" class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>` : ''
          }
          ${project.github ? `
            <div onclick="window.location.href='${project.github}'" class="project-item-icon-box2 project-item-icon-box">
              <ion-icon name="logo-github"></ion-icon>
            </div>` : ''
          }
          <img style="object-fit: contain" src="${project.image}" alt="${project.title}" loading="lazy" />
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    `;
    
    projectList.appendChild(li);
  });