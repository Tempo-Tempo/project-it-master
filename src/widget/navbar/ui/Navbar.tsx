import React from 'react';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts';
import { useInView } from 'react-intersection-observer';
import './Navbar.css';


interface NavbarProps {
   scrollToSection: (anyRef: string) => void
}

const Navbar = ({ scrollToSection } : NavbarProps) => {
   const {ref, inView} = useInView({
      threshold: 0,
      triggerOnce: true
   })

   const scrollToDiv = (id: string) => {
      console.log('testNav');
      scrollToSection(id);
   }

   const testStyle = inView ? 'haeader_wrapper_active' : '';

   return (
      <div className={`haeader_wrapper ${testStyle}`}>
        <div  ref={ref}  className='container'>
            <span className='logo_wrapper'>
               <Texts text='ИТ' size={TextSize.XXL} />
               <Texts text='- МАСТЕР' size={TextSize.L}/>
            </span>
         <ul className='main_header'>
            <nav className='about_company' onClick={(e) => scrollToDiv(e.currentTarget.className)}>
               <Texts text='О компании' size={TextSize.M}/>
            </nav>
            <nav className='history_company' onClick={(e) => scrollToDiv(e.currentTarget.className)}>
               <Texts text='Вакансии' size={TextSize.M}/>
            </nav>
            <nav className='our_works'  onClick={(e) => scrollToDiv(e.currentTarget.className)}>
               <Texts text='Наши проекты' size={TextSize.M}/>
            </nav>
            <nav className='services'  onClick={(e) => scrollToDiv(e.currentTarget.className)}>
               <Texts text='Услуги' size={TextSize.M}/>
            </nav>
            <nav className='contacts'  onClick={(e) => scrollToDiv(e.currentTarget.className)}>
               <Texts text='Контакты' size={TextSize.M}/>
            </nav>
         </ul>
      </div> 
   </div>
   );
};

export default Navbar;