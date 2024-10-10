import shutterButtonCSS from "./ShutterButton.module.css"

function ShutterButton({label,type}) {
 return (
  <>
   <button className={`${shutterButtonCSS[type]}`}>
    {label}
   </button>
  </>
 )
}

export default ShutterButton