import HeroSectionPage from "./components/HeroSection";
import Marquee from "./components/Marquee";
import HeaderPage from "./components/header";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <HeroSectionPage />
      <Marquee />
    </div>
  );
}
