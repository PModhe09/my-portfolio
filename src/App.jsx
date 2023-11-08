import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar,Tech} from './components';
import Projects from "./components/Projects";
import Courses from "./components/Courses";


const App =()=>{
  return(
    <BrowserRouter>
       <div className="relative z-0 bg-primary">
           <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
           </div>
           <div>
            <About/>
            <Projects/>
            <Tech/>
            <Courses/>
            <Experience/>
           </div>
           <div className="relative z-0">
              <Contact/>
              {/* <StarsCanvas/> */}
           </div>
       </div>
    </BrowserRouter>
  )
}

export default App;