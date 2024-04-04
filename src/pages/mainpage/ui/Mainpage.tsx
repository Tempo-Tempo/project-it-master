import React, { useState } from 'react';
import { Navbar } from 'widget/navbar';
import { Banner } from 'shared/banner/Banner';
import { Services } from '../components/Services';
import { HistoryCompany } from '../components/HistoryCompany';
import { AbousServices } from '../components/AboutServices';
import { OurWorks } from '../components/OurWorks';
import { VideosAboutWork } from '../components/VideosAboutWork';
import { SubscribeMe } from '../components/SubscribeMe';
import { Footerbar } from 'widget/footerbar';
import { FormForFeedback } from 'features/formForFeedback';
import './Mainpage.css';

const Mainpage = () => {

   const [isOpen, setIsOpen] = useState(false);

   const isClose = () => {
      setIsOpen(false);
      return;
   }

   const modalIsOpen = () => {
      setIsOpen(prev => !prev);
   }

   return (
      <div className='main_page'>
         <div className='main_modal'>
            <FormForFeedback isOpen={isOpen} isClose={() => isClose()}/>
         </div>  
         <section  className='main_navbar'>
            <Navbar />
         </section>
         <section className='main_banner'>
           <Banner modalIsOpen={modalIsOpen}/> 
         </section> 
         <div className='test' />
         <section className='main_services'>
            <Services />
         </section>
         <section className='main_history'>
            <HistoryCompany />
         </section>
         <section className='main_about_services'>
            <AbousServices modalIsOpen={modalIsOpen}/>
         </section>
         <section className='main_ourworks'>
            <OurWorks modalIsOpen={modalIsOpen}/>
         </section>
         <section className='main_videos_about_work'>
            <VideosAboutWork />
         </section>
         <section className='main_subscribe'>
           <SubscribeMe />
         </section>
         <section className='main_footer'>
           <Footerbar />
         </section>
      </div>
   );
};

export default Mainpage;