import SelfDescription from "./SelfDescription"
import PhotoPresentation from "./PhotoPresentation"
import WorldApproval from "./WorldApproval"

function Content() {
 return (
  <>
  
   <main className="defaultPadding">
    <header>
     <SelfDescription/>
     <PhotoPresentation/>
     <WorldApproval/>
    </header>
   </main>

  </>
 )
}

export default Content