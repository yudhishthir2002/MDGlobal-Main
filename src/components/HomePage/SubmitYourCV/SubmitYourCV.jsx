import { motion } from 'framer-motion';
import React, { useState } from 'react';
import img from './../../../assets/images/About/Banner.jpg';
import './SubmitYourCV.css';
import countryData from './countryData.json'

// const countryData = [
//   { code: 'AF', name: 'Afghanistan', dialCode: '+93' },
//   { code: 'AL', name: 'Albania', dialCode: '+355' },
//   { code: 'DZ', name: 'Algeria', dialCode: '+213' },
//   { code: 'AD', name: 'Andorra', dialCode: '+376' },
//   { code: 'AO', name: 'Angola', dialCode: '+244' },
//   { code: 'AI', name: 'Anguilla', dialCode: '+1-264' },
//   { code: 'AG', name: 'Antigua and Barbuda', dialCode: '+1-268' },
//   { code: 'AR', name: 'Argentina', dialCode: '+54' },
//   { code: 'AM', name: 'Armenia', dialCode: '+374' },
//   { code: 'AW', name: 'Aruba', dialCode: '+297' },
//   { code: 'AU', name: 'Australia', dialCode: '+61' },
//   { code: 'AT', name: 'Austria', dialCode: '+43' },
//   { code: 'AZ', name: 'Azerbaijan', dialCode: '+994' },
//   { code: 'BS', name: 'Bahamas', dialCode: '+1-242' },
//   { code: 'BH', name: 'Bahrain', dialCode: '+973' },
//   { code: 'BD', name: 'Bangladesh', dialCode: '+880' },
//   { code: 'BB', name: 'Barbados', dialCode: '+1-246' },
//   { code: 'BY', name: 'Belarus', dialCode: '+375' },
//   { code: 'BE', name: 'Belgium', dialCode: '+32' },
//   { code: 'BZ', name: 'Belize', dialCode: '+501' },
//   { code: 'BJ', name: 'Benin', dialCode: '+229' },
//   { code: 'BM', name: 'Bermuda', dialCode: '+1-441' },
//   { code: 'BT', name: 'Bhutan', dialCode: '+975' },
//   { code: 'BO', name: 'Bolivia', dialCode: '+591' },
//   { code: 'BA', name: 'Bosnia and Herzegovina', dialCode: '+387' },
//   { code: 'BW', name: 'Botswana', dialCode: '+267' },
//   { code: 'BR', name: 'Brazil', dialCode: '+55' },
//   { code: 'IO', name: 'British Indian Ocean Territory', dialCode: '+246' },
//   { code: 'VG', name: 'British Virgin Islands', dialCode: '+1-284' },
//   { code: 'BN', name: 'Brunei', dialCode: '+673' },
//   { code: 'BG', name: 'Bulgaria', dialCode: '+359' },
//   { code: 'BF', name: 'Burkina Faso', dialCode: '+226' },
//   { code: 'BI', name: 'Burundi', dialCode: '+257' },
//   { code: 'KH', name: 'Cambodia', dialCode: '+855' },
//   { code: 'CM', name: 'Cameroon', dialCode: '+237' },
//   { code: 'CA', name: 'Canada', dialCode: '+1' },
//   { code: 'CV', name: 'Cape Verde', dialCode: '+238' },
//   { code: 'KY', name: 'Cayman Islands', dialCode: '+1-345' },
//   { code: 'CF', name: 'Central African Republic', dialCode: '+236' },
//   { code: 'TD', name: 'Chad', dialCode: '+235' },
//   { code: 'CL', name: 'Chile', dialCode: '+56' },
//   { code: 'CN', name: 'China', dialCode: '+86' },
//   { code: 'CO', name: 'Colombia', dialCode: '+57' },
//   { code: 'KM', name: 'Comoros', dialCode: '+269' },
//   { code: 'CG', name: 'Congo', dialCode: '+242' },
//   { code: 'CD', name: 'Congo (DRC)', dialCode: '+243' },
//   { code: 'CK', name: 'Cook Islands', dialCode: '+682' },
//   { code: 'CR', name: 'Costa Rica', dialCode: '+506' },
//   { code: 'HR', name: 'Croatia', dialCode: '+385' },
//   { code: 'CU', name: 'Cuba', dialCode: '+53' },
//   { code: 'CY', name: 'Cyprus', dialCode: '+357' },
//   { code: 'CZ', name: 'Czech Republic', dialCode: '+420' },
//   { code: 'DK', name: 'Denmark', dialCode: '+45' },
//   { code: 'DJ', name: 'Djibouti', dialCode: '+253' },
//   { code: 'DM', name: 'Dominica', dialCode: '+1-767' },
//   { code: 'DO', name: 'Dominican Republic', dialCode: '+1-809' },
//   { code: 'EC', name: 'Ecuador', dialCode: '+593' },
//   { code: 'EG', name: 'Egypt', dialCode: '+20' },
//   { code: 'SV', name: 'El Salvador', dialCode: '+503' },
//   { code: 'GQ', name: 'Equatorial Guinea', dialCode: '+240' },
//   { code: 'ER', name: 'Eritrea', dialCode: '+291' },
//   { code: 'EE', name: 'Estonia', dialCode: '+372' },
//   { code: 'ET', name: 'Ethiopia', dialCode: '+251' },
//   { code: 'FK', name: 'Falkland Islands', dialCode: '+500' },
//   { code: 'FO', name: 'Faroe Islands', dialCode: '+298' },
//   { code: 'FJ', name: 'Fiji', dialCode: '+679' },
//   { code: 'FI', name: 'Finland', dialCode: '+358' },
//   { code: 'FR', name: 'France', dialCode: '+33' },
//   { code: 'GF', name: 'French Guiana', dialCode: '+594' },
//   { code: 'PF', name: 'French Polynesia', dialCode: '+689' },
//   { code: 'GA', name: 'Gabon', dialCode: '+241' },
//   { code: 'GM', name: 'Gambia', dialCode: '+220' },
//   { code: 'GE', name: 'Georgia', dialCode: '+995' },
//   { code: 'DE', name: 'Germany', dialCode: '+49' },
//   { code: 'GH', name: 'Ghana', dialCode: '+233' },
//   { code: 'GI', name: 'Gibraltar', dialCode: '+350' },
//   { code: 'GR', name: 'Greece', dialCode: '+30' },
//   { code: 'GL', name: 'Greenland', dialCode: '+299' },
//   { code: 'GD', name: 'Grenada', dialCode: '+1-473' },
//   { code: 'GP', name: 'Guadeloupe', dialCode: '+590' },
//   { code: 'GU', name: 'Guam', dialCode: '+1-671' },
//   { code: 'GT', name: 'Guatemala', dialCode: '+502' },
//   { code: 'GN', name: 'Guinea', dialCode: '+224' },
//   { code: 'GW', name: 'Guinea-Bissau', dialCode: '+245' },
//   { code: 'GY', name: 'Guyana', dialCode: '+592' },
//   { code: 'HT', name: 'Haiti', dialCode: '+509' },
//   { code: 'HN', name: 'Honduras', dialCode: '+504' },
//   { code: 'HK', name: 'Hong Kong', dialCode: '+852' },
//   { code: 'HU', name: 'Hungary', dialCode: '+36' },
//   { code: 'IS', name: 'Iceland', dialCode: '+354' },
//   { code: 'IN', name: 'India', dialCode: '+91' },
//   { code: 'ID', name: 'Indonesia', dialCode: '+62' },
//   { code: 'IR', name: 'Iran', dialCode: '+98' },
//   { code: 'IQ', name: 'Iraq', dialCode: '+964' },
//   { code: 'IE', name: 'Ireland', dialCode: '+353' },
//   { code: 'IL', name: 'Israel', dialCode: '+972' },
//   { code: 'IT', name: 'Italy', dialCode: '+39' },
//   { code: 'JM', name: 'Jamaica', dialCode: '+1-876' },
//   { code: 'JP', name: 'Japan', dialCode: '+81' },
//   { code: 'JO', name: 'Jordan', dialCode: '+962' },
//   { code: 'KZ', name: 'Kazakhstan', dialCode: '+7' },
//   { code: 'KE', name: 'Kenya', dialCode: '+254' },
//   { code: 'KI', name: 'Kiribati', dialCode: '+686' },
//   { code: 'KP', name: 'North Korea', dialCode: '+850' },
//   { code: 'KR', name: 'South Korea', dialCode: '+82' },
//   { code: 'KW', name: 'Kuwait', dialCode: '+965' },
//   { code: 'KG', name: 'Kyrgyzstan', dialCode: '+996' },
//   { code: 'LA', name: 'Laos', dialCode: '+856' },
//   { code: 'LV', name: 'Latvia', dialCode: '+371' },
//   { code: 'LB', name: 'Lebanon', dialCode: '+961' },
//   { code: 'LS', name: 'Lesotho', dialCode: '+266' },
//   { code: 'LR', name: 'Liberia', dialCode: '+231' },
//   { code: 'LY', name: 'Libya', dialCode: '+218' },
//   { code: 'LI', name: 'Liechtenstein', dialCode: '+423' },
//   { code: 'LT', name: 'Lithuania', dialCode: '+370' },
//   { code: 'LU', name: 'Luxembourg', dialCode: '+352' },
//   { code: 'MO', name: 'Macau', dialCode: '+853' },
//   { code: 'MK', name: 'North Macedonia', dialCode: '+389' },
//   { code: 'MG', name: 'Madagascar', dialCode: '+261' },
//   { code: 'MW', name: 'Malawi', dialCode: '+265' },
//   { code: 'MY', name: 'Malaysia', dialCode: '+60' },
//   { code: 'MV', name: 'Maldives', dialCode: '+960' },
//   { code: 'ML', name: 'Mali', dialCode: '+223' },
//   { code: 'MT', name: 'Malta', dialCode: '+356' },
//   { code: 'MH', name: 'Marshall Islands', dialCode: '+692' },
//   { code: 'MQ', name: 'Martinique', dialCode: '+596' },
//   { code: 'MR', name: 'Mauritania', dialCode: '+222' },
//   { code: 'MU', name: 'Mauritius', dialCode: '+230' },
//   { code: 'YT', name: 'Mayotte', dialCode: '+262' },
//   { code: 'MX', name: 'Mexico', dialCode: '+52' },
//   { code: 'FM', name: 'Micronesia', dialCode: '+691' },
//   { code: 'MD', name: 'Moldova', dialCode: '+373' },
//   { code: 'MC', name: 'Monaco', dialCode: '+377' },
//   { code: 'MN', name: 'Mongolia', dialCode: '+976' },
//   { code: 'ME', name: 'Montenegro', dialCode: '+382' },
//   { code: 'MS', name: 'Montserrat', dialCode: '+1-664' },
//   { code: 'MA', name: 'Morocco', dialCode: '+212' },
//   { code: 'MZ', name: 'Mozambique', dialCode: '+258' },
//   { code: 'MM', name: 'Myanmar', dialCode: '+95' },
//   { code: 'NA', name: 'Namibia', dialCode: '+264' },
//   { code: 'NR', name: 'Nauru', dialCode: '+674' },
//   { code: 'NP', name: 'Nepal', dialCode: '+977' },
//   { code: 'NL', name: 'Netherlands', dialCode: '+31' },
//   { code: 'NC', name: 'New Caledonia', dialCode: '+687' },
//   { code: 'NZ', name: 'New Zealand', dialCode: '+64' },
//   { code: 'NI', name: 'Nicaragua', dialCode: '+505' },
//   { code: 'NE', name: 'Niger', dialCode: '+227' },
//   { code: 'NG', name: 'Nigeria', dialCode: '+234' },
//   { code: 'NU', name: 'Niue', dialCode: '+683' },
//   { code: 'NF', name: 'Norfolk Island', dialCode: '+672' },
//   { code: 'MP', name: 'Northern Mariana Islands', dialCode: '+1-670' },
//   { code: 'NO', name: 'Norway', dialCode: '+47' },
//   { code: 'OM', name: 'Oman', dialCode: '+968' },
//   { code: 'PK', name: 'Pakistan', dialCode: '+92' },
//   { code: 'PW', name: 'Palau', dialCode: '+680' },
//   { code: 'PS', name: 'Palestine', dialCode: '+970' },
//   { code: 'PA', name: 'Panama', dialCode: '+507' },
//   { code: 'PG', name: 'Papua New Guinea', dialCode: '+675' },
//   { code: 'PY', name: 'Paraguay', dialCode: '+595' },
//   { code: 'PE', name: 'Peru', dialCode: '+51' },
//   { code: 'PH', name: 'Philippines', dialCode: '+63' },
//   { code: 'PL', name: 'Poland', dialCode: '+48' },
//   { code: 'PT', name: 'Portugal', dialCode: '+351' },
//   { code: 'PR', name: 'Puerto Rico', dialCode: '+1-787' },
//   { code: 'QA', name: 'Qatar', dialCode: '+974' },
//   { code: 'RE', name: 'Réunion', dialCode: '+262' },
//   { code: 'RO', name: 'Romania', dialCode: '+40' },
//   { code: 'RU', name: 'Russia', dialCode: '+7' },
//   { code: 'RW', name: 'Rwanda', dialCode: '+250' },
//   { code: 'BL', name: 'Saint Barthélemy', dialCode: '+590' },
//   { code: 'SH', name: 'Saint Helena', dialCode: '+290' },
//   { code: 'KN', name: 'Saint Kitts and Nevis', dialCode: '+1-869' },
//   { code: 'LC', name: 'Saint Lucia', dialCode: '+1-758' },
//   { code: 'MF', name: 'Saint Martin', dialCode: '+590' },
//   { code: 'PM', name: 'Saint Pierre and Miquelon', dialCode: '+508' },
//   { code: 'VC', name: 'Saint Vincent and the Grenadines', dialCode: '+1-784' },
//   { code: 'WS', name: 'Samoa', dialCode: '+685' },
//   { code: 'SM', name: 'San Marino', dialCode: '+378' },
//   { code: 'ST', name: 'São Tomé and Príncipe', dialCode: '+239' },
//   { code: 'SA', name: 'Saudi Arabia', dialCode: '+966' },
//   { code: 'SN', name: 'Senegal', dialCode: '+221' },
//   { code: 'RS', name: 'Serbia', dialCode: '+381' },
//   { code: 'SC', name: 'Seychelles', dialCode: '+248' },
//   { code: 'SL', name: 'Sierra Leone', dialCode: '+232' },
//   { code: 'SG', name: 'Singapore', dialCode: '+65' },
//   { code: 'SX', name: 'Sint Maarten', dialCode: '+1-721' },
//   { code: 'SK', name: 'Slovakia', dialCode: '+421' },
//   { code: 'SI', name: 'Slovenia', dialCode: '+386' },
//   { code: 'SB', name: 'Solomon Islands', dialCode: '+677' },
//   { code: 'SO', name: 'Somalia', dialCode: '+252' },
//   { code: 'ZA', name: 'South Africa', dialCode: '+27' },
//   { code: 'SS', name: 'South Sudan', dialCode: '+211' },
//   { code: 'ES', name: 'Spain', dialCode: '+34' },
//   { code: 'LK', name: 'Sri Lanka', dialCode: '+94' },
//   { code: 'SD', name: 'Sudan', dialCode: '+249' },
//   { code: 'SR', name: 'Suriname', dialCode: '+597' },
//   { code: 'SJ', name: 'Svalbard and Jan Mayen', dialCode: '+47' },
//   { code: 'SZ', name: 'Eswatini', dialCode: '+268' },
//   { code: 'SE', name: 'Sweden', dialCode: '+46' },
//   { code: 'CH', name: 'Switzerland', dialCode: '+41' },
//   { code: 'SY', name: 'Syria', dialCode: '+963' },
//   { code: 'TW', name: 'Taiwan', dialCode: '+886' },
//   { code: 'TJ', name: 'Tajikistan', dialCode: '+992' },
//   { code: 'TZ', name: 'Tanzania', dialCode: '+255' },
//   { code: 'TH', name: 'Thailand', dialCode: '+66' },
//   { code: 'TL', name: 'Timor-Leste', dialCode: '+670' },
//   { code: 'TG', name: 'Togo', dialCode: '+228' },
//   { code: 'TK', name: 'Tokelau', dialCode: '+690' },
//   { code: 'TO', name: 'Tonga', dialCode: '+676' },
//   { code: 'TT', name: 'Trinidad and Tobago', dialCode: '+1-868' },
//   { code: 'TN', name: 'Tunisia', dialCode: '+216' },
//   { code: 'TR', name: 'Turkey', dialCode: '+90' },
//   { code: 'TM', name: 'Turkmenistan', dialCode: '+993' },
//   { code: 'TC', name: 'Turks and Caicos Islands', dialCode: '+1-649' },
//   { code: 'TV', name: 'Tuvalu', dialCode: '+688' },
//   { code: 'UG', name: 'Uganda', dialCode: '+256' },
//   { code: 'UA', name: 'Ukraine', dialCode: '+380' },
//   { code: 'AE', name: 'United Arab Emirates', dialCode: '+971' },
//   { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
//   { code: 'US', name: 'United States', dialCode: '+1' },
//   { code: 'UY', name: 'Uruguay', dialCode: '+598' },
//   { code: 'UZ', name: 'Uzbekistan', dialCode: '+998' },
//   { code: 'VU', name: 'Vanuatu', dialCode: '+678' },
//   { code: 'VE', name: 'Venezuela', dialCode: '+58' },
//   { code: 'VN', name: 'Vietnam', dialCode: '+84' },
//   { code: 'WF', name: 'Wallis and Futuna', dialCode: '+681' },
//   { code: 'EH', name: 'Western Sahara', dialCode: '+212' },
//   { code: 'YE', name: 'Yemen', dialCode: '+967' },
//   { code: 'ZM', name: 'Zambia', dialCode: '+260' },
//   { code: 'ZW', name: 'Zimbabwe', dialCode: '+263' },
// ];

