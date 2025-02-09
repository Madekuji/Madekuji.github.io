import TypeIt from "typeit-react";
import projects from "./ProjectsList.jsx";
import socmed from "./SocmedList.jsx";
import { Link } from "react-router-dom";
function colorSelect()
{
    document.getElementById("typer").style.backgroundColor = "#0865D3";
    document.getElementById("typer").style.color = "white";
}
function colorReset()
{
    document.getElementById("typer").style.backgroundColor = "transparent";
    document.getElementById("typer").style.color = "white";
}

function spawnProjectImg(item) {
    return (<a href={`${item.link}`} key={item.name}><img src={`img/projects/${item.img}`}></img></a>);
}
function spawnSocmedImg(item) {
    return (<a href={`${item.link}`} key={item.name}><img src={`img/socmed/${item.img}`}></img></a>);
}

function Home() {
    return (
        <div id="hero">
            <div id="heroTextContainer">
                <TypeIt as="h3" id="typer"
                        options={{
                            //strings: ["Otaku for others.","Tech Support VTuber", "UI/UX Designer", "Web Developer", "Programmer", "Voice Actor in training"],
                            waitUntilVisible: true,
                            //breakLines: false,
                            //lifeLike: true,
                            speed: 50,
                            //nextStringDelay: [4000, 500],
                            loop: true,
                        }}
                        getBeforeInit={(instance) => {
                            instance.type("Otaku for others.", {delay: 2000}).exec(async () => await colorSelect())
                                .pause(500).empty().exec(async () => await colorReset()).pause(1000)
                                .type("Tech Support VTuber", {delay: 2000}).exec(async () => await colorSelect())
                                .pause(500).empty().exec(async () => await colorReset()).pause(1000)
                                .type("UI/UX Designer", {delay: 2000}).exec(async () => await colorSelect())
                                .pause(500).empty().exec(async () => await colorReset()).pause(1000)
                                .type("Web Developer", {delay: 2000}).exec(async () => await colorSelect())
                                .pause(500).empty().exec(async () => await colorReset()).pause(1000)
                                .type("Programmer", {delay: 2000}).exec(async () => await colorSelect())
                                .pause(500).empty().exec(async () => await colorReset()).pause(1000)
                                .type("Voice Actor in training", {delay: 2000}).exec(async () => await colorSelect())
                                .pause(500).empty().exec(async () => await colorReset()).pause(1000)
                                .go();
                            // Remember to return it!
                            return instance;
                        }}
                />
            </div>
            <div className="heroShelf">
                <Link to="/work">
                    <div className="shelfTitle">
                        <span className="shelfTitleText">Projects</span>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </Link>
                <div className="imgShelf">
                    {projects.map(spawnProjectImg)}
                </div>
            </div>
            <div className="heroShelf">
                    <div className="shelfTitle">
                        <span className="shelfTitleText">Find me on</span>
                    </div>
                <div className="imgShelf">
                    {socmed.map(spawnSocmedImg)}
                </div>
            </div>
        </div>
    );
}

export default Home;