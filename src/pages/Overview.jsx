
import Findyourspark from "../components/findyourspark.jsx";
import ExploreYourInterest from "../components/exploreyourinterest.jsx";
import FromAnInterest from "../components/fromaninterest.jsx";
import TheFormatChanges from "../components/theformatchanges.jsx";
import AJourney from "../components/Ajourney.jsx";

export default function Overview() {
  return (
    <main>
      <Findyourspark />

      <div id="learning-tracks" className="scroll-mt-36">
        <ExploreYourInterest />
      </div>

      <FromAnInterest />

      <div id="learning-formats" className="scroll-mt-36">
        <TheFormatChanges />
      </div>

      <div id="learning-journey" className="scroll-mt-36">
        <AJourney />
      </div>
    </main>
  );
}
