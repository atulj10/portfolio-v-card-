"use strict";

// Skill data
const skills = [
  { name: "React", icon: "logo-react" },
  { name: "Laravel", icon: "logo-laravel" },
  { name: "Node.js", icon: "logo-nodejs" },
  { name: "GitHub", icon: "logo-github" },
  { name: "Git", icon: "git-branch-outline" },
  { name: "SQL", icon: "server-outline" },
  { name: "Firebase", icon: "logo-firebase" },
  { name: "Clerk", icon: "code" },
  { name: "HTML", icon: "logo-html5" },
  { name: "C", icon: "code" },
  { name: "C++", icon: "code" },
  { name: "CSS", icon: "logo-css3" },
  { name: "JavaScript", icon: "logo-javascript" },
  { name: "Python", icon: "logo-python" },
  { name: "CLI", icon: "terminal-outline" },
  { name: "Security", icon: "shield-checkmark-outline" },
];

// DOM elements
const carousel = document.querySelector(".skills-carousel");
const indicatorContainer = document.querySelector(".skills-indicator");

// Configuration
const config = {
  small: { cols: 2, rows: 3, breakpoint: 480 }, // 6 skills per group
  medium: { cols: 3, rows: 3, breakpoint: 768 }, // 9 skills per group
  large: { cols: 5, rows: 2, breakpoint: 992 }, // 10 skills per group
};

let currentIndex = 0;
let autoScrollInterval;
let groupCount = 0;
let resizeTimeout;
let isScrolling = false;

// Initialize carousel
function initCarousel() {
  // Clear existing content
  carousel.innerHTML = "";
  indicatorContainer.innerHTML = "";

  // Determine current screen size and group size
  const screenWidth = window.innerWidth;
  let groupSize;

  if (screenWidth >= config.large.breakpoint) {
    groupSize = config.large.cols * config.large.rows;
  } else if (screenWidth >= config.medium.breakpoint) {
    groupSize = config.medium.cols * config.medium.rows;
  } else {
    groupSize = config.small.cols * config.small.rows;
  }

  // Create skill groups
  groupCount = Math.ceil(skills.length / groupSize);

  for (let i = 0; i < groupCount; i++) {
    const group = document.createElement("div");
    group.className = "skills-group";

    const skillsInGroup = skills.slice(i * groupSize, (i + 1) * groupSize);

    skillsInGroup.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = `
        <ion-icon name="${skill.icon}"></ion-icon>
        <p>${skill.name}</p>
      `;
      group.appendChild(card);
    });

    carousel.appendChild(group);

    // Create indicator
    const indicator = document.createElement("span");
    indicator.className = "indicator-line";
    if (i === 0) indicator.classList.add("active");
    indicatorContainer.appendChild(indicator);
  }

  // Reset to first group when reinitializing
  currentIndex = 0;
  carousel.scrollTo({ top: 0, behavior: "auto" });

  // Setup auto-scroll
  setupAutoScroll();
}

// Setup auto-scroll functionality
function setupAutoScroll() {
  if (autoScrollInterval) clearInterval(autoScrollInterval);

  autoScrollInterval = setInterval(() => {
    if (!isScrolling && document.hasFocus()) {
      currentIndex = (currentIndex + 1) % groupCount;
      scrollToGroup(currentIndex);
    }
  }, 3000);

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoScrollInterval);
  });

  // Resume on mouse leave
  carousel.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
      if (!isScrolling) {
        currentIndex = (currentIndex + 1) % groupCount;
        scrollToGroup(currentIndex);
      }
    }, 3000);
  });

  // Manual scroll updates indicators
  carousel.addEventListener("scroll", handleScroll);
}

function scrollToGroup(index) {
  isScrolling = true;
  const scrollAmount = index * carousel.clientHeight;
  carousel.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });

  updateIndicators();

  // Reset scrolling flag after animation completes
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

function handleScroll() {
  if (isScrolling) return;

  const scrollPosition = carousel.scrollTop;
  const groupHeight = carousel.clientHeight;
  const newIndex = Math.round(scrollPosition / groupHeight);

  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updateIndicators();
  }
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator-line");
  indicators.forEach((line, i) => {
    line.classList.toggle("active", i === currentIndex);
  });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", initCarousel);

// Debounced resize handler
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initCarousel();
  }, 200);
});

// Pause when tab is not visible
// document.addEventListener("visibilitychange", () => {
//   if (document.hidden) {
//     clearInterval(autoScrollInterval);
//   } else {
//     setupAutoScroll();
//   }
// });

