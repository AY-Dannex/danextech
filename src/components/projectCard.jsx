import Show from "./animation";
function ProjectCard ({image, name, tools, link}){
    return(
        <div className="w-full">
            <Show type="slideUp">
                <div className="h-[fit] pb-[15px]">
                    <div className="w-full overflow-hidden cursor-pointer">
                        <a href={link} target="_blank"> 
                            <img src={image} alt="" className="w-full"/>
                        </a>
                    </div>
                    <div className="py-3">
                        <p className="theme dark:text-[#fff]">{name}</p>
                        <div className="w-full flex justify-between gap-2 mt-3">
                            {tools.map((item, index ) => (
                                <button className="theme bg-[#42c697] rounded-lg px-[15px] py-[10px] grow basis-[200px] dark:bg-[#001516] dark:text-[#fff]">
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Show>
        </div>
    );
}
export default ProjectCard