import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {
    return (
        <>
            <div>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
