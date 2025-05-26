import React from 'react';
import Manufacturing from './../../../assets/INDUSTRIES/Manufacturing.png';
import Automobile from './../../../assets/INDUSTRIES/automobile.png';
import FMCG from './../../../assets/INDUSTRIES/FMCG.png';
import InformationTechnology from './../../../assets/INDUSTRIES/Digital&IT.png';
import BFSI from './../../../assets/INDUSTRIES/BFSI.png';
import Healthcare from './../../../assets/INDUSTRIES/Healthcare.png';
import OilGas from './../../../assets/INDUSTRIES/Oil&Gas.png';
import Chemical from './../../../assets/INDUSTRIES/Chemical.png';

const INDUSTRIES = () => {
  const INDUSTRIESDat = [
    {
      heading: 'Manufacturing',
      imageUrl: Manufacturing,
    },
    {
      heading: 'Automobile',
      imageUrl: Automobile,
    },
    {
      heading: 'FMCG',
      imageUrl: FMCG,
    },
    {
      heading: 'Information Technology',
      imageUrl: InformationTechnology,
    },
    {
      heading: 'BFSI',
      imageUrl: BFSI,
    },
    {
      heading: 'Healthcare',
      imageUrl: Healthcare,
    },
    {
      heading: 'Oil & Gas',
      imageUrl: OilGas,
    },
    {
      heading: 'Chemical',
      imageUrl: Chemical,
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        INDUSTRIES
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {INDUSTRIESDat.map((val, index) => (
          <li
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-full h-32 sm:h-36 flex items-center justify-center bg-gray-100">
              <img
                src={val.imageUrl}
                alt={val.heading}
                className="w-3/4 h-3/4 object-contain p-4"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-700 py-4 text-center">
              {val.heading}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default INDUSTRIES;
