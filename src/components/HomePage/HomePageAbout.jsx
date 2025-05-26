import React from 'react';
import "./HomePageAbout.css";

const verticals = [
  { name: 'Manufacturing', icon: '/icons/manufacturing.png' },
  { name: 'FMCG', icon: '/icons/fmcg.png' },
  { name: 'Healthcare', icon: '/icons/healthcare.png' },
  { name: 'Oil & Gas', icon: '/icons/oilgas.png' },
  { name: 'Facility Management', icon: '/icons/facility.png' },
  { name: 'Automobile', icon: '/icons/automobile.png' },
  { name: 'BFSI', icon: '/icons/bfsi.png' },
  { name: 'Digital & IT', icon: '/icons/digitalit.png' },
];

const HomePageAbout = () => {
  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Our Verticals</h2>
          <p className="text-gray-600 mb-10">Delivering excellence to all areas of our focus.</p>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {verticals.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={item.icon} alt={item.name} className="w-16 h-16 mb-4" />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePageAbout;
