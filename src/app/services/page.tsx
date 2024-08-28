import Layout from '../layout';
import { FC } from 'react';

const ServicesPage: FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 space-y-8 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/bgser.jpg')` }}>
        
        {/* Countries Section */}
        <div className="bg-yellow-800 p-2 rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
          <h1 className="text-2xl text-center text-black font-bold mb-4 mt-6">Countries We Offer Services In</h1>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Poland</button>
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Hungary</button>
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Czech Republic</button>
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Canada</button>
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Malta</button>
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Serbia</button>
            <button className="bg-[#BDB76B] text-black px-3 py-1 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors">Portugal</button>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="bg-yellow-800 p-4 md:p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-black mb-4 mt-4">Our Comprehensive Services</h1>
          <ul className="flex flex-col space-y-3">
            {[
              { title: "Visa Consultation", description: "Our experts help you choose the right visa based on your individual circumstances." },
              { title: "Application Assistance", description: "We guide you through each step of the application process, ensuring accuracy and completeness." },
              { title: "Document Preparation", description: "Our team assists in gathering and preparing all necessary documents for your application." },
              { title: "Follow-up and Support", description: "We provide continuous support and updates throughout the visa process, and assistance even after your application is submitted." },
              { title: "Student Support", description: "For students, we help you not only with your visa but also in finding the right schools and securing accommodations." },
              { title: "Job and Accommodation Assistance", description: "For individuals already in the country, we assist with job changes and finding new accommodations." },
              { title: "Document Legalization", description: "We help ensure your documents are properly legalized to meet all necessary legal requirements." },
            ].map((service, index) => (
              <li key={index} className="flex flex-col">
                <button className="bg-[#BDB76B] text-black px-3 py-1.5 rounded-md shadow-md hover:bg-[#9B9A5B] transition-colors text-left">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <p className="text-sm">{service.description}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Layout>
  );
};

export default ServicesPage;
