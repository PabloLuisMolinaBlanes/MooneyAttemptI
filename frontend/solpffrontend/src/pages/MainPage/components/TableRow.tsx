import type { Movement } from "../../../types/Movement";
import { useState } from "react";

type movementProps = {
    movement : Movement,
    handleUpdate:  (id: number, labelId : number) => void
}

const TableRow = (props : movementProps) => {
    const [id, setId] = useState(props.movement.id === undefined ? -1 : props.movement.id);
    const [labelId, setLabelID] = useState(props.movement.label?.id === undefined ? -1 : props.movement.label.id)
    return (<><tr key={props.movement.id} className="border-1"><td className="border-1">{props.movement.concept}</td><td className="border-1">{props.movement.amount}</td><td className="border-1">{props.movement.label?.name}</td><td className="border-1">{props.movement.date == null ? "" : "" + props.movement.date}</td><td><input onClick={() => {props.handleUpdate(id, labelId)}} type="button" value="Editar"></input></td></tr></>)
}

export default TableRow;