import Header from "../components/Header.jsx";
import AboutUs from "../components/AboutUs.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import TeamMembers from "../components/TeamMembers.jsx";
import CompanyLogos from "../components/CompanyLogos.jsx";
import WorkWithUs from "../components/WorkWithUs.jsx";

export default function ContactPage() {
 

  return (
    <div className="flex flex-col ">
    <Header />
    <AboutUs />
    <VideoPlayer />
    <TeamMembers />
    <CompanyLogos />
    <WorkWithUs />
    </div>
  );
}