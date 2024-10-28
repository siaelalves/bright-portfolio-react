import SelfDescription from "./SelfDescription"
import PhotoPresentation from "./PhotoPresentation"
import WorldApproval from "./WorldApproval"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Awards from "./Awards"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing/Pricing"

function Content() {
 return (
  <>  
   <main className="defaultPadding">
    <header>
     <SelfDescription/>
     <PhotoPresentation/>
     <WorldApproval/>
    </header>
    <AboutMe/>
    <div class="works">
     <Education/>
     <Experience/>
    </div> 
    <Skills/>
    <Awards/>
    <Services/>
    <Portfolio/>
    <Pricing/>
   </main>

  </>
 )
}

export default Content