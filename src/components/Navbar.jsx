import { Link } from "react-router-dom";
import {useEffect} from "react";

function navbarScroll() {
    const nav = document.getElementById('navbarBG');
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
function Navbar() {
    useEffect(() => {
        navbarScroll()
    }, []);
    return(
        <div id="navbar">
            <div id="navbarBG"/>
            <div id="navbarContent">
                <div id="navbarLogo">
                    <Link to="/"><img src="img/logo.png"></img></Link>
                </div>
                <nav id="navbarNav">
                    <Link to="/">Home</Link>
                    <span>  |  </span>
                    <Link to="/work">Work</Link>
                    <span>  |  </span>
                    <Link to="/about">About</Link>
                </nav>
            </div>

        </div>

    );
}

export default Navbar;