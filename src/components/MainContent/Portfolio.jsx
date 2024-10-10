import TitleLine from "./TitleLine"
import PortfolioItem from "./PortfolioItem"
import DefaultButton from "./DefaultButton"

function Portfolio(){
 return(
  <>
   <TitleLine title="Portfólio"/>
   <div className="portfolio">
    <PortfolioItem image="../src/assets/portfolio-1.png" title="Marca Empresarial" type="Branding" logo="../src/assets/zelit.svg" name="Zelt"/>
    <PortfolioItem image="../src/assets/portfolio-2.png" title="App Financeiro" type="App" logo="../src/assets/fee.svg" name="Fee"/>
    <PortfolioItem image="../src/assets/portfolio-3.png" title="Cidade em 3D" type="Modelagem" logo="../src/assets/model.svg" name="Model"/>
    <PortfolioItem image="../src/assets/portfolio-4.png" title="App de Entrega" type="App" logo="../src/assets/we-feed.svg" name="We Feed"/>
    <PortfolioItem image="../src/assets/portfolio-5.png" title="Fade" type="Música de Fundo" logo="../src/assets/moo-car.svg" name="Moo Car"/>
    <PortfolioItem image="../src/assets/portfolio-6.png" title="App de Banco" type="App" logo="../src/assets/pocket-bank.svg" name="Pocket Bank"/>
   </div>
   <DefaultButton label="Ver mais" type="primary"/>
  </>
 )
}

export default Portfolio