import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer className="bg-transparent absolute bottom-0 w-screen left-0 flex justify-evenly text-black/50 p-2">
            <div className="flex gap-4 text-xl">
                <Link href="https://www.instagram.com/gabriel.chitarliev/" className=""><i
                        className="fa-brands text-2xl fa-instagram"></i></Link>
                <Link href="https://www.linkedin.com/in/gabriel-chitarliev-b0806724b/" className=""><i
                        className="fa-brands text-2xl fa-linkedin-in"></i></Link>
                <Link href="https://github.com/kebabzter" className=""><i className="fa-brands fa-github"></i></Link>
            </div>
        </footer>
    )
}

export default Footer;