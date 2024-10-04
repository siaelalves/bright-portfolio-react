import TitleLine from "./TitleLine"
import EducationItem from "./EducationItem"

function Education(){
 return (
  <>
  <section id="Education" className="myXp">
   <TitleLine title="Educação."/>
   <div className="timeLine">
    <EducationItem
     title="Mestre em Design" 
     place="UFBR, entre 2010 e 2015" 
     description="Projetos acadêmicos, iniciação científica, 
     estágios, atividades extracurriculares e um inovador TCC 
     em design de interfaces móveis."
     />

     <EducationItem
      title="Bacharelado em Ciência" 
      place="UFJK, entre 2016 e 2018" 
      description="Explorei a minha criatividade, estética e 
      funcionalidade, desenvolvendo projetos inovadores e 
      habilidades técnicas para criar soluções visuais 
      impactantes e funcionais."
     />

     <EducationItem
      title="Diploma em Design de Interface" 
      place="UFMO, entre 2019 e 2021" 
      description="Interfaces intuitivas e funcionais, 
      otimizando a experiência do usuário com design visual 
      atraente, navegação fluida e acessibilidade em 
      aplicativos e sites."
     />
    </div>
  </section>
  </>
 )
}

export default Education