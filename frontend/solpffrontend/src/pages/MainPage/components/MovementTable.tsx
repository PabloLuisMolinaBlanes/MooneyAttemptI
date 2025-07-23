import type { Movement } from "../../../types/Movement"
import TableRow from "./TableRow"
type MovementProps = {movements: Movement[], handleUpdate: (id : number, labelId : number) => void}

const MovementTable = (props : MovementProps) => {

    const tableRows = props.movements.map((movement : Movement) => {return (<TableRow movement={movement} handleUpdate={props.handleUpdate} />)})
    
    return (<>
    <div id="container" className="flex flex-row">
        <div id="left" className="w-1/9"></div>
        <div id="center" className="w-7/9">
        <table className="pr-8 [&>*:nth-child(even)]:bg-gray-200 md:w-10/10 border-1 text-center font-inter">
            <tbody>
                <tr className="border-1">
                    <th className="border-1">Concept</th>
                    <th className="border-1">Amount</th>
                    <th className="border-1">Label</th>
                    <th className="border-1">Date</th>
                    <th></th>
                </tr>
                {tableRows}
            </tbody>
        </table>
        </div>
        <div id="right" className="w-1/9"></div>
    </div>
    
    </>)
}

export default MovementTable;