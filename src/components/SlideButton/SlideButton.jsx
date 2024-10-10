import SlideButtonCSS from "./SlideButton.module.css"

function SlideButton () {
 return (
  <>

  <div className={SlideButtonCSS.slideButton}>
   <a href="#">
    <div className={SlideButtonCSS.internal}>
     <div className={SlideButtonCSS.iconArea}>
      <span className="icon-file-pdf"></span>
     </div>
     <div className={SlideButtonCSS.label+" "+SlideButtonCSS.download}>Baixar CV</div>
     <div className={SlideButtonCSS.label+" "+SlideButtonCSS.click}>Clique Aqui</div>
    </div>
   </a>
  </div>  
  
  </>
 )
}

export default SlideButton