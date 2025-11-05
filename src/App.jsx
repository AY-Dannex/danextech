import './App.css'
import Webpage from './webpage'
import Loader from './Loader'
import { useState, useEffect } from 'react'

import vhiktony from './assets/vhiktony.webp'
import moviemania from './assets/moviemania.webp'
import easybank from './assets/easybank.webp'
import weather from './assets/weather.webp'
import expense from './assets/expense.webp'
import blog from './assets/blog.webp'
import amazon from './assets/amazon.webp'
import Logo1 from "./assets/logo1.png"
import Logo2 from './assets/logo2.png'
import Logo3 from './assets/logo3.png'
import vhiktonyImg from './assets/vhiktonyimg.webp'
import moon from './assets/moon.svg'
import sun from './assets/sun.svg'
import css from './assets/css.svg'
import git from './assets/git.svg'
import html from './assets/html.svg'
import Javascript from './assets/Javascript.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import pic from './assets/pic.webp'
import portfolio from './assets/portfoliolight.webp'
import sophia from './assets/sophia.webp'
import michael from './assets/michael.webp'
import chloe from './assets/chloe.webp'
import daniel from './assets/daniel.webp'


function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const images = 
    [
      vhiktony,
      moviemania,
      easybank,
      weather,
      expense,
      blog,
      amazon,
      vhiktonyImg,
      Logo1,
      Logo2,
      Logo3,
      moon,
      sun,
      css,
      git,
      html,
      Javascript,
      react,
      tailwind,
      pic,
      portfolio,
      sophia,
      daniel,
      chloe,
      michael
    ]

  useEffect(() => {
    let loadCount = 0;

    images.forEach((src) => {
      const img = new Image()
      img.src = src

      const handleLoad = () => {
        loadCount++
        const percent = Math.floor((loadCount / images.length) * 100)
        setProgress(percent)
        
        if (loadCount === images.length){
          setImagesLoaded(true)
        }
      }

      img.onload = handleLoad
      img.onerror = handleLoad
    })
  }, [])

  return (
    <>
      {imagesLoaded ?  <Webpage /> : <Loader progress={progress} />}
    </>
  )
}

export default App