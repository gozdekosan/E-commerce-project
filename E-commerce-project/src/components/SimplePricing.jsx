import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'react-feather';

const PricingCard = ({ plan }) => {
  const isPrimary = plan.name === "STANDARD";
  const cardClasses = isPrimary
    ? "bg-dark-blue text-white shadow-xl transform scale-105" 
    : "bg-white text-gray-800 border border-gray-200 shadow-md"; 
  
  const titleClasses = isPrimary ? "text-white" : "text-gray-800";
  const priceColor = isPrimary ? "text-primary-light" : "text-primary";
  const buttonClasses = isPrimary
    ? "bg-white text-primary hover:bg-gray-100 border border-white" 
    : "bg-primary text-white hover:bg-blue-700"; 

  const primaryColor = 'blue-500'; 
  const darkBlue = 'rgb(30, 48, 80)';
  const primaryLightColor = '#40D3FF'; 

  return (
    <div 
      className={`flex flex-col items-center p-8 rounded-lg transition duration-500 w-full max-w-xs mx-auto ${cardClasses}`}
      style={{ backgroundColor: isPrimary ? darkBlue : 'white' }}
    >
      <h3 className={`text-2xl font-bold mb-2 ${titleClasses}`}>{plan.name}</h3>
      <p className={`text-sm mb-6 ${isPrimary ? 'text-gray-300' : 'text-gray-500'}`}>
        {plan.description}
      </p>

      <div className="flex items-end mb-6">
        <span className={`text-5xl font-bold mr-1`} style={{ color: isPrimary ? primaryLightColor : primaryColor }}>
          ${plan.price}
        </span>
        <div className={`flex flex-col text-left ${isPrimary ? 'text-white' : 'text-gray-500'}`}>
          <span className="font-bold text-lg">{plan.interval === 'Annually' ? 'Per Year' : 'Per Month'}</span>
          <span className="text-sm">Per Month</span>
        </div>
      </div>

      <ul className="w-full space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className={`flex items-start text-sm ${isPrimary ? 'text-white' : 'text-gray-800'}`}>
            <CheckCircle 
              size={18} 
              className={`mr-3 flex-shrink-0`} 
              style={{ color: primaryColor }}
            />
            {feature}
          </li>
        ))}
        {plan.excludedFeatures.map((feature, index) => (
          <li key={`ex-${index}`} className={`flex items-start text-sm ${isPrimary ? 'text-gray-400' : 'text-gray-500'}`}>
            <XCircle 
              size={18} 
              className={`mr-3 flex-shrink-0`} 
              style={{ color: primaryColor }}
            />
            {feature}
          </li>
        ))}
      </ul>

      <button 
        className={`w-full py-3 rounded-md font-bold transition duration-300 ${buttonClasses}`}
        style={{ backgroundColor: isPrimary ? 'white' : primaryColor, color: isPrimary ? darkBlue : 'white' }}
      >
        Try free for 30 days
      </button>
    </div>
  );
};


const SimplePricing = () => {
  const [pricingInterval, setPricingInterval] = useState('Monthly'); 
  const pricingData = [
    {
      name: "FREE",
      description: "Organize across all apps by hand",
      price: pricingInterval === 'Monthly' ? 0 : 0,
      interval: pricingInterval,
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
      ],
      excludedFeatures: [
        "Email and community support"
      ]
    },
    {
      name: "STANDARD",
      description: "Organize across all apps by hand",
      price: pricingInterval === 'Monthly' ? 9.99 : 99.99,
      interval: pricingInterval,
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support"
      ],
      excludedFeatures: []
    },
    {
      name: "PREMIUM",
      description: "Organize across all apps by hand",
      price: pricingInterval === 'Monthly' ? 19.99 : 199.99,
      interval: pricingInterval,
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support"
      ],
      excludedFeatures: []
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 lg:px-32 bg-gray-50">
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="text-sm font-bold text-gray-700 tracking-widest uppercase mb-2">PRICING</h2>
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          Simple Pricing
        </h1>
        <p className="text-md text-gray-500 mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="text-center text-sm font-semibold mb-16">
        <Link to="/" className="text-gray-500 hover:text-gray-800 transition duration-200">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-800">Pricing</span>
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex bg-gray-200 rounded-full p-1 relative"> 
          <button
            onClick={() => setPricingInterval('Monthly')}
            className={`py-2 px-6 rounded-full text-sm font-bold transition duration-300 ${
              pricingInterval === 'Monthly' ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-300'
            }`}
            style={{ backgroundColor: pricingInterval === 'Monthly' ? 'rgb(30, 48, 80)' : 'transparent' }}
          >
            Monthly
          </button>
          
          <button
            onClick={() => setPricingInterval('Annually')}
            className={`py-2 px-6 rounded-full text-sm font-bold transition duration-300 ${
              pricingInterval === 'Annually' ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-300'
            }`}
            style={{ backgroundColor: pricingInterval === 'Annually' ? 'rgb(30, 48, 80)' : 'transparent' }}
          >
            Yearly
          </button>

         <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-[#B2E3FF] rounded-full px-4 py-2" > {/* 💡 px-4 py-2 eklendi */}
  <span className="text-sm font-bold whitespace-nowrap text-[#23A6F0] ">
    Save 25%
  </span>
</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        
        {pricingData.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
        
      </div>
    </section>
  );
};

export default SimplePricing;