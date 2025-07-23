type ClickFuncProps = {
    onClick : React.MouseEventHandler
}


function Button(props: ClickFuncProps) {
    return (<>
    <div id="buttoncontainer" className="flex flex-row pt-10" onClick={props.onClick}>
            <div id="left" className="w-5/11"></div>
            <div id="button" className="w-1/11 bg-green-500 cursor-pointer">
                <div id="text" className="text-center font-inter text-xl">+</div>
            </div>
            <div id="right" className="w-5/11"></div>
        </div>
    </>)
}

export default Button;