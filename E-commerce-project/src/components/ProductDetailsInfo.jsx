import React, { useState } from 'react';
// Lucide-react'tan sağ ok ikonu (görseldeki küçük oklar için)
import { ChevronRight } from 'lucide-react';

// Mock içerik, görseldeki metinlere dayanarak
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
    // İkinci liste için tekrar eden içerik
    listItems2: [
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
        "the quick fox jumps over the lazy dog",
    ]
};


export default function ProductDetailsInfo() {
  
  // Basit Sekme Durumu Yönetimi (Varsayılan olarak Açıklama sekmesi aktif)
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews (0)' },
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-[71.25rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================= */}
        {/* SEKMELER BAŞLIĞI (TABS) */}
        {/* ======================================= */}
        <div className="border-b border-[#ECECEC] flex justify-center space-x-8 md:space-x-16 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                text-sm font-bold pb-4 transition duration-300
                ${activeTab === tab.id 
                    ? 'text-[#252B42] border-b-2 border-[#252B42]' // Aktif sekme stili
                    : 'text-[#737373] hover:text-[#252B42]' // Pasif sekme stili
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ======================================= */}
        {/* SEKMELER İÇERİĞİ (TAB CONTENT) */}
        {/* Bu örnekte sadece "Description" içeriği gösterilmektedir. */}
        {/* ======================================= */}
        {activeTab === 'description' && (
            <div className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                    
                    {/* SOL BLOK: GÖRSEL VE METİN */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 1. Başlık ve Paragraf Grubu */}
                        <h3 className="text-2xl font-bold text-[#252B42] mb-4">
                            the quick fox jumps over
                        </h3>
                        <p className="text-[#737373] text-sm leading-6">
                            {INFO_CONTENT.paragraph1}
                        </p>
                        
                        {/* 2. Başlık ve Paragraf Grubu */}
                        <h3 className="text-2xl font-bold text-[#252B42] mb-4">
                            the quick fox jumps over
                        </h3>
                        <p className="text-[#737373] text-sm leading-6">
                            {INFO_CONTENT.paragraph2}
                        </p>
                        
                        {/* 3. Sadece Paragraf */}
                        <p className="text-[#737373] text-sm leading-6">
                            {INFO_CONTENT.paragraph3}
                        </p>

                    </div>

                    {/* SAĞ BLOK: GÖRSEL VE LİSTELER */}
                    <div className="flex flex-col space-y-12">
                        
                        {/* Görsel Kutusu */}
                        <div className="w-full h-80 bg-[#FAFAFA] relative overflow-hidden">
                           <img 
                                src="/images/info-visual.png" // Bu yolu kendi görselinizle değiştirin
                                alt="Product Info Visual"
                                className="w-full h-full object-cover"
                           />
                        </div>

                        {/* İlk Liste Grubu */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">
                                the quick fox jumps over
                            </h3>
                            <ul className="space-y-2">
                                {INFO_CONTENT.listItems.map((item, index) => (
                                    <li key={index} className="flex items-start text-[#737373] text-sm">
                                        <ChevronRight size={18} className="text-[#737373] mr-2 mt-[2px]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* İkinci Liste Grubu */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">
                                the quick fox jumps over
                            </h3>
                            <ul className="space-y-2">
                                {INFO_CONTENT.listItems2.map((item, index) => (
                                    <li key={index} className="flex items-start text-[#737373] text-sm">
                                        <ChevronRight size={18} className="text-[#737373] mr-2 mt-[2px]" />
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