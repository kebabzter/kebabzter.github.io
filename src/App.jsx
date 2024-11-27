import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Footer from "./components/Main/Footer/Footer.jsx";
import Blog from "./components/Blog/Blog.jsx";

function App() {
    return (
        <>
            <div className="relative">
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/profile" element={<Profile/>}></Route>
                            <Route path="/blog" element={<Blog/>}></Route>
                        </Routes>
                    </main>
            </div>
        </>
    );
}

export default App;
