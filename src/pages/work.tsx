import ProjectCard from "../components/ProjectCard.tsx";
import projects from "../ProjectsList.tsx";

function spawnCard(item: { name: string; description: string; link: string; img: string; }) {
    return(<ProjectCard key={item.name} name={`${item.name}`} description={item.description} link={`${item.link}`} img={`${item.img}`} />);
}

function work(){
    return(
        <div id="projectList">
            {projects.map(spawnCard)}
        </div>
    );
}


export default work;