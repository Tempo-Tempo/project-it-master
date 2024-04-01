import React from 'react';
import './Navbar.css';
import img from '../../../shared/icons/logo.png';
import { Images } from '../../../shared/ui/images/Images.tsx';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts.tsx';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
   const {ref, inView} = useInView({
      threshold: 0,
      triggerOnce: true
   })

   const testStyle = inView ? 'haeader_wrapper_active' : '';
   return (
      <div className={`haeader_wrapper ${testStyle}`}>
        <div  ref={ref}  className='container'>
            <span className='logo_wrapper'>
               <Images img={img} width={58} height={42}/>
               <Texts text='- МАСТЕР' size={TextSize.L}/>
            </span>
         <ul className='main_header'>
            <nav>
               <Texts text='Главная' size={TextSize.M}/>
            </nav>
            <nav>
               <Texts text='Наши проекты' size={TextSize.M}/>
            </nav>
            <nav>
               <Texts text='Услуги' size={TextSize.M}/>
            </nav>
            <nav>
               <Texts text='Новости' size={TextSize.M}/>    
            </nav>
            <nav>
               <Texts text='Контакты' size={TextSize.M}/>
            </nav>
         </ul>
      </div> 
   </div>
   );
};

export default Navbar;