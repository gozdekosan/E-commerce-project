import FreeTrials from "../components/FreeTrials.jsx";
import Header from "../components/Header.jsx";
import ShopLogos from "../components/ShopLogos.jsx";
import SimplePricing from "../components/SimplePricing.jsx";
import PricingFaqs from "../components/PricingFaqs.jsx";


export default function PricingPage() {
 

  return (
    <div className="flex flex-col ">
    <Header />
    <SimplePricing />
    <ShopLogos />
    <PricingFaqs />
    <FreeTrials />
    </div>
  );
}
