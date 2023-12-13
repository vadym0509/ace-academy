import Tour from "./components/tour"
import { Slider } from "../../components/slider"
import { Card } from "../../components/slider/slider"
import AppLayout from "../../layout"

const OverView = () => {

    const cards: Card[] = [
        {title: "1"},
        {title: "2"},
        {title: "3"},
        {title: "4"}
    ]

    return (
        <AppLayout>
            <Tour />
            {/* <Slider cards={cards} cardsPerPage={1} /> */}
        </AppLayout>
    )
}

export default OverView