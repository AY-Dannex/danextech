import ProjectCard from "./projectCard";
import vhiktony from '../assets/vhiktony.webp'
import moviemania from '../assets/moviemania.webp'
import easybank from '../assets/easybank.webp'
import portfolio from '../assets/portfoliolight.webp'
import { Link } from 'react-router-dom'
import Show from "./animation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Project(){
    const projects = [
        {
            image: portfolio,
            name: "DanexTech Portfolio",
            tools: ["React", "Tailwind"]
        },
        {
            image: vhiktony,
            name: "Vhiktony's Graphics Portfolio",
            tools: ["HTML", "CSS", "Bootstrap"],
            link: "https://vhiktony.vercel.app"
        },
        {
            image: moviemania,
            name: "Trending Movie",
            tools: ["HTML", "CSS", "Javascript"],
            link: "https://ay-dannex.github.io/Moviemania/"
        },
        {
            image: easybank,
            name: "Easy Bank",
            tools: ["HTML", "CSS"],
            link: "https://ay-dannex.github.io/Easy_Bank/"
        }
    ]
  return(
    <div className="w-full mt-[40px]">
        <h1 className="theme text-[25px] font-bold text-center mb-5 md:text-[40px] dark:text-[#42c697]">Recent Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {projects.map((project, index) => (
                <div className="">
                    <ProjectCard 
                        key={index}
                        image = {project.image}
                        name = {project.name}
                        tools = {project.tools}
                        link = {project.link}
                    />
                </div>
            ))}
        </div>
        <Show>
            <button className="theme relative left-[50%] translate-x-[-50%] dark:text-[#fff]"><Link to='/projects'>View all Projects <FontAwesomeIcon icon={faArrowRight} /></Link></button>
        </Show>
    </div>
  );
} 
export default Project