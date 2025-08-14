import DropDown from "./components/DropDown";
import StatisticsResults from "./components/StatisticsResults";
import type { Statistics } from "../../types/Statistics";
import api from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

function StatisticsMenu() {

    const getMovements = async () => {
        const response = await api.get("http://localhost:3000/utils/statistics");
        const data : Statistics = await response.data
        console.log(data)
        return data;
    }

    const {data, isPending} = useQuery({
        queryKey: ['movements'],
        queryFn: getMovements,
    })

    return (<>
    <DropDown />
    {isPending ? <div>Loading...</div> : <StatisticsResults dataReceived={data === undefined ? {mean: 0.0, sd: 0.0, count_by_label: {}, plot_image_string: ""} : data}/>}
    </>)
}

export default StatisticsMenu;