const SubmitYourCV = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
    email: '',
    designation: '',
    salary: '',
    cv: null,
    country: '',
    countryCode: '+91', // Default to US
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, cv: files[0] });
    } else if (name === 'country') {
      const selectedCountry = countryData.find((c) => c.code === value);
      setFormData({
        ...formData,
        country: value,
        countryCode: selectedCountry ? selectedCountry.dialCode : '+1',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhoneNumber = `${formData.countryCode}${formData.mobile}`;
    const submittedData = {
      ...formData,
      fullPhoneNumber,
    };
    console.log('Form Data Submitted:', submittedData);
    // Add actual submission logic here (e.g., API call, EmailJS, Formspree)
  };

  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <>
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Submit Your CV
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main>
        <div className="cv-form-container custom-cv-form-spacing bg-white shadow-md rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Submit Your CV
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Full Name<span className="star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="custom-input-name w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="Email" className="block font-medium mb-1">
                Email Address<span className="star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block font-medium mb-1">
                Country <span className="star">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countryData.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.dialCode})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mobile" className="block font-medium mb-1">
                Mobile Number <span className="star">*</span>
              </label>
              <div className="flex">
                <span
                  className="custom-input-mobile w-1/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ minWidth: '60px', textAlign: 'center' }}
                >
                  {formData.countryCode}
                </span>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="custom-input-mobile w-3/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your mobile number"
                  required
                  pattern="[0-9]{7,15}"
                  title="Please enter a valid mobile number (7-15 digits)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="designation" className="block font-medium mb-1">
                Your designation<span className="star">*</span>
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="salary" className="block font-medium mb-1">
                Current / Last salary *INR
                <span className="star">*</span>
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message<span className="star">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="custom-input-message w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="cv"
                className="block border text-center border-black w-24 font-medium mb-1"
              >
                Upload CV
                <span className="star">*</span>
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="custom-input-cv w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="w-40 h-12 bg-blue-600 text-white py-2 md:py-3 rounded-2xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SubmitYourCV;
