import TitleLine from "./TitleLine"

function AboutMe () {
 return (
  <>
   <section id="AboutMe">
    <TitleLine title="About Me."/>
    <p className="introduction">
     Olá, meu nome é Emanuel Souza e comecei a usar o WordPress quando comecei. 
     Passei a maior parte das minhas horas de vigília nos últimos dez anos projetando, 
     programando e operando sites WordPress que vão além com um designer exclusivo. 
     Além disso, adoro viajar, orientar designers, revisar portfólios de design e ler 
     livros sobre tudo relacionado ao design. Também dei palestras de design em várias 
     instituições educacionais. Então, adoro criar conteúdo criativo e você pode encontrar 
     a maioria dos meus trabalhos aqui.
    </p>
    <div className="aboutdetails">
     <div className="entry">
      <p className="label">Nome</p>
      <p className="divider">:</p>
      <p className="value"><b>Emanuel Souza</b></p>
     </div>
     <div className="entry">
      <p className="label">Nacionalidade</p>
      <p className="divider">:</p>
      <p className="value"><b>Brasileiro</b></p>
     </div>
     <div className="entry">
      <p className="label">Telefone</p>
      <p className="divider">:</p>
      <p className="value"><b>(32) 5-9812-2189</b></p>
     </div>
     <div className="entry">
      <p className="label">Email</p>
      <p className="divider">:</p>
      <p className="value"><b>contato@manudesigner.com</b></p>
     </div>
     <div className="entry">
      <p className="label">Experiência</p>
      <p className="divider">:</p>
      <p className="value"><b>8 anos</b></p>
     </div>
     <div className="entry">
      <p className="label">Freelance</p>
      <p className="divider">:</p>
      <p className="value"><b>Disponível</b></p>
     </div>
     <div className="entry">
      <p className="label">Instagram</p>
      <p className="divider">:</p>
      <p className="value"><b>@manudesigner</b></p>
     </div>
     <div className="entry">
      <p className="label">Idiomas</p>
      <p className="divider">:</p>
      <p className="value"><b>Português, Inglês, Espanhol</b></p>
     </div>
    </div>
   </section>
  </>
 )
}

export default AboutMe