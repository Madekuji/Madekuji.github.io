import { Link } from "react-router-dom";
import {useEffect} from "react";

function navbarScroll() {
    const nav = document.getElementById('navbarBG');
    if (nav !== null) {
        window.onscroll = function () {
            //console.log(scrollY);
            if (scrollY >= 100 ) {
                nav.classList.add("nav-colored");
                nav.classList.remove("nav-transparent");
            }
            else {
                nav.classList.add("nav-transparent");
                nav.classList.remove("nav-colored");
            }
        };
    }
}
function Navbar() {
    useEffect(() => {
        navbarScroll()
    }, []);
    return(
        <div id="navbar">
            <div id="navbarBG"/>
            <div id="navbarContent">
                <div id="navbarLogo">
                    <Link to="/"><img id="navbarLogoImg" src="img/logo.webp"></img></Link>
                </div>
                <nav id="navbarNav">
                    <Link to="/"><span className="material-symbols-outlined">home</span> Home</Link>
                    <span>  |  </span>
                    <Link to="/work"><span className="material-symbols-outlined">work</span> Work</Link>
                    <span>  |  </span>
                    <Link to="/about"><span className="material-symbols-outlined">info</span> About</Link>
                </nav>
            </div>

        </div>

    );
}

export default Navbar;