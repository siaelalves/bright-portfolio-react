import AwardItem from "./AwardItem"
import TitleLine from "./TitleLine"

function Awards(){
 return(
  <>
   <TitleLine title="Prêmios."/>
   <div className="awards">
    <AwardItem logo="../src/assets/awards-1.svg" title="Inspire Works" name="Vencedor" year="2018" description="Capturou a essência da marca em designs autênticos e memoráveis."/>
    <AwardItem logo="../src/assets/awards-2.svg" title="Creative Pulse" name="Nomeado" year="2020" description="Criou designs esteticamente brilhantes e funcionais, recebendo elogios."/>
    <AwardItem logo="../src/assets/awards-3.svg" title="Luminous Creation" name="Vencedor" year="2021" description="Liderou projetos de design que superaram expectativas dos clientes."/>
    <AwardItem logo="../src/assets/awards-4.svg" title="Essence Design" name="Vencedor" year="2023" description="Transformou ideias abstratas em designs inovadores e impactantes."/>    
   </div>   
  </>
 )
}

export default Awards