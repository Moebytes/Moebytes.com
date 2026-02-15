import React, {useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import {useLayoutActions} from "./store"
import LocalStorage from "./LocalStorage"
import AudioEngine from "./structures/AudioEngine"
import HomePage from "./pages/HomePage"
import SoftwarePage from "./pages/SoftwarePage"
import DesignPage from "./pages/DesignPage"
import ArtPage from "./pages/ArtPage"
import MusicPage from "./pages/MusicPage"
import ContactPage from "./pages/ContactPage"
import $404Page from "./pages/404Page"
import "./index.less"

const App: React.FunctionComponent = () => {
    const {setMobile, setTablet} = useLayoutActions()

    useEffect(() => {
      AudioEngine.initialize()
    }, [])

    useEffect(() => {
        const resize = () => {
            const isMobile = window.matchMedia("(max-width: 500px)").matches
            const isTablet = window.matchMedia("(min-width: 501px) and (max-width: 1200px)").matches
    
            if (isMobile) {
                setMobile(true)
                setTablet(false)
            } else if (isTablet) {
                setTablet(true)
                setMobile(false)
            } else {
                setMobile(false)
                setTablet(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
        document.documentElement.style.visibility = "visible"
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
      <div className="app">
        <LocalStorage/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/software" element={<SoftwarePage/>}/>
          <Route path="/design" element={<DesignPage/>}/>
          <Route path="/art" element={<ArtPage/>}/>
          <Route path="/music" element={<MusicPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<$404Page/>}/>
        </Routes>
      </div>
    )
}

export default App