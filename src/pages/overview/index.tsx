import { TourStepper } from "../../components/tour-stepper"

const OverView = () => {
   const stepComponents = [
    <h1>123123123</h1>,
    <h1>sadsad</h1>,
    <h1>123123asdasd123</h1>,
    <h1>qweqwe</h1>,
    <h1>1231qweqw23123</h1>
   ]

    return (
        <TourStepper stepComponents={stepComponents} />
    )
}

export default OverView