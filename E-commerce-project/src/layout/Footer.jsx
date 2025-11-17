import React from 'react';
import { Facebook, Twitter, Instagram } from "react-feather";
import { Link } from 'react-router-dom';

const footerLinks = [
  { 
    title: "Company Info", 
    links: [
      { name: "About Us", href: "/about" }, 
      { name: "Careers", href: "/careers" }, 
      { name: "We are hiring", href: "/hiring" }, 
      { name: "Blog", href: "/blog" }
    ] 
  },
  { 
    title: "Legal", 
    links: [
      { name: "Privacy Policy", href: "/privacy" }, 
      { name: "Terms of Service", href: "/terms" }, 
      { name: "Cookie Policy", href: "/cookies" }, 
      { name: "Disclaimer", href: "/disclaimer" }
    ] 
  },
  { 
    title: "Features", 
    links: [
      { name: "Business Marketing", href: "/services" }, 
      { name: "User Analytics", href: "/services" }, 
      { name: "Live Chat", href: "/services" }, 
      { name: "Unlimited Support", href: "/services" }
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { name: "iOS & Android", href: "/resources" }, 
      { name: "Watch a Demo", href: "/resources" }, 
      { name: "Customers", href: "/resources" }, 
      { name: "API", href: "/resources" }
    ] 
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      
      <div className="bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>

            <div className="flex gap-4 text-[#23A6F0]">
                <a href="#" className="hover:opacity-75" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" className="hover:opacity-75" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="hover:opacity-75" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-start">
            
            {footerLinks.map((section, index) => (
              <div key={index} className="font-bold text-[#737373] text-left w-full">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{section.title}</h3>
                {section.links.map((link, linkIndex) => (
                  <Link 
                    key={linkIndex} 
                    to={link.href} 
                    className="text-gray-500 hover:text-gray-800 text-sm py-1 block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}

            <div className="w-full">
              <h3 className="text-lg font-bold text-[#252B42] mb-4">Get In Touch</h3>
              
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-md focus:ring-0 focus:outline-none text-[#737373] flex-grow w-full"
                />
                <button
                  type="submit"
                  className="bg-[#23A6F0] text-white font-normal py-3 px-6 rounded-md hover:bg-[#1e89cc] transition duration-200 whitespace-nowrap w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs mt-3 text-[#737373] font-normal">
                Lorem ipsum dolor sit amet
              </p>
            </div>

        </div>
      </div>


      <div className="bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center md:text-left text-gray-500 text-sm">
            <p>Made With Love By Finland. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
