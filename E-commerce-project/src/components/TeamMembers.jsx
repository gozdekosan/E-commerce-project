import { Twitter, Facebook, Instagram } from 'react-feather';


const TeamMemberCard = ({ imagePath, name, title }) => {
  const primaryColor = 'text-blue-500'; 
  
  return (
    <div className="flex flex-col items-center bg-white text-center">
      
      <img
        src={imagePath}
        alt={name}
        className="w-full h-auto object-cover aspect-square rounded-md" 
        style={{ maxWidth: '280px' }} 
      />

      <h3 className="text-xl font-bold text-gray-800 mt-4">{name}</h3>
      <p className="text-sm font-semibold text-gray-500 mb-4">{title}</p>
      
      <div className={`flex justify-center space-x-4 ${primaryColor}`}>
        <Twitter size={20} className="hover:opacity-75 transition duration-300 cursor-pointer" />
        <Facebook size={20} className="hover:opacity-75 transition duration-300 cursor-pointer" />
        <Instagram size={20} className="hover:opacity-75 transition duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

const teamMembers = [
  { id: 1, imagePath: '/images/meet-our-team-1.png', name: 'Username', title: 'Profession' },
  { id: 2, imagePath: '/images/meet-our-team-2.png', name: 'Username', title: 'Profession' },
  { id: 3, imagePath: '/images/meet-our-team-3.png', name: 'Username', title: 'Profession' },
];

const TeamMembers = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-white">
      <div className="text-center mb-12 max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Meet Our Team
        </h2>
        <p className="text-sm text-gray-500">
            Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {teamMembers.map(member => (
          <TeamMemberCard 
            key={member.id}
            imagePath={member.imagePath}
            name={member.name}
            title={member.title}
          />
        ))}
        
      </div>
    </section>
  );
};

export default TeamMembers;