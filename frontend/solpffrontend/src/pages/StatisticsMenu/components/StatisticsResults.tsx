import { useState } from "react";
import type { Statistics } from "../../../types/Statistics";

type StatisticsProps = {
    dataReceived : Statistics,
}

const StatisticsResults = (props : StatisticsProps) => {
    const [image, setImage] = useState(props.dataReceived.plot_image_string)
    const [image2, setImage2] = useState(props.dataReceived.plot_image_string_2)
    const [dataHeader, setDataHeader] = useState("data:image/svg+xml;base64,")

    if (Object.keys(props.dataReceived).length === 0) {

    } else {
        return (<>
            <p>Mean: {props.dataReceived.mean}</p>
            <p>SD: {props.dataReceived.sd}</p>
            <img src={dataHeader + image}></img>
            <img src={dataHeader + image2}></img>
            </>)
    }
    
}

export default StatisticsResults;