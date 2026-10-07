import HeroSectionPage from "./components/HeroSection";
import HeaderPage from "./components/header";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <Marquee />
      <HeroSectionPage />
    </div>
  );
}
