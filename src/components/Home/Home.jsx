import { useRef } from "react";
import { Link } from "react-router-dom";
import useTypewriter from "../../hooks/useTypewriter";
import Navigation from "../Main/Navigation/Navigation";
import useScrollToTop from "../../hooks/useScrollToTop";

const Home = () => {
    const typewriteRef = useRef(null);
    const top = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);

    useScrollToTop(top);


    const text = "Hi there, my name is Gabriel👋";
    useTypewriter(text, typewriteRef);

    return (
        <div ref={top} >
            <section className="absolute top-0 bg-cyan-300 -z-10 w-screen h-1/3"></section>
            <Navigation></Navigation>
            <section className="hero min-h-screen bg-cyan-300 flex flex-col gap-10 items-center justify-center ">
                <div className="text-center">
                    <h1
                        className="typewrite text-4xl font-bold text-cyan-800 mt-48 select-none"
                        ref={typewriteRef}
                    ></h1>
                </div>

                <button
                onClick={() => {
                    secondSection.current?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                    className="animate-bounce bg-cyan-800 text-cyan-300/80 px-2 py-1 rounded-full mt-10"
                >
                    <i className="fa-solid fa-chevron-down "></i>
                </button>
                <img
                    src="/public/images/go-down-cyan-removebg-preview.png"
                    alt=""
                    className="max-h-64 select-none"
                ></img>
            </section>
            <section ref={secondSection} className="about-me min-h-screen bg-orange-300/80 flex p-20 justify-between relative">
                <div className="mt-40 ml-40 flex flex-col">
                    <h1 className="text-7xl font-bold select-none text-orange-800/80">
                        Something about me &#58;&#41;
                    </h1>
                    <ul className="text-orange-800/80 font-semibold select-none text-xl list-disc ml-16 mt-10">
                        <li id="age" className="mt-5">
                            I am 19 years old
                        </li>
                        <li className="mt-5">I am from Varna Bulgaria</li>
                        <li className="mt-5">I love to work out and cook</li>
                        <li className="mt-5">I love maths and logic!</li>
                        <li className="mt-5">Star wars nerd</li>
                    </ul>
                </div>
                <img
                    src="/public/images/snimka-strelki.png"
                    className="mr-40 select-none max-w-lg"
                    alt=""
                ></img>
                <button
                onClick={() => {
                    thirdSection.current?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                    className="animate-bounce bg-orange-800/80 text-orange-300/80 px-2 py-1 rounded-full mt-10 absolute bottom-32 left-1/2"
                >
                    <i className="fa-solid fa-chevron-down "></i>
                </button>
            </section>
            <section ref={thirdSection} className="motives min-h-screen flex p-20 bg-emerald-300/80 justify-end relative overflow-hidden">
                <div className="flex flex-col w-1/2">
                    <h1 className="text-7xl font-bold select-none text-emerald-800/80">
                        What drives me towards ICT?
                    </h1>
                    <p className="font-semibold select-none text-emerald-800/80 break-words mt-16 text-lg">
                        I love technology, logic and maths. What I am even more
                        passionate about is uncovering how things work beneath
                        the surface. I believe that&apos;s due to my natural
                        curiosity. I love to dive into difficult problems with
                        no other goal but to learn. Yeah, sometimes my brain
                        starts to hurt from all of the &quot;amazing&quot; complexity and
                        sometimes I realize how stupid I am... but once I solve
                        the problem all of that is no longer important. All of a
                        sudden all the hours spent have no longer gone to waste
                        and I love that feeling. The feeling of overcoming an
                        obstacle.
                    </p>
                    <p className="font-semibold select-none text-emerald-800/80 break-words mt-16 text-lg">
                        That brings us to ICT. Full of problems to solve, full
                        of logic and while not as much, still a decent amount of
                        maths.
                    </p>
                    <div className="flex justify-center mt-32 select-none text-emerald-300/80 font-bold gap-10">
                        <Link
                            to="/profile"
                            className="cursor-pointer bg-emerald-800/80 p-4 rounded-full hover:-translate-y-1 transition-transform"
                        >
                            More about me
                        </Link>
                        <Link
                            to="https://github.com/kebabzter"
                            className="cursor-pointer bg-emerald-800/80 p-4 rounded-full hover:-translate-y-1 transition-transform"
                        >
                            <i className="fa-brands fa-github"></i> My Github
                        </Link>
                    </div>
                </div>
                <div className="question-marks select-none">
                    <p className="absolute left-40 top-40 text-11xl font-semibold text-emerald-800/80 animate-spin-slower -z-10">
                        ?
                    </p>
                    <p className="absolute right-20 bottom-10 text-gigaxl font-semibold text-emerald-800/80 animate-spin-slowerer -z-10">
                        ?
                    </p>
                    <p className="absolute left-1/3 bottom-20 text-7xl font-semibold text-emerald-800/80 animate-spin-slow -z-10">
                        ?
                    </p>
                </div>
                <img
                    src="/public/images/me-in-drawing.png"
                    alt=""
                    className="absolute w-2/5 left-32 bottom-60 -rotate-12 select-none"
                ></img>
            </section>
        </div>
    );
};

export default Home;
