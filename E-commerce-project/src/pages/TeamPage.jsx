
import FreeTrials from "../components/FreeTrials.jsx";
import Header from "../components/Header.jsx";
import MeetOurTeam from "../components/MeetOurTeam.jsx";
import WhatWeDo from "../components/WhatWeDo.jsx";

export default function TeamPage() {
 

  return (
    <div className="flex flex-col ">
    <Header />
    <WhatWeDo />
    <MeetOurTeam />
    <FreeTrials />
    </div>
  );
}
