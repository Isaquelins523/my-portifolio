import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
//import Home from "./pages/Home/Home"
import AboutSection from "./pages/Home/sections/About/About"
import Hero from "./pages/Home/sections/Hero/Hero"
import ProjectsSection from "./pages/Home/sections/Projects/Projects"

const App = () => {


  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
