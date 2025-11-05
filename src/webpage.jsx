import Header from './components/header'
import Home from './components/home'
import Project from './components/allProject'
import Contact from './components/contact'
import ScrollToTop from './components/ScrollToTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Webpage (){
    return(
        <div className='font-sora  h-fit m-auto z-10 text-[#001516]'>
            <Router>
                <ScrollToTop />
                <Header/>
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/projects' element={<Project/>} />
                        <Route path='/contact' element={ <Contact/>} />
                    </Routes>
                </div>
            </Router> 
        </div>
    )
}
export default Webpage