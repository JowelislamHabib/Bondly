import Footer from "./components/Footer";
import FriendsList from "./components/Home/FriendsList";
import HeroText from "./components/Home/HeroText";
import StatsCards from "./components/Home/StatsCards";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <section>
          <HeroText />
        </section>
        <section>
          <StatsCards />
        </section>
        <section>
          <FriendsList />
        </section>
      </main>
      <Footer />
    </>
  );
}
