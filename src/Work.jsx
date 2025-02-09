import ProjectCard from "./components/ProjectCard";
import projects from "./ProjectsList.jsx";

function spawnCard(item) {
    return(<ProjectCard key={item.name} name={`${item.name}`} description={item.description} link={`${item.link}`} img={`${item.img}`} />);
}

function Work(){
    return(
        <div id="projectList">
            {projects.map(spawnCard)}
        </div>
    );
}


export default Work;