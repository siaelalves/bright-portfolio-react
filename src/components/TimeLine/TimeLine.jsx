import timeLineCSS from "./TimeLine.module.css"

function TimeLine({title,place,description}){
 return(
  <>
  <div className={timeLineCSS.timeLine}>
   <div className={timeLineCSS.highlight}>
    <div className={timeLineCSS.point}><div className={timeLineCSS.inner}></div></div>
    <div className={timeLineCSS.line}></div>
   </div>   
   <div className={timeLineCSS.details}>
    <p className={timeLineCSS.title}><b>{title}</b></p>
    <p className={timeLineCSS.place}>{place}</p>
    <p className={timeLineCSS.description}>{description}</p>
   </div>   
  </div>
  </>
 )
}

export default TimeLine