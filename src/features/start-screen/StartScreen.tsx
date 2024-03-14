import { TechnologyImages, Headings } from "./";

const StartScreen = () => {
  return (
    <div className="space-y-4  font-bold tracking-wider text-white">
      <Headings />
      <TechnologyImages className="pt-6" />
    </div>
  );
};

export default StartScreen;
