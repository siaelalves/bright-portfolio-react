import DefaultButton from "./DefaultButton"

function SelfDescription() {
 return (
  <>
   <div className="selfDescription">
    <h1><strong>Emanuel</strong> Souza</h1>
    <div className="abilities">Web Developer</div>
    <div className="description">
     Aprecio grandemente meus clientes e meu produto porque todos 
     sabem que sou sempre a melhor opção.
    </div>
    <div className="contactButtons">
     <DefaultButton label={"Portfólio"} type={"primary"}/>
     <DefaultButton label={"Contato"} type={"secondary"}/>
    </div>    
   </div>
  </>
 )
}

export default SelfDescription