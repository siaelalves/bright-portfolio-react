import openCardCSS from "./OpenCard.module.css"

function OpenCard({title,value}){
 return(
  <>
   <div className={openCardCSS.openCard}>
    <div className={openCardCSS.top}>{title}</div>
    <div className={openCardCSS.bottom}>{value}</div>
   </div>
  </>
 )
}

export default OpenCard