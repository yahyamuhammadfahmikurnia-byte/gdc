import Findyourspark from "../components/findyourspark.jsx";
import  Explore from "../components/exploreyourinterest.jsx"
import  Interest from "../components/fromaninterest.jsx"
import Format from "../components/theformatchanges.jsx"
import Journey from "../components/Ajourney.jsx";
import BringYourCuriosity from "../components/bringyourcuriosity copy.jsx";
export default function Overview() {
  return (
    <main>
      <Findyourspark />\
      <Explore/>
      <Interest/>
      <Format/>
      <Journey/>
      <BringYourCuriosity/>
    </main>
  );
}