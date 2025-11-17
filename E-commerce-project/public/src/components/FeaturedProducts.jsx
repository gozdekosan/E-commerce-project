const ProductCard = ({ title, image, price }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full h-[26.6875rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="text-center px-6 pt-6 pb-9">
        <h3
          className="text-base font-bold text-[#252B42] mb-2.5"
          style={{ fontFamily: "Montserrat" }}
        >
          {title}
        </h3>

        <p
          className="text-sm font-bold text-[#737373] mb-2.5"
          style={{ fontFamily: "Montserrat" }}
        >
          English Department
        </p>

        <div className="flex justify-center items-center gap-2 mb-2.5">
          <span
            className="text-base font-bold text-[#BDBDBD]"
            style={{ fontFamily: "Montserrat" }}
          >
            $16.48
          </span>
          <span
            className="text-base font-bold text-[#23856D]"
            style={{ fontFamily: "Montserrat" }}
          >
            ${price}
          </span>
        </div>

        <div className="flex justify-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const featured = [
    { id: 1, title: "Casual Jacket", price: 59.99, image: "/images/featuredprod-1.png" },  
    { id: 2, title: "Leather Bag", price: 89.99, image: "/images/featuredprod-2.png" },
    { id: 3, title: "Sneakers", price: 69.99, image: "/images/featuredprod-3.png" },
    { id: 4, title: "Sunglasses", price: 29.99, image: "/images/featuredprod-4.png" },
    { id: 5, title: "Casual Jacket", price: 59.99, image: "/images/featuredprod-5.png" },
    { id: 6, title: "Leather Bag", price: 89.99, image: "/images/featuredprod-6.png" },
    { id: 7, title: "Sneakers", price: 69.99, image: "/images/featuredprod-7.png" },
    { id: 8, title: "Sunglasses", price: 29.99, image: "/images/featuredprod-8.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12 px-6">
        <h3
          className="text-xl text-[#737373] mb-2.5"
          style={{ fontFamily: "Montserrat" }}
        >
          Featured Products
        </h3>
        <h2
          className="text-2xl font-bold text-[#252B42] mb-2.5"
          style={{ fontFamily: "Montserrat" }}
        >
          BESTSELLER PRODUCTS
        </h2>
        <p
          className="text-sm text-[#737373]"
          style={{ fontFamily: "Montserrat" }}
        >
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="max-w-[71.25rem] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;