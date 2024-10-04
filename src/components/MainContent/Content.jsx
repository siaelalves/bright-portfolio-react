import SelfDescription from "./SelfDescription"
import PhotoPresentation from "./PhotoPresentation"
import WorldApproval from "./WorldApproval"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"

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
    </header>
   </main>

  </>
 )
}

export default Content