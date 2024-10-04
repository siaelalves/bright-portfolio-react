function SkillItem({value}){
 return (
  <>
   <div class="circleGraphic">
    <div class="innerCircle"></div>
    <div class="openingCircle"></div>
    <div class="value">{value}%</div>
   </div>
  </>
 )
}

export default SkillItem