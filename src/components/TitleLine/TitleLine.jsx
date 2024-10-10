import TitleLineCSS from "./TitleLine.module.css"

function TitleLine({title}){
 return(
  <>  
  <div className={TitleLineCSS.titleline}>
   <h2>{title}</h2>
   <div className={TitleLineCSS.line}></div>
  </div>
  </>
 )
}

export default TitleLine