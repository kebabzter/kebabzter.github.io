document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".typewrite");
    const text = "Hi there, my name is Gabriel👋";

    console.log(element);

    let typewriteEffect = (element, text, i = 0) => {
        element.textContent += text[i];

        if (i === text.length - 1) {
            return;
        }

        setTimeout(() => typewriteEffect(element, text, i + 1), 50);
    };

    typewriteEffect(element, text);
});
