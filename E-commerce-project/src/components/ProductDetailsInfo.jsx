import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const INFO_CONTENT = {
    paragraph1: "Met minim Mollie non desert Alamo est sit aliquip dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    paragraph2: "Met minim Mollie non desert Alamo est sit aliquip dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    paragraph3: "Met minim Mollie non desert Alamo est sit aliquip dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    listItems: [
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
    ],
    listItems2: [
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
    ]
};

export default function ProductDetailsInfo() {
  
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews (0)' },
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#ECECEC] flex justify-start space-x-8 md:space-x-16 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                text-sm font-bold pb-4 transition duration-300
                ${activeTab === tab.id 
                    ? 'text-[#252B42] border-b-2 border-[#252B42]'
                    : 'text-[#737373] hover:text-[#252B42]'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'description' && (
            <div className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 lg:items-stretch">
                    <div className="lg:col-span-1 relative overflow-hidden rounded-md order-1 lg:order-1"> 
                        <div className="w-full h-full min-h-[300px] lg:min-h-full bg-[#FAFAFA]">
                           <img 
                                src="/images/prod-details-1.png" 
                                alt="Product Info Visual"
                                className="w-full h-full object-cover" 
                           />
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-4 order-3 lg:order-2"> 
                        
                        <h3 className="text-2xl font-bold text-[#252B42] mb-4">
                            the quick fox jumps over
                        </h3>
                        <p className="text-[#737373] text-sm leading-6">
                            {INFO_CONTENT.paragraph1}
                        </p>
                        
                        <p className="text-[#737373] text-sm leading-6">
                            {INFO_CONTENT.paragraph2}
                        </p>
                        
                        <p className="text-[#737373] text-sm leading-6">
                            {INFO_CONTENT.paragraph3}
                        </p>
                    </div>

       
                    <div className="lg:col-span-1 space-y-8 order-2 lg:order-3">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">
                                the quick fox jumps over
                            </h3>
                            <ul className="space-y-2">
                                {INFO_CONTENT.listItems.map((item, index) => (
                                    <li key={index} className="flex items-start text-[#737373] text-sm">
                                        <ChevronRight size={18} className="text-[#737373] mr-2 mt-[2px] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">
                                the quick fox jumps over
                            </h3>
                            <ul className="space-y-2">
                                {INFO_CONTENT.listItems2.map((item, index) => (
                                    <li key={index} className="flex items-start text-[#737373] text-sm">
                                        <ChevronRight size={18} className="text-[#737373] mr-2 mt-[2px] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )}

      </div>
      
    </section>
  );
}