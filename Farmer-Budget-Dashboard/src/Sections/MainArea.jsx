import { SmallDisp } from '../Components/SmallDisp'; 
import coinsIcon from '../assets/coins.png'
import './mainarea.css'
export function MainArea (){
    return (
        <main className="main-area">
            <SmallDisp 
                name={"Total Budget"}
                icon={coinsIcon}
                amount={900000}
            />
            <SmallDisp 
                name={"Total Budget"}
                icon={coinsIcon}
                amount={900000}
            />
            <SmallDisp 
                name={"Total Budget"}
                icon={coinsIcon}
                amount={900000}
            />
        </main>
    );
}