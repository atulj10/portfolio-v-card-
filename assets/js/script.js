"use strict";

//projects
const projects = [
  {
    title: "E-Commerce",
    description: `<p>We <strong>built</strong> a robust and secure authentication system designed for both users and administrators, <strong>ensuring</strong> that access to sensitive areas is tightly controlled and that the overall system integrity remains uncompromised. This comprehensive security framework protects user data and maintains trust across the platform.</p>
    <p>&nbsp;&nbsp;&nbsp;To <strong>optimize</strong> the user experience, we developed advanced search functionality and filtering options that allow users to quickly find exactly what they need, <strong>increasing user engagement by 30%</strong>. Alongside this, we <strong>streamlined</strong> the checkout process by integrating Braintree, a reliable payment gateway, which <strong>reduced checkout times by half</strong> and <strong>improved</strong> the efficiency of order management for admins, leading to smoother operations and faster processing.</p>
    <p>Furthermore, we <strong>boosted</strong> overall engagement and revenue by implementing dynamic item suggestions tailored to user preferences and browsing behavior. This feature effectively <strong>drove cross-selling opportunities</strong>, encouraging users to explore related products and enhancing the shopping experience through personalized recommendations.</p>
    `,
    techStack: [
      "React",
      "Context API",
      "JWT",
      "Bcrypt",
      "Braintree",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    category: "Web development",
    image: "./assets/images/project-1.jpg",
    github: "https://github.com/atulj10/ECommerce",
    live: null,
    issue:
      "Live link is not active due the issue with database and server deployment.",
  },
  {
    title: "MPV(lead generator)",
    description: `<p>
  During my internship with a shadow startup, I <strong>developed</strong> a fully responsive MVP website that <strong>enabled</strong> users to <strong>create</strong> personalized AI agents and <strong>train</strong> them using custom datasets. The platform <strong>focused</strong> on empowering individuals to <strong>upload</strong> and <strong>manage</strong> their data efficiently, thereby tailoring AI agents to their specific needs. I <strong>implemented</strong> robust multi-step forms across the site, with all validations <strong>handled</strong> using <strong>Zod</strong> for schema-based type safety and consistency, ensuring a secure and seamless user experience.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Throughout the project, I <strong>built</strong> multiple high-level, complex, and reusable <strong>custom frontend components</strong> to enhance functionality and maintain code scalability. I <strong>leveraged</strong> modern development practices to <strong>optimize</strong> performance, <strong>ensure</strong> responsiveness across devices, and <strong>maintain</strong> UI consistency. This project significantly <strong>strengthened</strong> my skills in building production-grade React applications, working with form validation libraries like Zod, and architecting scalable frontend components tailored to dynamic user inputs.
</p>
`,
    techStack: ["Nextjs", "Shadcn", "Zod", "Recharts", "IonIcons"],
    category: "Internship",
    image: "./assets/images/project-2.png",
    github: null,
    live: null,
    issue:
      "Due to the project's confidentiality, I am unable to share the live hosted link and the GitHub repo at this instance.",
  },
  {
    title: "Figma clone",
    description: `<p>
  This project is a <strong>Figma clone</strong> that <strong>allows</strong> users to <strong>design</strong> interfaces collaboratively with essential features like <strong>object addition</strong>, <strong>shape manipulation</strong>, and <strong>freehand drawing</strong>. The interface is clean, responsive, and user-friendly, offering a seamless experience across different devices. Additionally, users can <strong>export their designs as PDFs</strong>, making it easy to share mockups and prototypes.
</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  The application <strong>leverages Liveblocks</strong> to <strong>implement real-time collaboration</strong>, including features like <strong>live cursor tracking</strong>, <strong>in-app chat</strong>, and <strong>user presence indicators</strong>. These collaborative tools <strong>enhanced efficiency by 50%</strong>, allowing multiple users to work on the same canvas simultaneously with real-time feedback and coordination. This made the platform especially useful for remote teams and live design reviews.
</p>

<p>&nbsp;&nbsp;&nbsp;
  To improve design workflows, the project <strong>introduces powerful utilities</strong> such as <strong>undo</strong>, <strong>redo</strong>, <strong>reset</strong>, and <strong>customizable options</strong> for tools and canvas elements. These features <strong>boosted productivity by 40%</strong> by giving users greater control and flexibility in their design process. Overall, the project demonstrates strong expertise in building interactive, collaborative web applications with a focus on usability, performance, and real-time functionality.
</p>
`,
    techStack: [
      "Nextjs",
      "LiveBlocks",
      "Fabric",
      "Canvas",
      "Shadcn",
      "TailwindCSS",
      "jspdf",
    ],
    category: "Web development",
    image: "./assets/images/project-4.png",
    github: "https://github.com/atulj10/figma_clone",
    live: "https://figma-clone-nu-ten.vercel.app/",
    issue: null,
  },
  {
    title: "Alumnuat(social media)",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Internship",
    image: "./assets/images/project-5.png",
    github: null,
    live: null,
    issue: null,
  },
  {
    title: "Task manager",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web development",
    image: "./assets/images/project-6.png",
    github: "https://github.com/atulj10/Advance-Task-Manager",
    live: "https://advance-task-manager.vercel.app/",
    issue: null,
  },
  {
    title: "Landing page(firm eservices)",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web development",
    image: "./assets/images/project-7.png",
    github: "https://github.com/atulj10/E-Service",
    live: "https://e-service-zeta.vercel.app/",
    issue: null,
  },
];

const projectList = document.getElementById("project-list");

projects.forEach((project, index) => {
  const li = document.createElement("li");
  li.className = "project-item active";
  li.setAttribute("data-filter-item", "");
  li.setAttribute("data-category", project.category.toLowerCase());

  li.innerHTML = `
    <a class="project-container" href="#">
      <figure class="project-img">
        <img style="object-fit: contain" src="${project.image}" alt="${project.title}" loading="lazy" />
      </figure>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-category">${project.category}</p>
    </a>
  `;

  // Add click event to show project details
  li.addEventListener("click", (e) => {
    e.preventDefault();
    showProjectDetails(index);
  });

  projectList.appendChild(li);
});

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
const selectValue = document.querySelector("[data-select-value]");

select.addEventListener("click", function () {
  select.classList.toggle("active");
});

selectItems.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText;
    selectValue.innerText = selectedValue;
    select.classList.remove("active");
    filterFunc(selectedValue);
  });
});

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  selectedValue = selectedValue.toLowerCase().trim();
  filterItems.forEach((item) => {
    const category = item.dataset.category.toLowerCase().trim();
    if (selectedValue === "all" || selectedValue === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen
const filterBtn = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterBtn[0];

filterBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText;
    selectValue.innerText = selectedValue;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

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
    const targetPage = this.innerText.toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        page.style.display = "block";
      } else {
        page.classList.remove("active");
        page.style.display = "none";
      }
    });

    navigationLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    window.scrollTo(0, 0);
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

