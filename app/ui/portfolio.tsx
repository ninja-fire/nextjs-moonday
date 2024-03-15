import LooterFolio from "./looter";
import CoinFolio from "./coinhouse";
import Button from "./button";

export default function Portfolio() {
    return (
        <div className="flex flex-col gap-32 w-full">
            <LooterFolio />
            <CoinFolio />
            {/* <div className="flex flex-col items-center px-4 py-4 gap-4">
                <p className="text-2xl font-bold text-label">Need more details?</p>
                <Button text="Discover all our work" target="" href="/projects" />
            </div> */}
        </div>
    );
}