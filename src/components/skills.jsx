import SkillCard from "./skillCard";
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import git from '../assets/git.svg'
import tailwind from '../assets/tailwind.svg'



const Skills = () => {
  const skillList = [
    { icon: html, name: "HTML 5", level: 95 },
    { icon: css, name: "CSS 3", level: 90 },
    { icon: javascript, name: "JavaScript", level: 80 },
    { icon: react, name: "React Js", level: 75 },
    { icon: tailwind, name: "Tailwind CSS", level: 75 },
    { icon: git, name: "Git & Github", level: 75 },
  ];

  return (
    <section>
      <div className="grid [@media(max-width:470px)]:grid-cols-1  grid-cols-2 md:grid-cols-3 gap-5 w-full mt-[30px]">
        {skillList.map((skill, index) => (<SkillCard key={index} {...skill} />))}
      </div>
    </section>
  );
};

export default Skills;
