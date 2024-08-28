import Layout from '../layout';
import { FC } from 'react';

const ContactPage: FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 min-h-screen flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage : `url('bgservices.jpg')`}}>
        
        {/* Combined Container */}
        <div className="bg-yellow-50 p-20 rounded-lg shadow-lg flex flex-col space-y-24 min-h-[600px] max-w-2xl w-full mt-10">
          
          {/* Contact Information */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-black mb-4">We'd love to hear from you!</h2>
            <p className="text-lg text-black">
              Thank you for considering Reality Work and Study Abroad for your visa needs.
              We look forward to helping you achieve your dreams.
            </p>
            <p className="text-lg text-black">
              For more information about our services or to schedule a consultation,
              please contact us at:
            </p>
            <div className="mt-12">
              <p className="text-lg text-black mb-4">
                <strong>Email</strong>
              </p>
              <a 
                href="mailto:info@realityworkstudyabroad.com" 
                className="inline-block bg-yellow-600 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-200 transition-colors"
              >
                info@realityworkstudyabroad.com
              </a>
            </div>
            <div className="mt-8">
              <p className="text-lg text-black mb-2 mt-8">
                <strong>Call & Message</strong>
              </p>
              <a 
                href="tel:+48696167379" 
                className="inline-block bg-yellow-600 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-200 transition-colors"
              >
                +48 696167379 / +250788598581
              </a>
            </div>
          </div>
          

        </div>

      </div>
    </Layout>
  );
};

export default ContactPage;
