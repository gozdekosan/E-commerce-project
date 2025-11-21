import ShopCards from "../components/ShopCards.jsx";
import ShopCategoryCards from "../components/ShopCategoryCards.jsx";
import ShopLogos from "../components/ShopLogos.jsx";

export default function HomePage() {
 

  return (
    <div className="flex flex-col ">
      <ShopCards />
      <ShopCategoryCards />
      <ShopLogos />
    </div>
  );
}