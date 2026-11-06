
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeIntro from "./components/HomeIntro.jsx";
import Tracks from "./components/Tracks.jsx";
import LearningFormats from "./components/LearningFormats.jsx";
import Idea from "./components/Idea.jsx";
import FirstMove from "./components/FirstMove.jsx";
import FAQ from "./components/FAQ.jsx";

export default function App() {
  return (
    <>
      <Navbar />
    <main>
  <Hero />
  <HomeIntro />
  <Tracks />
  <LearningFormats />
  <Idea />
  <FirstMove />
  <FAQ/>
</main>
    </>
  );
}
