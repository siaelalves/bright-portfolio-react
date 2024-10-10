import ServiceItem from "./ServiceItem"
import TitleLine from "./TitleLine"

function Services(){
 return(
  <>
   <TitleLine title="Serviços"/>
   <section id="serviceList" className="serviceList">
    <p class="intro">
     Minha visão é um mundo em que todas as tecnologias tem um objetivo bem definido e 
     que as pessoas gastem mais tempo aproveitando o que seus dispositivos podem fazer do que 
     aprendendo a utilizá-los.
    </p>
    <div className="list">
     <ServiceItem icon="../src/assets/service-1.svg" title="UI/UX Design" description="Criei interfaces intuitivas, realizei pesquisas de usuários, desenvolvi protótipos e melhorei a experiência do usuário."/>
     <ServiceItem icon="../src/assets/service-2.svg" title="Identidade Visual" description="Desenvolvi identidades visuais consistentes, criei logotipos impactantes, defini paletas de cores e tipografias, e assegurei a coerência visual em todos os materiais de comunicação."/>
     <ServiceItem icon="../src/assets/service-3.svg" title="Desenvolvedor Web" description="Desenvolvi sites responsivos, otimizei o desempenho, implementei funcionalidades interativas e garanti a compatibilidade entre navegadores."/>
     <ServiceItem icon="../src/assets/service-4.svg" title="Desenvolvedor de App" description="Desenvolvi aplicativos móveis intuitivos, otimizei a performance, implementei funcionalidades inovadoras e assegurei uma experiência de usuário fluida."/>
    </div>    
   </section>
   
  </>
 )
}

export default Services