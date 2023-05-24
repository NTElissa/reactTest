import react from "react";
function Button(){
    const handleButton = () => {
        alert('Button is clicked')
    }
    return(
        <div>
        <input type="button" value="send " onClick={handleButton}/>
        </div>
    )
}
export default Button;