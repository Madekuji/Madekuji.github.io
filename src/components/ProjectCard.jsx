function ProjectCard(props){
    return(
        <a href={`${props.link}`}>
            <div className="projectCard">
                <div>
                    <img src={`img/projects/${props.img}`}></img>
                </div>
                <div className="projectCardInfo">
                    <h2>{props.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
                </div>
            </div>
        </a>
    );
}
export default ProjectCard;