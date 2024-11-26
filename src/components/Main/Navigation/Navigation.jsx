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
                        <Link id="index" className={`p-2 rounded-full ${activeUnderline("/")? underlineClasses: ""}`} to="/">Home</Link>
                        <Link id="profile" className={`p-2 rounded-full ${activeUnderline("/profile")? underlineClasses: ""}`} to="/profile" >Profile</Link>
                        <Link id="blog" className={`p-2 rounded-full ${activeUnderline("/blog")? underlineClasses: ""}`} to="/blog">Blog</Link>
                        <button id="menu-toggle" className="px-3 py-2 rounded-full bg-black/60 text-white/60">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </header>
    )
}

export default Navigation;