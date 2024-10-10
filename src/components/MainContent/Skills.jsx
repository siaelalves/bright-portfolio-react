import TitleLine from "../TitleLine/TitleLine"
import CircleGraphic from "../CircleGraphic/CircleGraphic"

function Skills(){
 return (
  <>
   <TitleLine title="Habilidades."/>
   <section id="skill-list" class="skill-list">
    <CircleGraphic value="75"/>
    <CircleGraphic value="34"/>
    <CircleGraphic value="89"/>
    <CircleGraphic value="46"/>
    <CircleGraphic value="92"/>
    <CircleGraphic value="69"/>
   </section>
  </>
 )
}

export default Skills