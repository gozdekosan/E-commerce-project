import { ChevronRight } from 'react-feather';


const faqs = [
  { 
    id: 1, 
    question: "the quick fox jumps over the lazy dog", 
    answer: "Met enim non desert Alama est sit clissey dolor do met sami. RELIT official consequant dolor ENIM. RELIT Molle. Excitation vernal consequant sent nostrum met." 
  },
  { 
    id: 2, 
    question: "the quick fox jumps over the lazy dog", 
    answer: "Met enim non desert Alama est sit clissey dolor do met sami. RELIT official consequant dolor ENIM. RELIT Molle. Excitation vernal consequant sent nostrum met." 
  },
  { 
    id: 3, 
    question: "the quick fox jumps over the lazy dog", 
    answer: "Met enim non desert Alama est sit clissey dolor do met sami. RELIT official consequant dolor ENIM. RELIT Molle. Excitation vernal consequant sent nostrum met." 
  },
  { 
    id: 4, 
    question: "the quick fox jumps over the lazy dog", 
    answer: "Met enim non desert Alama est sit clissey dolor do met sami. RELIT official consequant dolor ENIM. RELIT Molle. Excitation vernal consequant sent nostrum met." 
  },
  { 
    id: 5, 
    question: "the quick fox jumps over the lazy dog", 
    answer: "Met enim non desert Alama est sit clissey dolor do met sami. RELIT official consequant dolor ENIM. RELIT Molle. Excitation vernal consequant sent nostrum met." 
  },
  { 
    id: 6, 
    question: "the quick fox jumps over the lazy dog", 
    answer: "Met enim non desert Alama est sit clissey dolor do met sami. RELIT official consequant dolor ENIM. RELIT Molle. Excitation vernal consequant sent nostrum met." 
  },
];


const FaqItem = ({ question, answer }) => {
  const primaryColor = 'text-[#252B42]'; 
  
  return (
    <div className="mb-8">
      <div className="flex items-start mb-2">
        <ChevronRight size={20} className={`mr-2 flex-shrink-0 text-[#23A6F0]`} />
        <h4 className={`text-lg font-semibold ${primaryColor} text-left`}>
          {question}
        </h4>
      </div>
      
      <p className="text-sm text-[#737373] pl-7 text-left">
        {answer}
      </p>
    </div>
  );
};


const PricingFAQs = () => {

  const midIndex = Math.ceil(faqs.length / 2);
  const column1 = faqs.slice(0, midIndex);
  const column2 = faqs.slice(midIndex);

  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-white">
      <div className="text-center mb-16 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
          Pricing FAQs
        </h2>
        <p className="text-md text-gray-500">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-6xl mx-auto">
        <div>
          {column1.map(faq => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div>
          {column2.map(faq => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
      </div>

      <div className="text-center mt-16">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Haven't got your answer? Contact our support
        </h4>

        <button className="text-blue-500 font-bold hover:text-blue-700 transition duration-300">
          Get Support
        </button>
      </div>
    </section>
  );
};

export default PricingFAQs;