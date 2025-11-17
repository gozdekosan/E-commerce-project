import FeaturedPosts from "../components/FeaturedPosts.jsx";
import NewCollection from "../components/NewCollection.jsx";
import SummerCollection from "../components/SummerCollection.jsx";
import EditorsPick from "../components/EditorsPick.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";



export default function HomePage() {
 

  return (
    <div className="flex flex-col ">
      <NewCollection />
      <EditorsPick />
      <FeaturedProducts />
      <SummerCollection />
      <FeaturedPosts />
    </div>
  );
}
