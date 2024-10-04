function EducationItem({title,place,description}){
 return(
  <>
  <div className="educationItem">
   <div className="highlight">
    <div className="point"><div className="inner"></div></div>
    <div className="line"></div>
   </div>   
   <div className="details">
    <p className="title"><b>{title}</b></p>
    <p className="place">{place}</p>
    <p className="description">{description}</p>
   </div>   
  </div>
  </>
 )
}

export default EducationItem