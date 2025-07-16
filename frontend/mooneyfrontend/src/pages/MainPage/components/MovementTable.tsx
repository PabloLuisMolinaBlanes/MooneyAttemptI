type Label = {
    name?: string | null
    color?: number | null
}

type Movement = {
    concept?: string | null,
    amount: number,
    label?: Label | null,
    date?:  Date | null
};

type MovementProps = {movements: Movement[]}

const MovementTable = (props : MovementProps) => {

    const tableRows = props.movements.map((movement : Movement) => {return (<><tr><td>{movement.concept}</td><td>{movement.amount}</td><td>{movement.label?.name}</td><td>{movement.date == null ? "" : "" + movement.date}</td></tr></>)})
    
    return (<>
    <table>
        <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Label</th>
            <th>Date</th>
        </tr>
        {tableRows}
    </table>
    </>)
}

export default MovementTable;