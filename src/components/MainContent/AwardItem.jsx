function AwardItem({logo,title,name,year,description}){
 return(
  <>   
   <div className="awardBox defaultPadding">
    <div className="front">
     <img className="logo" src={logo}/>
     <p className="title"><b>{title}</b></p>
     <p className="name">{name}</p>
     <span className="year">{year}</span>
    </div>
    <div className="back">
     <p className="description">{description}</p>
    </div>    
   </div>
   
  </>
 )
}

export default AwardItem