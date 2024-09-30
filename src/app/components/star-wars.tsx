import { CircleAnimation } from "./flying-circle";

export const StarWars = () => {
    return (
        <div className="absolute h-full w-full overflow-hidden">
        <CircleAnimation count={15} />
        </div>
    );
}
