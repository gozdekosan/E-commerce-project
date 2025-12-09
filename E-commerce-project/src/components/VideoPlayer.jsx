import { Play } from 'react-feather';


const VideoPlayer = () => {

  const videoThumbnail = '/images/video-card.png'; 
  const playButtonColor = 'text-blue-500'; 
  
  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-white">
      <div className="max-w-[988px] h-[540px] mx-auto relative rounded-xl overflow-hidden shadow-2xl">
        
        <img 
          src={videoThumbnail} 
          alt="Dağlar ve göl yansıması olan video kapağı" 
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <button 
            onClick={() => console.log('Video Oynatılıyor...')}
            className={`flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition duration-300 transform hover:scale-105 shadow-lg`}
          >
            <Play size={30} className={playButtonColor} fill={playButtonColor} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;