import flipCardCSS from "./flipCard.module.css";

function FlipCard({logo,title,name,year,description}){
 return(
  <>
   <div className={flipCardCSS.flipCard}>
    <div className={flipCardCSS.front}>
     <img className={flipCardCSS.logo} src={logo}/>
     <p className={flipCardCSS.title}><b>{title}</b></p>
     <p className={flipCardCSS.name}>{name}</p>
     <span className={flipCardCSS.year}>{year}</span>
    </div>
    <div className={flipCardCSS.back}>
     <p className={flipCardCSS.description}>{description}</p>
    </div>
   </div>   
  </>
 )
}

export default FlipCard