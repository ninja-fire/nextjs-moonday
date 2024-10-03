import LooterFolio from "./looter";
import CoinFolio from "./coinhouse";

export default function Portfolio() {
    return (
        <div className="flex flex-col gap-32 w-full">
            <LooterFolio />
            <CoinFolio />
        </div>
    );
}