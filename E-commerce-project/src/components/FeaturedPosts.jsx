import { Clock, MessageSquare, ChevronRight } from 'lucide-react';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "src/images/featuredpost-1.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 2,
      image: "src/images/featuredpost-2.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 3,
      image: "src/images/featuredpost-3.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10
    }
  ];

  return (
    <div className="w-full bg-white py-28 px-6">
      <div className="max-w-[71.25rem] mx-auto">
  
        <div className="text-center mb-20">
          <p className="text-[#23A6F0] font-bold text-sm mb-2.5" style={{ fontFamily: 'Montserrat' }}>
            Practice Advice
          </p>
          <h2 className="text-[2.5rem] font-base font-bold text-[#252B42] mb-2.5 leading-tight" style={{ fontFamily: 'Montserrat' }}>
            Featured Posts
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed font-normal" style={{ fontFamily: 'Montserrat' }}>
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
           
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-[18.75rem] object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#E74040] text-white text-sm font-bold px-2.5 py-0.5 rounded shadow-sm" style={{ fontFamily: 'Montserrat' }}>
                    NEW
                  </span>
                </div>
              </div>

    
              <div className="px-6 pt-6 pb-9">
                <div className="flex gap-4 mb-2.5 text-xs" style={{ fontFamily: 'Montserrat' }}>
                  <span className="text-[#8EC2F2] font-normal">Google</span>
                  <span className="text-[#737373] font-normal">Trending</span>
                  <span className="text-[#737373] font-normal">New</span>
                </div>

          
                <h3 className="text-xl font-normal text-[#252B42] mb-2.5 leading-snug" style={{ fontFamily: 'Montserrat' }}>
                  {post.title}
                </h3>

 
                <p className="text-[#737373] text-sm leading-relaxed mb-4" style={{ fontFamily: 'Montserrat' }}>
                  {post.description}
                </p>

          
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[#737373] text-xs" style={{ fontFamily: 'Montserrat' }}>
                    <Clock className="w-4 h-4" />
                    <span>22 April 2021</span>
                  </div>

             
                  <div className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'Montserrat' }}>
                    <MessageSquare className="w-4 h-4 text-[#23856D]" />
                    <span className="text-[#737373]">10 comments</span>
                  </div>
                </div>

     
                <div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] transition-colors text-sm font-bold"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;