export function scrollToSection() {
    let button = document.querySelector("#scrollto-section");
    const section = document.querySelector(".about-me");
    const sectionRect = section.getBoundingClientRect();
    const sectionCenterY =
        sectionRect.top + window.scrollY + sectionRect.height / 2;
    const offset = window.innerHeight / 2;
    const scrollPosition = sectionCenterY - offset;

    button.addEventListener("click", () => {
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });
}

export function scrollToBottom() {
    let button = document.getElementById("scrollto-bottom");
    button.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    });
}

export function typewriter() {
    const element = document.querySelector(".typewrite");
    const text = "Hi there, my name is Gabriel👋";

    let typewriteEffect = (element, text, i = 0) => {
        element.textContent += text[i];

        if (i === text.length - 1) {
            return;
        }

        setTimeout(() => typewriteEffect(element, text, i + 1), 50);
    };

    typewriteEffect(element, text);
}

export function fullAge() {
    const element = document.getElementById("age");
    const startTime = Date.parse("2005-02-11T00:00:00Z");
    const marks = ["years", "months", "days", "hours", "minutes", "seconds"];
    const multipliers = [
        60 * 60 * 24 * 31 * 12,
        60 * 60 * 24 * 31,
        60 * 60 * 24,
        60 * 60,
        60,
        1,
    ];
    let i = 1;

    setInterval(() => {
        update(element, startTime, multipliers[i], marks[i]);
        i++;
        if (i === marks.length) {
            i = 0;
        }
    }, 3000);
}

function update(element, startTime, multiplier, mark) {
    const date = new Date(startTime);
    const now = new Date();
    let diffMil = now.getTime() - date.getTime();
    let seconds = Math.floor(diffMil / (1000 * multiplier));

    element.textContent = `I am ${seconds} ${mark} old`;
}

export function dynamicNavbarColor(color) {
    let element = document.getElementById("navbar");
    
    
    if (window.scrollY > 50) {
        element.classList.remove(color);
        element.classList.add("bg-transparent");
    }else {
        element.classList.remove("bg-transparent");
        element.classList.add(color);
    }
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            element.classList.remove(color);
            element.classList.add("bg-transparent");
        } else {
            element.classList.remove("bg-transparent");
            element.classList.add(color);
        }
    });
}

export function openAside(){
    document.querySelector("#menu-toggle").addEventListener('click', function () {
        const asideMenu = document.querySelector("#aside-menu");
        asideMenu.classList.toggle('translate-x-full');
        asideMenu.classList.toggle('translate-x-0');       
    })
}

export function steadyCounter(creditsToAdd){
    const counter = document.getElementById("creditsCounter");
    let currentCredits = Number(counter.textContent.split("/")[0]);
    const increment = 0.25;

    function updateCounter(creditsAdded) {
        if (creditsAdded < creditsToAdd) {
            currentCredits += increment;
            counter.textContent = `${currentCredits}/60`;

            setTimeout(() => {
                updateCounter(creditsAdded + increment);
            }, 50/creditsToAdd); //updates count depending on the amount of credits to be added
        }
    }

    updateCounter(0);
}

export function accordionFunc(){
    document.querySelectorAll('.accordion-header').forEach((header) => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const parent = this.parentElement;

            // Close all other accordion items
            document.querySelectorAll('.accordion-content').forEach((otherContent) => {
                if (otherContent !== content) {
                    otherContent.style.maxHeight = null;
                    otherContent.previousElementSibling.parentElement.classList.remove('accordion-open');
                    otherContent.previousElementSibling.classList.remove("border-b-2", "border-dashed",  "border-lime-900/80");
                }
            });

            // Toggle the clicked item
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.previousElementSibling.classList.remove("border-b-2", "border-dashed",  "border-lime-900/80");
                parent.classList.remove('accordion-open');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.previousElementSibling.classList.add("border-b-2", "border-dashed",  "border-lime-900/80");
                parent.classList.add('accordion-open');
            }
        });
    });
}

// export function navbarLocation() {
//     const path = window.location.pathname;
//     const fileName = path.substring(path.lastIndexOf('/') + 1);
//     const fileNameCut = fileName.replace('.html', '');
    
//     const element = document.getElementById(fileNameCut? fileNameCut: "index");    

//     element.classList.add("underline", "underline-offset-8", "decoration-2")
// }

// export function updateCopyright(){
//     let element = document.getElementById("copy");
//     let year = new Date();

//     element.textContent += ` ${year.getFullYear()} - kebabzter - All Rights Reserved.`
// }
