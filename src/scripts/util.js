export function scrollToSection() {
    let button = document.querySelector("button");
    const section = document.querySelector(".about-me");
    const sectionRect = section.getBoundingClientRect();
    const sectionCenterY =
        sectionRect.top + window.scrollY + sectionRect.height;
    const offset = window.innerHeight / 2;
    const scrollPosition = sectionCenterY - offset;

    button.addEventListener("click", () => {
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
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
