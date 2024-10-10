import opacityCardCSS from "./OpacityCard.module.css"

function OpacityCard({image,title,type,logo,name}){
 return(
  <>
   <div className={opacityCardCSS.opacityCard}>
    <div className={opacityCardCSS.image}>
     <img src={image}/>
     <div className={opacityCardCSS.company}>
      <img src={logo} className={opacityCardCSS.logo}/>
      <p className={opacityCardCSS.name}>{name}</p>
     </div>
    </div>    
    <h4 className={opacityCardCSS.title}>{title}</h4>
    <p className={opacityCardCSS.info}>{type}</p>
   </div>
  </>
 )
}

export default OpacityCard