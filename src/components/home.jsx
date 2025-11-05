import LandingPage from './landing.jsx'
import Skills from './skills'
import Show from './animation'
import Testimonial from './carousel'
import Project from './project.jsx'
import Footer from './footer.jsx'
import { div } from 'framer-motion/client'

function Home() {
  return (
    <div>
    <div className="theme relative w-full z-10 mb-[450px]  overflow-hidden bg-[#e3fffd] md:mb-[270px] dark:bg-[#000]">
        <LandingPage />
      <div className="theme relative bg-[#e3fffd] mx-auto px-5 max-w-[1440px] dark:bg-[#000]">
        <div className="my-4">
            <div>
                <h1 className="theme text-[25px] font-bold uppercase text-center text-[#001220] md:text-[40px] dark:text-[#42c697]">
                  My Skills
                </h1>
                <p className="theme text-center dark:text-[#fff]">
                  I enjoy turning ideas into interactive web experiences using these tools and frameworks.
                </p>
            </div>
          <Show type="slideUp">
            <Skills />
          </Show>
        </div>

        <Project />

        <Show type="slideRight">
          <Testimonial />
        </Show>
      </div>
      </div>
        <Footer />
    </div>
  )
}

export default Home
