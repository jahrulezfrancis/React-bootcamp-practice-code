import { AvailableCars } from "./Cars"

const [FavCars] = (AvailableCars);
const {Name, Made} = (FavCars);


export default function MyCars() {
    return (
        console.log(Name, Made)
    )
}



