/*import TypeIt from "typeit";*/
import Typewriter from 'typewriter-effect';
import projects from "../ProjectsList.tsx";
import socmed from "../SocmedList.tsx";
import { Link } from "react-router-dom";
/*const typers = document.getElementsByClassName('Typewriter');
const typer = typers[0];*/



function spawnProjectImg(item: { link: string; name: string; img: string; }) {
    return (<a href={`${item.link}`} key={item.name}><img src={`img/projects/${item.img}`}></img></a>);
}
function spawnSocmedImg(item: { link: string; name: string; img: string; }) {
    return (<a href={`${item.link}`} key={item.name}><img src={`img/socmed/${item.img}`}></img></a>);
}

/*const myTypeItInstance = new TypeIt("globalThis.myElement", {
    strings: "This will be typed!",
});

myTypeItInstance.go();*/

function Index() {
    function colorSelect()
    {
        const typer = document.querySelector<HTMLElement>(".Typewriter");
        console.log("color select!")
        if (typer !== null) {
            typer.style.backgroundColor = "#0865D3";
            typer.style.color = "white";
        }
        else {
            console.log("TYPER IS NULL")
        }
    }

    function colorReset()
    {
        const typer = document.querySelector<HTMLElement>(".Typewriter");
        if (typer !== null) {
            typer.style.backgroundColor = "transparent";
            typer.style.color = "white";
        }
    }

    function empty()
    {
        const typer = document.querySelector<HTMLElement>(".Typewriter__wrapper");
        if (typer !== null) {
            typer.style.display = "none";
        }
    }
    function reset()
    {
        const typer = document.querySelector<HTMLElement>(".Typewriter__wrapper");
        if (typer !== null) {
            typer.style.display = "inline";
        }
    }
    const typerDelay1 = 2000;
    const typerDelay2 = 500;
    const typerDelay3 = 500;
    return (
        <div id="hero">
            <div id="heroTextContainer">
                <h3 id="typer">
                    <Typewriter
                        options={{
                            loop: true,
                            delay: 50
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Otaku for others.')
                                .pauseFor(typerDelay1).callFunction(() => {colorSelect();})
                                .pauseFor(typerDelay2).callFunction(() => {colorReset();empty();})
                                .deleteAll(1).pauseFor(typerDelay3).callFunction(() => {reset();})
                                .typeString('Tech Support VTuber')
                                .pauseFor(typerDelay1).callFunction(() => {colorSelect();})
                                .pauseFor(typerDelay2).callFunction(() => {colorReset();empty();})
                                .deleteAll(1).pauseFor(typerDelay3).callFunction(() => {reset();})
                                .typeString('UI/UX Designer')
                                .pauseFor(typerDelay1).callFunction(() => {colorSelect();})
                                .pauseFor(typerDelay2).callFunction(() => {colorReset();empty();})
                                .deleteAll(1).pauseFor(typerDelay3).callFunction(() => {reset();})
                                .typeString('Web Developer')
                                .pauseFor(typerDelay1).callFunction(() => {colorSelect();})
                                .pauseFor(typerDelay2).callFunction(() => {colorReset();empty();})
                                .deleteAll(1).pauseFor(typerDelay3).callFunction(() => {reset();})
                                .typeString('Programmer')
                                .pauseFor(typerDelay1).callFunction(() => {colorSelect();})
                                .pauseFor(typerDelay2).callFunction(() => {colorReset();empty();})
                                .deleteAll(1).pauseFor(typerDelay3).callFunction(() => {reset();})
                                .typeString('Voice Actor in training')
                                .pauseFor(typerDelay1).callFunction(() => {colorSelect();})
                                .pauseFor(typerDelay2).callFunction(() => {colorReset();empty();})
                                .deleteAll(1).pauseFor(typerDelay3).callFunction(() => {reset();})
                                .start();
                        }}
                    />
                </h3>

                {/*<span className="myElement"></span>*/}
                {/*<TypeIt as="h3" id="typer"
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
                />*/}
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

export default Index;