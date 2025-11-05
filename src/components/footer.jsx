import { Link } from "react-router-dom";
import Logo from '../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#001516] text-white font-light pt-[50px] px-[20px] pb-[20px] dark:bg-[#000]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-between z-0 md:flex-row gap-[30px]">
          <div className="max-w-[500px]">
          <img src={Logo} alt="" className="w-[200px]"/>
            <p className="mt-4 text-[14px]"> 
                Passionate about bringing ideas to life through code and creativity. 
            </p>
            <p className="text-[14px]"> 
                I focus on building modern, responsive, and accessible web applications 
                that make an impact. 
            </p>
            <div className="w-full mt-2 flex flex-row gap-4">
              <a href="https://github.com/AY-Dannex" target="blank" className="text-[30px] transition-colors duration-300 hover:text-[#42c697]">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="" target="blank" className="text-[30px] transition-colors duration-300 hover:text-[#42c697]">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" target="blank" className="text-[30px] transition-colors duration-300 hover:text-[#42c697]">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-akindun-934961321/" target="blank" className="text-[30px] transition-colors duration-300 hover:text-[#42c697]">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="http://wa.me/2348140392513" className="text-[30px] transition-colors duration-300 hover:text-[#42c697]">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
            <h2 className="font-bold">Quick Links</h2>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        </div>
      <hr className="mt-[30px]"/>
      <p className="text-center">&copy; {year} Danex.Tech</p>
      </div>
    </footer>
  )
}
export default Footer
