import Model from "../../../../public/model.svg"
import Piechart from "../../../../public/piechart.svg"


function MenuDesktop () {
    return (<>
    <div id="dekstopcontainer" className="flex flex-row max-md:invisible md:visible">
        <div className="right w-3/9 text-left flex flex-col">
            <img src={Piechart} height="300" width="300"></img>
            <p>Statistics</p>
        </div>
        <div className="center w-3/9"></div>
        <div className="left w-3/9 text-right flex flex-col">
            <img src={Model} height="300" width="300"></img>
            <p>Models</p>
        </div>
    </div>
    </>)
}

export default MenuDesktop;