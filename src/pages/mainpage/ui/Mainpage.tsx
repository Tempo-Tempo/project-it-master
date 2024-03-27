import React from 'react';
import './Mainpage.css'
import { Navbar } from '../../../widget/navbar/index.tsx';
import { Banner } from '../../../shared/banner/Banner.tsx';
import { Services } from '../components/Services.tsx';
import { HistoryCompany } from '../components/HistoryCompany.tsx';
import { AbousServices } from '../components/AboutServices.tsx';
const Mainpage = () => {
   return (
      <div className='main_page'>
         <span  className='main_navbar'>
            <Navbar />
         </span>
         <span className='main_banner'>
           <Banner /> 
         </span> 
         <div className='test' />
         <span className='main_services'>
            <Services />
         </span>
         <span className='main_history'>
            <HistoryCompany />
         </span>
         <span className='main_about_services'>
            <AbousServices />
         </span>
      </div>
   );
};

export default Mainpage;