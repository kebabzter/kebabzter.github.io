export function scrollToSection() {
    let button = document.querySelector("button");
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
