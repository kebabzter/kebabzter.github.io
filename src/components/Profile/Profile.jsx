import { useRef } from "react";
import Navigation from "../Main/Navigation/Navigation";
import Footer from "../Main/Footer/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const Profile = () => {
    const top = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);

    useScrollToTop(top);

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory overflow-x-hidden">
            <div ref={top}  className="bg-pastel-rose-300/80 relative">
            <Navigation></Navigation>
                <section  className="min-h-screen p-20 relative snap-center">
                    <div className="flex flex-col mt-52 items-center select-none">
                        <h1 className="text-pastel-rose-900 font-bold text-megaxl -rotate-12 -z-10">
                            So, who am I?
                        </h1>
                        <h2 className="text-md text-pastel-rose-900 font-semibold -rotate-12 -z-10">
                            Another page about me.. I know, I know, the
                            narcissism is insane
                        </h2>
                    </div>
                    <div className="-rotate-12 absolute top-20 left-30 -z-10">
                        <img
                            src="../../public/images/glavata.png"
                            alt=""
                            className=" w-80 animate-wiggle"
                        ></img>
                    </div>
                    <button
                     id="scrollto-section"
                     onClick={() => {
                        secondSection.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}>
                        <img
                            src="/public/images/arrow-down.png"
                            alt=""
                            className="hover:cursor-pointer   absolute right-40 bottom-40 w-40 animate-bounce-slow"
                        ></img>
                    </button>
                </section>
                <section ref={secondSection} className="info min-h-screen p-28 relative snap-center">
                    <div className="flex flex-col justify-between gap-6 w-1/2">
                        <article className="text-pastel-rose-900/80">
                            <h1 className="font-bold text-5xl ">
                                Hi, I'm Gabriel Chitarliev
                            </h1>
                            <h2 className="font-semibold text-3xl ">
                                19, ICT student
                            </h2>
                        </article>
                        <h3 className="font-semibold text-xl text-pastel-rose-900/80">
                            I have previously studied in First Language School
                            Varna with a specialisation in Maths and IT
                        </h3>
                        <article className="text-pastel-rose-900/80">
                            <h1 className="font-bold text-5xl mb-4">
                                About me
                            </h1>
                            <p className="font-semibold text-xl">
                                I was born in Varna Bulgaria. I love learning
                                new things and I try to be at least a 1% better
                                than the day before. I appreciate a good movie
                                and one of my favourite series is the Star Wars
                                saga (but not the sequels).
                            </p>
                        </article>
                        <article className="text-pastel-rose-900/80">
                            <h1 className="font-bold text-5xl mb-4">
                                My hobbies
                            </h1>
                            <p className="font-semibold text-xl">
                                While I do love to always build upon my current
                                knowledge base I just as everyone else am not a
                                robot and need to relax and do some recreational
                                activities. Some of my hobbies include
                                weightlifting, cooking, reading books and 3d
                                modeling. I try to visit the gym at least 4
                                times a week as I find it very relaxing. It
                                helps me get rid of stress and feel active and
                                healthy.
                            </p>
                        </article>
                        <article className="text-pastel-rose-900/80">
                            <h2 className="text-3xl font-bold">
                                Some of my characteristics
                            </h2>
                            <ul className="font-semibold select-none text-lg list-disc ml-10">
                                <li className="mt-5">I am very determined</li>
                                <li className="mt-5">
                                    I try to stay calm in stressful situations
                                </li>
                                <li className="mt-5">
                                    I love having everything organized
                                </li>
                                <li className="mt-5">
                                    I also find organization in chaos 😭
                                </li>
                            </ul>
                        </article>
                        <div className="rotate-12 absolute right-10 -z-10">
                            <img
                                src="/public/images/glavata.png"
                                alt=""
                                className=" max-w-3xl animate-wiggle-slow"
                            ></img>
                        </div>
                        <div className="flex flex-col gap-4 absolute bottom-20 left-1/2 items-center justify-center -translate-x-1/2 -translate-1/2">
                            <img className="max-w-20" src="/public/images/skills.png" alt="" /><img/>
                            <div>
                                <button
                                    id="scrollto-bottom"
                                    className="animate-bounce px-2 py-1 bg-pastel-rose-900 text-pastel-rose-300 rounded-full"
                                    onClick={() => {
                                        thirdSection.current?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    <i className="fa-solid fa-chevron-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={thirdSection} className="min-h-screen p-28 relative snap-center">
            <Footer></Footer>
            </section>{" "}
            </div>
        </div>
    );
};

export default Profile;
