import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation()
    const underlineClasses = "underline underline-offset-8 decoration-2"
    const activeUnderline = (path) => path === location.pathname;
    return(
            <header id="navbar" className="bg-transparent sticky top-0 z-10 w-100%  font-bold backdrop-blur-xl text-black/60">
                <Link  className="w-28 absolute left-20 opacity-70" to="/"> <img src="public/name-logo.png" alt=""></img></Link>
                <nav className="flex justify-around shadow-sm">
                    <div className="flex gap-2 p-4">
                        <Link to="/" id="index" className={`p-2 rounded-full ${activeUnderline("/")? underlineClasses: ""}`}>Home</Link>
                        <Link to="/profile" id="profile" className={`p-2 rounded-full ${activeUnderline("/profile")? underlineClasses: ""}`}>Profile</Link>
                        <Link to="/blog" id="blog" className={`p-2 rounded-full ${activeUnderline("/blog")? underlineClasses: ""}`}>Blog</Link>
                    </div>
                </nav>
            </header>
    )
}

export default Navigation;