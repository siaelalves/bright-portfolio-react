import openCardCSS from "./OpenCard.module.css"

/**
 * 
 * @param {string} title 
 * @param {string} value
 * @param {"standard"|"full"} type
 * @returns 
 */
function OpenCard({title,value,type}){
 return(
  <>
   <div className={openCardCSS.openCard}>
    <div className={openCardCSS.top + " " + `${openCardCSS[type]}`}>{title}</div>
    <div className={openCardCSS.bottom}>{value}</div>
   </div>
  </>
 )
}

export default OpenCard