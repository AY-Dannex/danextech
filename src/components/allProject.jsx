import ProjectCard from "./projectCard"
import vhiktony from '../assets/vhiktony.webp'
import moviemania from '../assets/moviemania.webp'
import easybank from '../assets/easybank.webp'
import weather from '../assets/weather.webp'
import expense from '../assets/expense.webp'
import blog from '../assets/blog.webp'
import amazon from '../assets/amazon.webp'
import portfolio from '../assets/portfoliolight.webp'
import Footer from "./footer"

function AllProject (){
     const projects = [
        {
            image: portfolio,
            name: "DanexTech Portfolio",
            tools: ["React", "Tailwind"]
        },
        {
            image: vhiktony,
            name: "Vhiktony's Graphics Portfolio",
            tools: ["HTML", "CSS", "Javascript"],
            link: "http://vhiktony.vercel.app"
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
        },
        {
            image: amazon,
            name: "Amazon Clone",
            tools: ["HTML", "CSS", "Javascript"],
            link: "https://ay-dannex.github.io/e-commerce-website"
        },
        {
            image: weather,
            name: "Weather App",
            tools: ["React", "Tailwind"],
            link: "https://weather-app-seven-eta-12.vercel.app/"
        },
        {
            image: expense,
            name: "Expense Tracker",
            tools: ["React", "Tailwind"],
            link: "https://expense-tracker-ashy-nu.vercel.app/"
        },
        {
            image: blog,
            name: "Blog Page",
            tools: ["HTML", "CSS"],
            link: "https://ay-dannex.github.io/Grid-Layout-Page/"
        },
    ]
    return(
        <div className="w-full overflow-hidden">
            <div className="theme w-full z-10 relative mb-[450px] md:mb-[260px] bg-[#e3fffd] dark:bg-[#000]">
            <div className="theme z-10 bg-[#e3fffd] relative mx-auto mt-10 px-5 pt-10 max-w-[1440px] dark:bg-[#000]">
                <h1 className="theme text-[25px] font-bold text-center md:text-[40px] dark:text-[#fff]">My Projects</h1>
                <div className="w-full mt-[20px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                        {projects.map((project, index) => (
                        <div className="">
                            <ProjectCard 
                                key = {index}
                                image = {project.image}
                                name = {project.name}
                                tools = {project.tools}
                                link = {project.link}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default AllProject