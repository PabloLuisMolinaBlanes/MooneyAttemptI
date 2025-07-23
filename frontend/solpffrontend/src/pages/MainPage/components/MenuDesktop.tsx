import Model from "../../../../public/model.svg"
import Piechart from "../../../../public/piechart.svg"
import { useNavigate } from "react-router";

function MenuDesktop () {
    const nav = useNavigate()

    function goToStatistics() {
        nav("/statistics")
    }

    function goToModels() {
        nav("/models/main")
    }
    return (<>
    <div id="dekstopcontainer" className="flex flex-row max-md:invisible md:visible pl-40">
        <div className="right w-3/9 text-left flex flex-col cursor-pointer">
            <img src={Piechart} onClick={() => goToStatistics()} height="150" width="150"></img>
            <p>Statistics</p>
        </div>
        <div className="center w-3/9"></div>
        <div className="left w-3/9 text-left flex flex-col cursor-pointer">
            <img src={Model} onClick={() => goToModels()} height="150" width="150"></img>
            <p>Models</p>
        </div>
    </div>
    </>)
}

export default MenuDesktop;