import React, { useState } from 'react';
import './Mainpage.css'
import { Navbar } from '../../../widget/navbar/index';
import { Banner } from '../../../shared/banner/Banner';
import { Services } from '../components/Services';
import { HistoryCompany } from '../components/HistoryCompany';
import { AbousServices } from '../components/AboutServices';
import { OurWorks } from '../components/OurWorks';
import { VideosAboutWork } from '../components/VideosAboutWork';
import { SubscribeMe } from '../components/SubscribeMe';
import { Footerbar } from '../../../widget/footerbar/index';
import { Modals } from '../../../shared/ui/modals/Modals';
import { Inputs } from '../../../shared/ui/inputs/Inputs';
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts';

const Mainpage = () => {

   const [isOpen, setIsOpen] = useState(false);

   const isClose = () => {
      return;
   }

   const modalIsOpen = () => {
      setIsOpen(prev => !prev);
      console.log('alo')
   }

   return (
      <div className='main_page'>
         <div className='main_modal'>
           <Modals isOpen={isOpen} isClose={() => isClose}>
               <Inputs placeholder='Введите ваше имя'/>
               <Inputs placeholder='Введите номер телефона'/>
               <Buttons className={SizeButtons.L}><Texts align='center' size={TextSize.M} width={600} text='Подтвердить'/></Buttons>
           </Modals>
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
            <AbousServices />
         </section>
         <section className='main_ourworks'>
            <OurWorks />
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