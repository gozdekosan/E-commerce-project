import BestsellerProducts from "../components/BestsellerProducts";
import ProductDetailsInfo from "../components/ProductDetailsInfo";
import ProductDetailsMain from "../components/ProductDetailsMain";
import ShopLogos from "../components/ShopLogos";

export default function HomePage() {
 

  return (
    <div className="flex flex-col ">
      <ProductDetailsMain />
      <ProductDetailsInfo />
      <BestsellerProducts />
      <ShopLogos />
    </div>
  );
}
