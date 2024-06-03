import { BottomSection } from "./components/bottom-section";
import { CardContainer } from "./components/projects-section";
import { TopSection } from "./components/top-section";

export default function Home() {
  return (
    <div className="h-full grid grid-rows-3">
      <TopSection />
      <div className="row-start-2 row-end-3 flex flex-col h-full w-full justify-center items-center">
        <CardContainer />
      </div>
      <BottomSection />
    </div>
  );
}
