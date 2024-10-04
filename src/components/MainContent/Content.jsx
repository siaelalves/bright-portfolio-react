import SelfDescription from "./SelfDescription"
import PhotoPresentation from "./PhotoPresentation"
import WorldApproval from "./WorldApproval"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

function Content() {
 return (
  <>  
   <main className="defaultPadding">
    <header>
     <SelfDescription/>
     <PhotoPresentation/>
     <WorldApproval/>
     <AboutMe/>
     <div class="works">
      <Education/>
      <Experience/>
     </div> 
     <Skills/>
    </header>
   </main>

  </>
 )
}

export default Content