import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AppLayout from './components/AppLayout/AppLayout';
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import ContractualStaffingServices from './components/ServicesPage/ContractualStaffingServices/ContractualStaffingServices';
import PermanentStaffingSolutions from './components/ServicesPage/PermanentStaffingSolutions/PermanentStaffingSolutions';
import LeadershipHiringServices from './components/ServicesPage/LeadershipHiringServices/LeadershipHiringServices';
import OutsourcingCompaniesInDubai from './components/ServicesPage/OutsourcingCompaniesInDubai/OutsourcingCompaniesInDubai';
import ExecutiveSearchServices from './components/ServicesPage/ExecutiveSearchServices/ExecutiveSearchServices';
import BlueCollarStaffing from './components/ServicesPage/BlueCollarStaffing/BlueCollarStaffing';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicyPage';
import JobConsultancyInDubai from './components/ServicesPage/JobConsultancyInDubai/JobConsultancyInDubai';
import RecruitmentAgenciesInDubai from './components/ServicesPage/RecruitmentAgenciesInDubai/RecruitmentAgenciesInDubai';
import ITRecruitmentAgenciesInDubai from './components/ServicesPage/ITRecruitmentAgenciesInDubai/ITRecruitmentAgenciesInDubai';
import SubmitYourCV from './components/HomePage/SubmitYourCV/SubmitYourCV';
import RequestACallBack from './components/HomePage/RequestACallBack/RequestACallBack';
import DownloadBrochure from './components/HomePage/brochure/DownloadBrochure';

const App = () => {
  const rout = [
    {
      path: '/',
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
        },
        {
          path: '/about',
          element: <AboutPage></AboutPage>,
        },
        {
          path: '/contact',
          element: <ContactPage></ContactPage>,
        },
        {
          path: '/privacy-Policy',
          element: <PrivacyPolicyPage></PrivacyPolicyPage>,
        },
        {
          path: '/services',
          element: <ServicesPage></ServicesPage>,
        },
        {
          path: '/services/Contractual-Staffing-Services',
          element: <ContractualStaffingServices></ContractualStaffingServices>,
        },
        {
          path: '/services/Executive-Search',
          element: <ExecutiveSearchServices></ExecutiveSearchServices>,
        },
        {
          path: '/services/Permanent-Staffing-solution',
          element: <PermanentStaffingSolutions></PermanentStaffingSolutions>,
        },
        {
          path: '/services/Blue-Collar-Staffing',
          element: <BlueCollarStaffing></BlueCollarStaffing>,
        },
        {
          path: '/services/Leadership-Hiring',
          element: <LeadershipHiringServices></LeadershipHiringServices>,
        },
        {
          path: '/services/Staff-Outsourcing',
          element: <OutsourcingCompaniesInDubai></OutsourcingCompaniesInDubai>,
        },
        {
          path: '/job-consultancy-in-dubai',
          element: <JobConsultancyInDubai></JobConsultancyInDubai>,
        },
        {
          path: '/recruitment-agencies-in-dubai',
          element: <RecruitmentAgenciesInDubai></RecruitmentAgenciesInDubai>,
        },
        {
          path: '/outsourcing-companies-in-dubai',
          element: <OutsourcingCompaniesInDubai></OutsourcingCompaniesInDubai>,
        },
        {
          path: '/it-recruitment-agencies-in-dubai',
          element: (
            <ITRecruitmentAgenciesInDubai></ITRecruitmentAgenciesInDubai>
          ),
        },
        {
          path: '/request-a-call-back',
          element: <RequestACallBack></RequestACallBack>,
        },
        {
          path: '/submit-your-cv',
          element: <SubmitYourCV></SubmitYourCV>,
        },
        {
          path: '/download-brochure',
          element: <DownloadBrochure></DownloadBrochure>,
        },
      ],
    },
  ];
  const router = createBrowserRouter(rout);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
