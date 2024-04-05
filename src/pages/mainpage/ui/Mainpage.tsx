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
import { useInView } from 'react-intersection-observer';
import top from 'shared/icons/top-arrow.svg';
import { Images } from 'shared/ui/images/Images';
import './Mainpage.css';

const Mainpage = () => {

   const [isOpen, setIsOpen] = useState<boolean>(false);

   const isClose = () => {
      setIsOpen(false);
      return;
   }

    const {ref, inView} = useInView({
      threshold: 0.2,
   })

   const btnStyle = inView ? 'activeImg' : 'nonactiveImg';

   const modalIsOpen = () => {
      setIsOpen(prev => !prev);
   }

   const scrollToSection = (refName: string) => {
      const anyRef = document.getElementById(refName) as HTMLElement | null;
      anyRef?.scrollIntoView({
         behavior: "smooth"
      })
   }

   return (
      <div className='main_page'>
         <div className='main_modal'>
            <FormForFeedback isOpen={isOpen} isClose={() => isClose()}/>
         </div>
         <div onClick={() => scrollToSection('navbar')} 
         className={`top_btn ${btnStyle}`}>
            <Images img={top}/>
         </div> 
         <section id='navbar' className='main_navbar'>
            <Navbar scrollToSection={(refName: string) => scrollToSection(refName)}/>
         </section>
         <section className='main_banner'>
           <Banner modalIsOpen={modalIsOpen}/> 
         </section> 
         <div className='test' />
         <div ref={ref}>
            <section id='about_company' className='main_services'>
            <Services />
         </section>
         <section id='history_company'  className='main_history'>
            <HistoryCompany />
         </section>
         <section id='services' className='main_about_services'>
            <AbousServices modalIsOpen={modalIsOpen}/>
         </section>
         <section id='our_works' className='main_ourworks'>
            <OurWorks modalIsOpen={modalIsOpen}/>
         </section>
         <section className='main_videos_about_work'>
            <VideosAboutWork />
         </section>
         <section className='main_subscribe'>
           <SubscribeMe />
         </section>
         <section id='contacts' className='main_footer'>
           <Footerbar />
         </section>
         </div>
         
      </div>
   );
};

export default Mainpage;