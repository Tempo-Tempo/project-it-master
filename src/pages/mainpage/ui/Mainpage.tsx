import React from 'react';
import './Mainpage.css'
import { Navbar } from '../../../widget/navbar/index.tsx';
import { Banner } from '../../../shared/banner/Banner.tsx';
import { Services } from '../components/Services.tsx';
import { HistoryCompany } from '../components/HistoryCompany.tsx';
import { AbousServices } from '../components/AboutServices.tsx';
import { OurWorks } from '../components/OurWorks.tsx';
import { VideosAboutWork } from '../components/VideosAboutWork.tsx';
import { SubscribeMe } from '../components/SubscribeMe.tsx';
import { Footerbar } from '../../../widget/footerbar/index.tsx';

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
         <span className='main_ourworks'>
            <OurWorks />
         </span>
         <span className='main_videos_about_work'>
            <VideosAboutWork />
         </span>
         <span className='main_subscribe'>
           <SubscribeMe />
         </span>
         <span className='main_footer'>
           <Footerbar />
         </span>
      </div>
   );
};

export default Mainpage;