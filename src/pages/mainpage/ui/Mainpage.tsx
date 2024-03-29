import React, { useEffect, useState, useRef} from 'react';
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

   const [showComponentServices, setShowComponentServices] = useState(false);
   
   const [showComponentHistory, setShowComponentHistory] = useState(false);

   const [showComponentCounter, setShowComponentCounter] = useState(false);

   const testRef = useRef<any>(null)


   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Разобраться с инструментами и настроить нормальные эффекты при скорле 

    const handleScroll = () => {
      let scroll = window.scrollY;
      switch(true) {
         case (scroll > 0 && scroll < 1050):
            console.log(testRef.current.getBoundingClientRect(), 'Координаты блока ');
            console.log(scroll, 'Координата скорлла');
            return setShowComponentServices(true);
         case (scroll > 1050 && scroll < 1249):
            return setShowComponentHistory(true);
         case (scroll > 0 && scroll < 1350):
            console.log('test')
            setShowComponentCounter(true);
            console.log(showComponentCounter, '1');
            console.log(showComponentHistory, '2');
            return
      }
    };

   return (
      <div className='main_page'>
         <span  className='main_navbar'>
            <Navbar />
         </span>
         <span className='main_banner'>
           <Banner /> 
         </span> 
         <div ref={testRef} className='test' />
         <span className='main_services'>
            <Services showComponent={showComponentServices}/>
         </span>
         <span className='main_history'>
            <HistoryCompany showCounter={showComponentCounter} showComponent={showComponentHistory}/>
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