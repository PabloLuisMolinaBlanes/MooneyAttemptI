import type { Movement } from "../../../types/Movement";
import { useState } from "react";

type movementProps = {
    movement : Movement
}

const TableRow = (props : movementProps) => {
    const [id, setId] = useState(props.movement.id);
    return (<><tr key={props.movement.id} className="border-1"><td className="border-1">{props.movement.concept}</td><td className="border-1">{props.movement.amount}</td><td className="border-1">{props.movement.label?.name}</td><td className="border-1">{props.movement.date == null ? "" : "" + props.movement.date}</td></tr></>)
}

export default TableRow;