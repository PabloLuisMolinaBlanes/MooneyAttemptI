type PropsValue = {
    totalValue: number
}

const ValueIndicator = (props: PropsValue) => {
    return (<>
    <div id="number" className={`text-center font-inter pb-10 text-3xl font-bold ${props.totalValue < 0 ? 'text-red-500' : 'text-green-500'}`}>{props.totalValue}</div>
    </>)
}

export default ValueIndicator;