import LeafIcon from "../LeafIcon/LeafIcon"

function Navigation ( ) {
 return (
  <>

   <nav>
    <a className="menuItem first" href="#"><LeafIcon name="home"/>Início</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Sobre</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Currículo</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Serviços</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Portfólio</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Preços</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Blog</a>
    <a className="menuItem" href="#"><LeafIcon name="profile"/>Contato</a>
   </nav>

  </>
 )
}

export default Navigation