function showProjectDetails(projectIndex) {
  // Hide all pages
  document.querySelectorAll("[data-page]").forEach((page) => {
    page.style.display = "none";
  });

  // Show project details page
  const projectDetailsPage = document.querySelector(
    '[data-page="project-details"]'
  );
  projectDetailsPage.style.display = "block";

  // Set project details
  const project = projects[projectIndex];
  document.getElementById("project-detail-title").textContent = project.title;
  document.getElementById("project-detail-image").src = project.image;
  document.getElementById("project-detail-image").alt = project.title;
  document.getElementById("project-detail-description").innerHTML =
    project.description;

  // Set tech stack
  const techStackList = document.getElementById("project-tech-stack");
  techStackList.innerHTML = "";
  project.techStack.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techStackList.appendChild(li);
  });

  // Set links
  const githubLink = document.getElementById("project-github-link");
  const liveLink = document.getElementById("project-live-link");

  if (project.github) {
    githubLink.href = project.github;
    githubLink.style.display = "flex";
  } else {
    githubLink.style.display = "none";
  }

  if (project.live) {
    liveLink.href = project.live;
    liveLink.style.display = "flex";
  } else {
    liveLink.style.display = "none";
  }
  const warningBox = document.getElementsByClassName("warning-box")[0];
  const warningText = document.getElementById("warning-text");

  if (project.issue) {
    if (warningBox && warningText) {
      warningText.innerHTML = `<strong>Note:</strong> ${project.issue} Apologies for the inconvenience`;
      warningBox.style.display = "flex";
    }
  } else {
    if (warningBox) {
      warningBox.style.display = "none";
    }
  }
}

function showProjectList() {
  // Hide project details page
  document.querySelector('[data-page="project-details"]').style.display =
    "none";

  // Show projects page
  document.querySelector('[data-page="project"]').style.display = "block";
}
