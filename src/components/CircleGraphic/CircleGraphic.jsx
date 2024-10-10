import circleGraphicCSS from "./CircleGraphic.module.css"

function CircleGraphic({value}){
 return (
  <>
   <div class={circleGraphicCSS.circleGraphic}>
    <div class={circleGraphicCSS.innerCircle}></div>
    <div class={circleGraphicCSS.openingCircle}></div>
    <div class={circleGraphicCSS.value}>{value}%</div>
   </div>
  </>
 )
}

export default CircleGraphic