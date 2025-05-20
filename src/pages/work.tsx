import ProjectCard from "../components/ProjectCard.tsx";
import projects from "../ProjectsList.tsx";

function spawnCard(item: { name: string; description: string; link: string; img: string; }) {
    return(<ProjectCard key={item.name} name={`${item.name}`} description={item.description} link={`${item.link}`} img={`${item.img}`} />);
}

function work(){
    const projectsData = JSON.parse(JSON.stringify(projects))
    return(
        <div id="projectList">
            <a href="https://www.youtube.com/playlist?list=PL78xXQFQ8DedgWMQoAS-g6Kx5ShubFH2O" target="_blank">
                <div className="projectCard">
                    <div>
                        <img src={`img/projects/youtube.png`}></img>
                    </div>
                    <div className="projectCardInfo">
                        <span className="projectCardHText">Playlist of subtitled videos I've worked on!</span>
                        <p>My hardsubbed fansubs make use of Aegisub. For typesetting in YouTube closed captions, I use YTSubConverter.</p>
                    </div>

                </div>
            </a>
            {projectsData.reverse().map(spawnCard)}
        </div>
    );
}


export default work;