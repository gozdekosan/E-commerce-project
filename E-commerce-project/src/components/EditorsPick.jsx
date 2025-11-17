
 editorsProducts = [
  { id: 1, title: "MEN", link: "/shop/men", image: "src/images/men.png", size: "large" }, 
  { id: 2, title: "WOMEN", link: "/shop/women", image: "src/images/women.png", size: "tall" }, 
  { id: 3, title: "ACCESSORIES", link: "/shop/accessories", image: "src/images/accessories.png", size: "half-tall" }, 
  { id: 4, title: "KIDS", link: "/shop/kids", image: "src/images/kids.png", size: "half-tall" } 
];


const MAIN_HEIGHT_REM = '32rem'; 


const CategoryCard = ({ title, link, image, size }) => {

    const objectPosition = 
        title === "MEN" ? "object-center" : 
        title === "WOMEN" ? "object-top" :   
        title === "ACCESSORIES" ? "object-center" : 
        title === "KIDS" ? "object-center" :    
        "object-center"; 
    

    let heightClass = 'h-60'; 

    if (size === 'large' || size === 'tall') {
        heightClass = `lg:h-[${MAIN_HEIGHT_REM}]`;
    } else if (size === 'half-tall') {
        heightClass = 'lg:h-[15.5rem]'; 
    }

    return (
        <a
            href={link}
            className={`
                relative w-full overflow-hidden transition duration-300 ease-in-out group
                ${heightClass}
            `}
        >
            <img
                src={image}
                alt={title}
                className={`w-full h-full object-cover ${objectPosition} transition duration-300 group-hover:scale-105`} 
            />


            <div 
                className="absolute bottom-6 left-6 px-6 py-2 
                           border-2 border-white text-black 
                           font-bold tracking-widest text-sm
                           bg-white z-10"
                onMouseEnter={e => e.currentTarget.classList.add('bg-white', 'text-gray-800')}
                onMouseLeave={e => e.currentTarget.classList.remove('bg-white', 'text-gray-800')}
            >
                <h3>{title}</h3>
            </div>
        </a>
    );
}


export default function EditorsPick() {
  
  const menCard = editorsProducts[0]; 
  const womenCard = editorsProducts[1]; 
  const accessoriesCard = editorsProducts[2]; 
  const kidsCard = editorsProducts[3]; 
  
  return (
    <div className="bg-[#FAFAFA] py-10"> 
        
        <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            

            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 tracking-wider text-gray-800">EDITOR'S PICK</h2>
                <p className="mb-4 text-gray-500 text-sm">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4"> 
                <div className="flex w-full lg:w-1/2"> 
                    <CategoryCard {...menCard} size="large" />
                </div>
                <div className={`flex w-full lg:w-1/2 gap-4 lg:h-[${MAIN_HEIGHT_REM}]`}> 
             
                    <div className="flex w-full lg:w-1/2 h-full"> 
                        <CategoryCard {...womenCard} size="tall" />
                    </div>
                    
                    <div className="flex flex-col w-full lg:w-1/2 gap-4 h-full">
                        
                        <CategoryCard {...accessoriesCard} size="half-tall" />
                        <CategoryCard {...kidsCard} size="half-tall" />
                        
                    </div>

                </div>

            </div>
        </section>
    </div>
  );
}