import React from 'react';

const AboutPage = () => {
  const benefits = [
    {
      title: 'Our Story',
      content: `
        Reality Work and Study Abroad was founded in 2015 by Charline Usenga,
        who experienced firsthand the challenges of obtaining a visa.
        With a passion for helping others overcome these obstacles, Charline 
        established our company to provide comprehensive support and guidance 
        for visa applicants. Since then, we have successfully assisted thousands 
        of students and professionals in securing their visas and pursuing their dreams.
      `,
    },
    {
      title: 'Our Team',
      content: `
        Our team is composed of experienced visa consultants, legal experts,
        and dedicated support staff who are passionate about helping you succeed.
        We have over 10 years of experience in visa services and a deep understanding 
        of the immigration process. Each member of our team brings a wealth of knowledge 
        and a personal commitment to ensuring your success.
      `,
    },
    {
      title: 'Why Choose Us?',
      content: `
        Choosing Reality Work and Study Abroad means benefiting from our 
        extensive experience and high success rate in visa applications.
        Our clients appreciate our personalized approach, attention to detail, 
        and commitment to their success. With years of experience and a track record 
        of successful visa processes and a very high success rate with testimonials 
        from our customers, we believe in our service and the right process to secure you a visa.
      `,
    },
  ];

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/bgabout.jpg')` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="p-6 border border-gray-200 rounded-lg shadow-md"
          >
            <div className="font-bold text-lg mb-4">
              {benefit.title}
            </div>
            <div className="text-gray-700">
              {benefit.content.trim()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
