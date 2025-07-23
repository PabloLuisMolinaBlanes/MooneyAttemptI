type InfoProps = {
    concept: string,
    amount: number,
    label: string,
    date: string,
    handleConcept: React.ChangeEventHandler<HTMLInputElement>
    handleAmount: React.ChangeEventHandler<HTMLInputElement>
    handleLabel: React.ChangeEventHandler<HTMLInputElement>
    handleDate: React.ChangeEventHandler<HTMLInputElement>
}

const CRUDMenu = (props : InfoProps) => {
    return (<>
    <div id="container" className="flex flex-row">
        <div id="left" className="w-1/9"></div>
        <div id="crudmenu" className="w-7/9">
            <input type="text" value={props.concept} onChange={props.handleConcept} className="border-1"></input>
            <input type="number" value={props.amount} onChange={props.handleAmount} className="border-1"></input>
            <input type="text" value={props.label} onChange={props.handleLabel} className="border-1"></input>
            <input type="date" value={props.date} onChange={props.handleDate} className="border-1"></input>
        </div>
        <div id="right" className="w-1/9"></div>
    </div>
    </>)
}

export default CRUDMenu;