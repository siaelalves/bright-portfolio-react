function PortfolioItem({image,title,type,logo,name}){
 return(
  <>
   <div className="item">
    <div className="image">
     <img src={image}/>
     <div className="company">
      <img src={logo} className="logo"/>
      <p className="name">{name}</p>
     </div>
    </div>    
    <h4 className="title">{title}</h4>
    <p className="info">{type}</p>
   </div>
  </>
 )
}

export default PortfolioItem