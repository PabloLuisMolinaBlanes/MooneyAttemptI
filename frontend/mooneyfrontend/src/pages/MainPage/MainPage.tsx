import MenuDesktop from "./components/MenuDesktop";
import HamburgerMenu from "./components/HamburgerMenu";
import MovementTable from "./components/MovementTable";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type ChangeEvent } from "react";
import api from "../../utils/api";
import Button from "./components/Button";
import ValueIndicator from "./components/ValueIndicator";
import type { Movement } from "../../types/Movement";
import type { Label } from "../../types/Label";
import CRUDMenu from "./components/CRUDMenu";
function MainPage() {

    const [concept, setConcept] = useState("")
    const [amount, setAmount] = useState(0)
    const [labelName, setLabelName] = useState("")
    const [date, setDate] = useState("" + new Date())

    function handleConcept(e : ChangeEvent<HTMLInputElement>) {
        setConcept(e.target.value)
    }

    function handleAmount(e : ChangeEvent<HTMLInputElement>) {
        setAmount(parseInt(e.target.value))
    }

    function handleLabel(e : ChangeEvent<HTMLInputElement>) {
        setLabelName(e.target.value)
    }

    function handleDate(e : ChangeEvent<HTMLInputElement>) {
        setDate(e.target.value)
    }

    const label : Label = {name: labelName, color: 0}
    const movement : Movement = {concept: concept, amount: amount, label: label, date: new Date(date)}

    useEffect(() => {
        console.log(movement)
    }, [movement])

    const getMovements = async () => {
        const response = await api.get("http://localhost:3000/movements");
        const data : Movement[] = await response.data
        console.log(data)
        return data;
    }

    const {data, isPending} = useQuery({
        queryKey: ['movements'],
        queryFn: getMovements,
    })

    const sendMovement = async () => {
        console.log("Started procedure!")
        const response = await api.post("http://localhost:3000/sendMovement", movement);
        console.log(response)
    }

    const movementArray = data === undefined ? [0] : data.map((datum) => datum.amount)

    const totalValue = movementArray.reduce((a,b) => a+b, 0)

    return (<>
        <HamburgerMenu />
        <MenuDesktop />
        <ValueIndicator totalValue={totalValue} />
        {isPending ? <div>Loading table...</div> : <MovementTable movements={data == undefined ? [] : data} />}
        < CRUDMenu concept={concept} amount={amount} label={labelName} date={date} handleAmount={handleAmount} handleConcept={handleConcept} handleLabel={handleLabel} handleDate={handleDate} />
        <Button onClick={() => sendMovement()} />
    </>)
}

export default MainPage;