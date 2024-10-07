function ServiceItem({icon,title,description}){
 return(
  <>
   <div className="item">
    <div className="box">
     <img className="icon" src={icon}/>
    </div>    
    <p className="title"><b>{title}</b></p>
    <p className="description">{description}</p>
    <a href="#">
     <img src="../src/assets/readMoreBtn.svg" className="readMoreBtn"/>
    </a>
   </div>
  </>
 )
}

export default ServiceItem