//projects
const projects = [
  {
    title: "Finance Software(powered by Gemini)",
    description: `<p>
  This project is a robust <strong>multi-account financial management system</strong> that <strong>enables</strong> users to <strong>track transactions</strong>, <strong>monitor spending in real time</strong>, and <strong>manage budgets</strong> across all  <strong>different accounts</strong>. The system <strong>streamlines financial organization</strong> by offering centralized access to all account activities and <strong>provides clarity</strong> into user's financial behavior through intuitive interfaces.
</p>
<p>

 &nbsp;&nbsp;&nbsp;&nbsp;  To enhance data visibility, the platform <strong>features an interactive dashboard</strong> that <strong>visualizes financial analytics</strong> using dynamic charts and graphs. Users can <strong>analyze spending patterns</strong>, <strong>track budget utilization</strong>, and <strong>gain insights</strong> into their financial health with ease. Components like <strong>Recharts</strong> and <strong>TailwindCSS</strong> were <strong>utilized and customized</strong> to deliver a clean, responsive, and informative user experience.
</p>
<p>
  The system also <strong>implements automated email notifications</strong> using <strong>Inngest</strong> to deliver monthly reports and <strong>trigger alerts at 80% budget usage</strong>. To ensure secure and scalable access, the API layer was <strong>protected using Arcjet</strong> for <strong>rate limiting</strong> and <strong>bot detection</strong>. Authentication and user management were handled with <strong>Clerk</strong>, and the backend was <strong>built using Next.js and Prisma</strong> for high-performance database interactions. The integration of <strong>Gemini API</strong> further extends the system’s analytical capabilities, offering smart recommendations and insights.
</p>
`,
    techStack: [
      "Nextjs",
      "Prisma",
      "Inngest",
      "Arcjet",
      "Clerk",
      "Gemini API",
      "Recharts",
      "Shadcn",
      "TailwindCSS",
    ],
    category: "AI",
    image: "./assets/images/welth.jpg",
    github: "https://ai-finance-platform-bay.vercel.app/",
    live: "https://ai-finance-platform-bay.vercel.app/",
    issue: null,
  },

  {
    title: "Smart Document Assistant",
    description: `<p>
  This project <strong>harnesses the power of Gemini Flash architecture</strong> and <strong>Langchain Embedding</strong> to <strong>extract, analyze, and synthesize</strong> critical information from a wide range of document formats, including <strong>PDFs, Excel sheets, and website links</strong> into <strong>Vector embedding</strong>, which is then used to search for the required information related to the user's query.. Users can <strong>upload their documents</strong> and instantly <strong>generate a personalized AI chatbot</strong> capable of understanding and responding to queries based on the uploaded content. The system <strong>streamlines information retrieval</strong>, making document-based Q&A <strong>fast, intuitive, and efficient</strong>.
</p>
<p>
  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; It <strong>orchestrates sophisticated no-code deployment workflows</strong> that <strong>customize and optimize conversational experiences</strong> for users. By <strong>integrating LangChain with Gemini API</strong>, the platform <strong>enables real-time, context-aware responses</strong> that evolve with user input. Whether for corporate documentation, research papers, or data-heavy spreadsheets, the chatbot <strong>delivers high-quality, contextually accurate answers</strong> without requiring technical expertise from the user.
</p>
<p>
  The backend <strong>leverages Next.js and MongoDB</strong>, with <strong>MongoDB Vector Search</strong> powering intelligent document indexing and retrieval. The system <strong>revolutionizes data interaction</strong> by <strong>using real-time analytics</strong> to <strong>enhance response accuracy</strong> and <strong>accelerate knowledge discovery</strong>. With its seamless integration of cutting-edge AI technologies and a user-centric interface, this project stands as a next-gen tool for <strong>document-driven conversational intelligence</strong>.
</p>

`,
    techStack: [
      "Nextjs",
      "MongoDB",
      "LangChain",
      "MongoDB Vector Search",
      "NextAuth",
      "Gemini API",
      "Shadcn",
      "TailwindCSS",
    ],
    category: "AI",
    image: "./assets/images/project-11.png",
    github: "https://github.com/atulj10/ai-agent",
    live: "https://ai-agent-gmwu.vercel.app/",
    issue: "The project is still in progress so some things might not work.",
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
    title: "Dr Car",
    description: `<p>
  This project is a feature-rich <strong>customer-facing mobile application</strong> developed for both <strong>iOS and Android platforms</strong>, catering to the automotive domain. The platform <strong>enables users to register and authenticate</strong> securely, supporting different user types such as <strong>Buyers</strong> and <strong>Sellers</strong>. Registration is mandatory to <strong>purchase vehicles</strong> or <strong>request services</strong>, with mechanisms like <strong>email/OTP verification</strong> to ensure account security. Sellers undergo additional verification steps, including <strong>document and phone validation</strong>, before they can <strong>list vehicles for sale</strong> with complete details like make, model, mileage, pricing, and images.
</p>

<p>
  Buyers can <strong>search and filter car listings</strong> based on parameters like <strong>make, model, location, price range, and mileage</strong>, with each listing displaying comprehensive specifications, condition, and history. The app also <strong>integrates secure payment options</strong> through trusted gateways supporting <strong>credit/debit cards, net banking, and digital wallets</strong> for safe transactions. Users can <strong>browse available repair services</strong>, <strong>create service requests</strong> with vehicle details and preferred time slots, and <strong>track request statuses</strong> from initiation to completion. Upon successful servicing, users can <strong>confirm completion</strong>, <strong>rate service advisors</strong>, and <strong>submit reviews</strong>.
</p>

<p>
  Additional key features include a <strong>communication system</strong> that <strong>enables direct calling</strong> between users and service advisors, <strong>live location fetching</strong> using GPS coordinates for service delivery, and structured <strong>service evaluation forms</strong> for quality feedback. The app also allows users to <strong>update profile details</strong>, including contact information and profile pictures, ensuring a personalized and streamlined experience. Through its robust architecture and seamless UI, this application <strong>bridges the gap</strong> between vehicle buyers, sellers, and service providers in a single, mobile-first ecosystem.
</p>
`,
    techStack: [
      "React Native",
      "Laravel 11",
      "Sanctum",
      "SQL",
      "Firebase authentication",
      "Redux",
      "Tailwind",
    ],
    category: "Internship",
    image: "./assets/images/project-12.png",
    github: null,
    live: null,
    issue:
      "Due to the project's confidentiality, I am unable to share the live hosted link and the GitHub repo at this instance.",
  },
  {
    title: "Alumnuat",
    description: `<p>
      <strong>Alumnaut</strong> is a mentorship platform built to <strong>bridge the gap</strong> between aspiring college students and verified alumni mentors. Its mission is to <strong>empower students</strong> by <strong>offering personalized guidance</strong> during the college application journey. By <strong>facilitating direct interactions</strong> between students and experienced alumni, Alumnaut <strong>helps demystify the admissions process</strong> and <strong>provides actionable insights</strong> rooted in real-world experiences. The platform emphasizes <strong>community support</strong> and aims to pave the way for academic and career success through meaningful mentorship connections.
    </p>
    
    <p>
      The platform includes a range of core functionalities such as <strong>role-based registration</strong> (student or alumni), <strong>profile management</strong>, and <strong>personalized dashboards</strong> for each user type. Students can <strong>search for mentors</strong>, <strong>chat in real-time</strong>, and <strong>schedule virtual meetings via Zoom</strong>. Alumni are encouraged to <strong>share their expertise</strong>, showcase their background, and engage with mentees. The admin dashboard <strong>enables efficient user and content management</strong>, offering tools to <strong>moderate user-generated content</strong>, <strong>edit landing pages</strong>, and <strong>publish blogs, FAQs, and legal documents</strong> with ease.
    </p>
    
    <p>
      A key feature of Alumnaut is its <strong>recommendation and matching algorithm</strong> that <strong>connects students with alumni mentors</strong> based on shared interests, preferred departments, and college choices. Unlike NLP-driven systems, this algorithm <strong>uses a structured matching approach</strong> focused on clear and relevant filters to ensure optimal pairings. The platform also adheres to strict <strong>data privacy standards</strong>, offering secure logins, encrypted communication, and transparent privacy policies. Through its comprehensive design and rich features, Alumnaut <strong>delivers an intuitive and secure mentorship experience</strong> for both students and alumni.
    </p>
    <p>The website is <strong>enriched with modern, high-quality UI components</strong> such as <a href="https://ui.aceternity.com/components/tracing-beam" target="_blank" style="display:inline-block;"><strong style="color:var(--vegas-gold)">Ray Tracer</strong></a>, <a href="https://ui.aceternity.com/components/github-globe" target="_blank" style="display:inline-block;"><strong style="color:var(--vegas-gold)">GitHub Globe</strong></a>, <a href="https://ui.aceternity.com/components/infinite-moving-cards" target="_blank" style="display:inline-block;"><strong style="color:var(--vegas-gold)">Infinity Cards</strong></a>, and <a href="https://mui.com/material-ui/react-stepper/" target="_blank" style="display:inline-block;"><strong style="color:var(--vegas-gold)">MUI Stepper</strong></a>. All these components were <strong>fully customized and integrated</strong> to match the branding and functionality of the application. The site was also <strong>engineered to be fully responsive</strong>, ensuring optimal user experience across all screen sizes and devices. All the component was showcased by the use of <strong>Storybook</strong>.</p>
    `,
    techStack: [
      "React",
      "Laravel 11",
      "Sanctum",
      "SQL",
      "BackPack",
      "Firebase authentication",
      "Redux",
      "Tailwind",
      "Framer-Motion",
      "Storybook",
      "ZOOM API",
    ],
    category: "Internship",
    image: "./assets/images/project-5.png",
    github: null,
    live: null,
    issue:
      "Due to the project's confidentiality, I am unable to share the live hosted link and the GitHub repo at this instance.",
  },
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
    video:
      "https://drive.google.com/uc?export=download&id=15G0CuUoV4IltphNz-zz_eNZoWkUKXHX_",
    github: "https://github.com/atulj10/ECommerce",
    live: null,
    issue:
      "Live link is not active due the issue with database and server deployment.",
  },
  {
    title: "Car recognition for traffic",
    description: `<p>
  This project is an advanced <strong>image recognition software</strong> that <strong>leverages the YOLO (You Only Look Once) algorithm</strong> to <strong>detect and classify objects</strong> in images with high accuracy and speed. It was specifically <strong>designed to monitor vehicles</strong> at traffic light stops, <strong>identifying cars in real-time</strong> and <strong>marking them</strong> using clearly defined rectangles with labels. The solution <strong>outputs a processed image</strong> showing all detected objects with visual indicators, making it practical for <strong>traffic management and urban monitoring applications</strong>.
</p>
<p>
  The backend is <strong>built using Flask and Python</strong>, with core image processing handled by <strong>OpenCV</strong> and object detection by <strong>YOLO</strong>. Libraries like <strong>NumPy</strong> assist in handling image arrays, while <strong>Flask-CORS</strong> is used to <strong>enable seamless communication</strong> between the backend and frontend. The system <strong>processes uploaded images</strong> server-side and <strong>returns annotated results</strong> to the client with minimal latency.
</p>
<p>
  The frontend is <strong>developed using React.js and Bootstrap</strong> to <strong>create a responsive, user-friendly interface</strong> that allows users to <strong>upload images and view detection results instantly</strong>. The entire solution is optimized for speed and usability, making it highly effective in real-world use cases like smart traffic systems. This project <strong>demonstrates a solid integration</strong> of AI-powered image detection with full-stack web development for real-time visual analytics.
</p>
    `,
    techStack: ["React", "Python", "Flask", "YOLO3", "OpenCV", "BootStrap 5"],
    category: "AI",
    image: "./assets/images/project-9.png",
    github: "https://github.com/atulj10/Image-Procesing/tree/master",
    live: null,
    issue:
      "Due server deployment issue with python live link is not available.",
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
    title: "EServices(Landing Page)",
    description: `<p>
  This project is a comprehensive <strong>engineering service website</strong> that I <strong>designed and developed entirely from scratch</strong>, incorporating <strong>advanced custom components</strong> that were <strong>iteratively refined</strong> based on client feedback. The site <strong>delivers a seamless user experience</strong> and is fully responsive across devices. It also <strong>integrates essential communication tools</strong> such as <strong>Google Maps</strong> for location access, <strong>WhatsApp</strong> and <strong>Messenger</strong> for direct contact, and the company’s <strong>Instagram page</strong> for social engagement—creating a connected and client-centric digital presence.
</p>
`,
    techStack: ["React", "BootStrap", "Meta buisness", "IFrame"],
    category: "Web development",
    image: "./assets/images/project-7.png",
    github: "https://github.com/atulj10/E-Service",
    live: "https://e-service-zeta.vercel.app/",
    issue: null,
  },
  {
    title: "Task manager",
    description: `<p>
  This project is a fully functional <strong>task manager application</strong> that I <strong>conceptualized, designed, and developed from scratch</strong>, featuring a clean and intuitive UI for <strong>task and date-wise filtering</strong>. The platform <strong>enables users to manage tasks efficiently</strong> through a structured interface, allowing seamless organization of daily responsibilities. It also includes <strong>secure user authentication</strong> to <strong>protect user data</strong> and provide a personalized task management experience across sessions.
</p>
`,
    techStack: ["React", "Firebase", "TailwindCSS"],
    category: "Web development",
    image: "./assets/images/project-6.png",
    github: "https://github.com/atulj10/Advance-Task-Manager",
    live: "https://advance-task-manager.vercel.app/",
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
        <img style="object-fit: cover" src="${project.image}" alt="${project.title}" loading="lazy" />
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
