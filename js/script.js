/* =========================================
   Centralized JS for Carla-Coiffure
========================================= */

/* ===== Accordion Functionality ===== */
const accButtons = document.querySelectorAll('.accordion-btn');
accButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const content = btn.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

/* ===== Tabs Functionality ===== */
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabsContainer = btn.parentElement;
        tabsContainer.querySelector('.tab-btn.active').classList.remove('active');
        btn.classList.add('active');

        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tc => tc.classList.remove('active'));

        const tabId = `tab-${btn.dataset.tab}`;
        const currentTab = document.getElementById(tabId);
        if (currentTab) currentTab.classList.add('active');
    });
});

/* ===== Fade-in on Scroll ===== */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

/* ===== Modal Functionality ===== */
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    const openBtn = document.getElementById(modal.dataset.open);
    const closeBtn = modal.querySelector('.close');

    if(openBtn){
        openBtn.addEventListener('click', () => modal.style.display = 'flex');
    }

    if(closeBtn){
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
    }

    window.addEventListener('click', e => {
        if(e.target === modal) modal.style.display = 'none';
    });

    window.addEventListener('keydown', e => {
        if(e.key === "Escape") modal.style.display = 'none';
    });
});

/* ===== Gallery Lightbox ===== */
const galleryImages = document.querySelectorAll('.gallery img');
if(galleryImages.length > 0){
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightbox.innerHTML = `
                <img src="${img.src}" class="lightbox-content">
                <span class="close">&times;</span>
            `;

            lightbox.querySelector('.close').addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        });
    });
}

/* ===== Smooth Scroll for Internal Links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// ----------------------------
// Service Data
// ----------------------------
const services = [
    {
        title: "Hair Styling",
        description: "For men, women, and children with personalized attention.",
        image: "images/style1.jpg"
    },
    {
        title: "Hair Treatments",
        description: "Natural African hair care, treatments, and expert advice.",
        image: "images/style2.jpg"
    },
    {
        title: "Product Sales",
        description: "High-quality hair care products to maintain your look at home.",
        image: "images/style3.jpg"
    },
    {
        title: "Hair Coloring",
        description: "Premium coloring services for a vibrant look.",
        image: "images/style4.jpg"
    }
];

// ----------------------------
// Load Services Dynamically
// ----------------------------
const serviceContainer = document.getElementById('serviceContainer');

function displayServices(list) {
    serviceContainer.innerHTML = ""; // clear existing
    list.forEach(service => {
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `
            <img src="${service.image}" alt="${service.title}" />
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceContainer.appendChild(div);
    });
}

// Service Search Filter
const searchInput = document.getElementById('serviceSearch');
const serviceBoxes = document.querySelectorAll('.flex-boxes .box');

searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase();

    serviceBoxes.forEach(box => {
        const title = box.querySelector('h3').textContent.toLowerCase();
        const description = box.querySelector('p').textContent.toLowerCase();

        if(title.includes(query) || description.includes(query)) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
});
/* =============================
   Fade-in Animation on Scroll
============================= */
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
});

/* =============================
   Modal Functionality
============================= */
const modal = document.getElementById("appointmentModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".modal .close");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* =============================
   Gallery Lightbox
============================= */
const galleryImagesArr = document.querySelectorAll(".gallery img");

galleryImagesArr.forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);

        const lightboxContent = document.createElement("img");
        lightboxContent.src = img.src;
        lightboxContent.classList.add("lightbox-content");
        lightbox.appendChild(lightboxContent);

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.classList.add("close");
        lightbox.appendChild(closeBtn);

        closeBtn.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) document.body.removeChild(lightbox);
        });
    });
});

/* =============================
   Search Functionality
============================= */
function filterServices() {
    const input = document.getElementById("serviceSearch");
    const filter = input.value.toLowerCase();
    const services = document.querySelectorAll("#serviceContainer .box");

    services.forEach(service => {
        const name = service.dataset.name.toLowerCase();
        if (name.includes(filter)) {
            service.style.display = "flex";
        } else {
            service.style.display = "none";
        }
    });
}
