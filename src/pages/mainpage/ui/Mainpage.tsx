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
import { Modals } from '../../../shared/ui/modals/Modals.tsx';
import { Inputs } from '../../../shared/ui/inputs/Inputs.tsx';
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts.tsx';

const Mainpage = () => {

   const isClose = () => {
      return;
   }

   return (
      <div className='main_page'>
         {/* <div className='main_modal'>
           <Modals isOpen={false} isClose={() => isClose()}>
               <Inputs placeholder='Введите ваше имя'/>
               <Inputs placeholder='Введите номер телефона'/>
               <Buttons className={SizeButtons.L}><Texts align='center' size={TextSize.M} width={600} text='Подтвердить'/></Buttons>
           </Modals>
         </div> */}
         
         <section  className='main_navbar'>
            <Navbar />
         </section>
         <section className='main_banner'>
           <Banner /> 
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