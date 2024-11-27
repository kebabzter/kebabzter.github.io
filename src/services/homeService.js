export const useAgeEffect = (element) => {
    const update = (startTime, multiplier, mark) => {
        const date = new Date(startTime);
        const now = new Date();
        let diffMil = now.getTime() - date.getTime();
        let seconds = Math.floor(diffMil / (1000 * multiplier));

        element.textContent = `I am ${seconds} ${mark} old`;
    };

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

    const intervalId = setInterval(() => {
        update(startTime, multipliers[i], marks[i]);
        i++;
        if (i === marks.length) {
            i = 0;
        }
    }, 3000);
    return () => {
        clearInterval(intervalId);
    };
};