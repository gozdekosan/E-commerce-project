export default function ProductCard({ title, price, image }) {
  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-gray-800 font-semibold mb-1">{title}</h3>
        <p className="text-[#BDBDBD] line-through text-sm">$ {price.toFixed(2)}</p>
        <p className="text-[#23856D] font-bold">$ { (price * 0.4).toFixed(2) }</p>
      </div>


      <div className="flex justify-center space-x-4 pb-4 space-between">
        <span className="w-3 h-3 rounded-full bg-[#23A6F0]"></span>
        <span className="w-3 h-3 rounded-full bg-[#23856D]"></span>
        <span className="w-3 h-3 rounded-full bg-[#E77C40]"></span>
        <span className="w-3 h-3 rounded-full bg-[#252B42]"></span>
      </div>
    </div>
  );
}
