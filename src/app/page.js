import FriendsList from "./components/Home/FriendsList";
import HeroText from "./components/Home/HeroText";
import StatsCards from "./components/Home/StatsCards";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroText />
        <StatsCards />
        <FriendsList />
      </div>
    </>
  );
}
