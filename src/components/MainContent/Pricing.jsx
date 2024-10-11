import TitleLine from "../TitleLine/TitleLine"
import OpenCard from "../OpenCard/OpenCard"

function Pricing(){
 return(
  <>
   <TitleLine title="Preços."/>
   <section id="pricing" className="pricing">    
    <div className="retractInfo">
     <OpenCard title="Plano Básico" value="R$50 / mês"/>
     <div className="serviceInfo">
      <p>Web Development</p>
      <p>Mobile Development</p>
      <p>Advertising</p>
      <p>Graphic Design</p>
      <p>Project Management</p>
     </div>
     <div className="verticalLine">
      
     </div>
    </div>
   </section>   
  </>
 )
}

export default Pricing