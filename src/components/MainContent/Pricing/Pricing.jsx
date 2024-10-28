import TitleLine from "../../TitleLine/TitleLine"
import OpenCard from "../../OpenCard/OpenCard"
import ShutterButton from "../../ShutterButton/ShutterButton"
import styles from "./pricing.module.css"

function Pricing(){
 return(
  <>
   <TitleLine title="Preços."/>
   <section id="pricing" className={styles.pricing}>    
    <div className={styles.retractInfo}>
     <OpenCard title="Plano Básico" value="R$50 / mês" type="standard"/>
     <div className={styles.serviceInfo}>
      <p>Desenvolvimento Web</p>
      <p>Anúncios</p>
      <p>Artes gráficas</p>
      <p>Gerenciamento do projeto</p>
     </div>
     <div className={styles.verticalLine}></div>
     <div className={styles.getPlan}>
      <ShutterButton label="Contratar" type="primary"/>
      <p className={styles.note}>10% de taxa incluída</p>
     </div>     
    </div>

    <div className={styles.retractInfo}>
     <OpenCard title="Plano Star" value="R$100 / mês" type="full"/>
     <div className={styles.serviceInfo}>
      <p>Tudo do plano básico +</p>
      <p>Aplicativo Mobile</p>
      <p>Adição de itens ilimitada</p>
      <p>SEO</p>
     </div>
     <div className={styles.verticalLine}></div>
     <div className={styles.getPlan}>
      <ShutterButton label="Contratar" type="primary"/>
      <p className={styles.note}>10% de taxa incluída</p>
     </div>     
    </div>
   </section>   
  </>
 )
}

export default Pricing