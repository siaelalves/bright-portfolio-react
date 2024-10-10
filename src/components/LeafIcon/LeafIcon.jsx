function LeafIcon({name}){
 const preffix = "icon"

 return(
  <>
   <span className={preffix+"-"+name}></span>
  </>
 )
}

export default LeafIcon