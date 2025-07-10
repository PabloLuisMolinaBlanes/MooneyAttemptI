import { useEffect } from "react";
import Hambuger_icon from "../../../../public/Hamburger_icon.svg"
import { useState } from "react";
function HamburgerMenu() {
    
    const states = ["visible", "invisible"]
    const elements = ["Statistics", "Models"];
    const [visibility, setVisibility] = useState(0)
    var navBar = <nav className={`text-center flex flex-col divide-solid max-md:${visibility === 0 ? "visible" : "invisible"} md:invisible`}><ul>{elements.map(element => (<li>{element}</li>))}</ul></nav>
    
    function switchState() {
        setVisibility((visibility + 1) % 2)
    }

    return (<>
    <div id="container" className="flex flex-row flex-row-reverse max-md:visible md:invisible">
        <img className="cursor-pointer" onClick={switchState} src={Hambuger_icon}></img>
    </div>
    {navBar}
    </>)
}

export default HamburgerMenu;