import { Twitter, Facebook, Instagram } from 'react-feather';

const TeamMemberCard = ({ imagePath, name, title }) => {
  const primaryColor = 'text-[#23A6F0]'; 
  
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center">
      

      <img
        src={imagePath}
        alt={name}
        className="w-full h-auto object-cover rounded-md mb-4 aspect-square" 
        style={{ maxWidth: '280px' }} 
      />
      
      <h3 className="text-xl font-bold text-gray-800 mt-2">{name}</h3>
      <p className="text-sm font-semibold text-[#737373] mb-4">{title}</p>
      <div className={`flex justify-center space-x-4 ${primaryColor}`}>
        <Twitter size={20} className="hover:opacity-75 transition duration-300 cursor-pointer" />
        <Facebook size={20} className="hover:opacity-75 transition duration-300 cursor-pointer" />
        <Instagram size={20} className="hover:opacity-75 transition duration-300 cursor-pointer" />
      </div>
    </div>
  );
};


const teamMembers = [

  { id: 1, imagePath: '/images/team-1.png', name: 'Username', title: 'Profession' },
  { id: 2, imagePath: '/images/team-2.png', name: 'Username', title: 'Profession' },
  { id: 3, imagePath: '/images/team-3.png', name: 'Username', title: 'Profession' },

  { id: 4, imagePath: '/images/team-4.png', name: 'Username', title: 'Profession' },
  { id: 5, imagePath: '/images/team-5.png', name: 'Username', title: 'Profession' },
  { id: 6, imagePath: '/images/team-6.png', name: 'Username', title: 'Profession' },

  { id: 7, imagePath: '/images/team-7.png', name: 'Username', title: 'Profession' },
  { id: 8, imagePath: '/images/team-8.png', name: 'Username', title: 'Profession' },
  { id: 9, imagePath: '/images/team-9.png', name: 'Username', title: 'Profession' },
];


const MeetOurTeam = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-gray-50">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#252B42]">
          Meet Our Team
        </h2>
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

export default MeetOurTeam;