import { Link } from "react-router-dom";
import Navigation from "../Main/Navigation/Navigation";
import Footer from "../Main/Footer/Footer";

const Blog = () => {
    return(
            <div className="bg-pastel-baby-300/80 relative">
                <Navigation/>
                <section className="min-h-screen p-20 relative flex flex-col items-center">
                    <div className="w-1/3">
                        <div className="flex justify-between mb-16">
                            <h1 className="text-2xl font-bold text-pastel-baby-900/80">Programming Abroad</h1>
                            <h2 className="text-lg italic text-pastel-baby-900/80 flex gap-2">by: <Link className="not-italic font-bold decoration-none" to="/profile">me</Link></h2>
                        </div>
                        <ul>
                            <li className="mt-10 hover:scale-105 transition-all">
                                <Link to="./blog-posts/study-choice.html">
                                    <h1 className="text-3xl font-bold text-pastel-baby-900/80">Study choice</h1>
                                    <h3 className="text-md opacity-70 text-black/80">October 17 2024</h3>
                                    <h2 className="text-lg opacity-70 text-black">Here I tell you about my study choice</h2>
                                </Link>
                            </li>
                            <li className="mt-10 hover:scale-105 transition-all">
                                <Link to="./blog-posts/swot-analysis.html">
                                    <h1 className="text-3xl font-bold text-pastel-baby-900/80">Personal SWOT analysis</h1>
                                    <h3 className="text-md opacity-70 text-black/80">October 17 2024</h3>
                                    <h2 className="text-lg opacity-70 text-black">Here is a personal analysis of my SWOT</h2>
                                </Link>
                            </li>
                            <li className="mt-10 hover:scale-105 transition-all">
                                <Link to="./blog-posts/programming-experience.html">
                                    <h1 className="text-3xl font-bold text-pastel-baby-900/80">Programming experience (so far)</h1>
                                    <h3 className="text-md opacity-70 text-black/80">October 17 2024</h3>
                                    <h2 className="text-lg opacity-70 text-black">I talk about my programming experience + some story time</h2>
                                </Link>
                            </li>
                            <li className="mt-10 hover:scale-105 transition-all">
                                <Link to="./blog-posts/feedback.html">
                                    <h1 className="text-3xl font-bold text-pastel-baby-900/80">First feedback</h1>
                                    <h3 className="text-md opacity-70 text-black/80">October 17 2024</h3>
                                    <h2 className="text-lg opacity-70 text-black">you read the title right</h2>
                                </Link>
                            </li>
                            <li className="mt-10 hover:scale-105 transition-all">
                                <Link to="./blog-posts/profession.html">
                                    <h1 className="text-3xl font-bold text-pastel-baby-900/80">Who would I work for?</h1>
                                    <h3 className="text-md opacity-70 text-black/80">October 17 2024</h3>
                                    <h2 className="text-lg opacity-70 text-black">Do you really need a description for this one?</h2>
                                </Link>
                            </li>
                        </ul>
                    </div>
            <Footer></Footer>

                </section>
        </div>
    );
}

export default Blog;