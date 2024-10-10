import TitleLine from "../TitleLine/TitleLine"
import TimeLine from "../TimeLine/TimeLine"

function Experience(){
 return(
  <>
   <section id="Experience" className="myXp">
    <TitleLine title="Experiências."/>
    <div className="timeLine">
     <TimeLine
      title="Agência Criativa, 2016-2018"
      place="Designer Gráfico"
      description="Desenvolvimento de campanhas publicitárias,
      criação de identidades visuais
      e design de materiais gráficos
      para diversos clientes."
     />

     <TimeLine
      title="Tech Solutions, 2018-2020"
      place="Desenvolvedor Front-End"
      description="Implementação de interfaces web
      responsivas, otimização de desempenho
      e colaboração com equipes
      de design e back-end."
     />

     <TimeLine
      title="Inovação Digital, 2020-2023"
      place="Gerente de Projetos"
      description="Gestão de projetos de desenvolvimento
      de software, coordenação de equipes
      multidisciplinares e garantia
      de entrega dentro dos prazos."
     />
    </div>
   </section>
  </>
 )
}

export default Experience