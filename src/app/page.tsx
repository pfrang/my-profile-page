import { BottomSection } from "./components/bottom-section";
import { CardContainer } from "./components/projects-section";
import { StarWars } from "./components/star-wars";
import { TopSection } from "./components/top-section";

import { stylex, styles } from "./styles"

export default function Home() {
  return (
    <div  className="grid min-h-screen" style={{ gridTemplateRows: "1fr auto 1fr" }}>
      <TopSection />
      <div className="row-start-2 row-end-3 flex flex-col h-full w-full justify-center items-center">
        <CardContainer />
        <StarWars   />
      </div>
      <BottomSection />
    </div>
  );
}
