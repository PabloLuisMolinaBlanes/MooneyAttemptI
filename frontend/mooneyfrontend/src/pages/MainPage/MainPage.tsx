import MenuDesktop from "./components/MenuDesktop";
import HamburgerMenu from "./components/HamburgerMenu";
import MovementTable from "./components/MovementTable";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
function MainPage() {

    const getMovements = async () => {
        const response = await api.get("http://localhost:3000/movements");
        const data = await response.data
        console.log(data)
        return data;
    }

    const {data, isPending} = useQuery({
        queryKey: ['movements'],
        queryFn: getMovements,
    })

    

    return (<>
        <HamburgerMenu />
        <MenuDesktop />
        {isPending ? <div>Loading table...</div> : <MovementTable movements={data} />}
    </>)
}

export default MainPage;