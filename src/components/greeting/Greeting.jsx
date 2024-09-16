import {Button} from "@mui/material";
import './Greeting.scss';
import background from "../../assets/4672550_2476842 1.svg"
const Greeting = () => {
    return(
        <div className="greeting">
            <h1>
                Let`s get started!
            </h1>
            <div className={'buttons'}>
                <Button variant={"outlined"} color={"primary"} size={"extraLarge"}>
                    Create new scenario
                </Button>
                <Button variant={"outlined"} color={"secondary"} size={"extraLarge"} >
                    Select from existing
                </Button>
            </div>
            <img src={background} alt={""} className={"background"}/>
        </div>
    )
}

export default Greeting;