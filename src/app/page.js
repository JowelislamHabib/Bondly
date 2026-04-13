import HeroText from "./components/Home/HeroText";
import StatsCards from "./components/Home/StatsCards";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroText />
        <StatsCards />
      </div>
    </>
  );
}
