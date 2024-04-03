import React from 'react';
import './HistoryCompany.css';
import { Texts, TextAlign, TextSize } from '../../../shared/ui/texts/Texts';
import { Images } from '../../../shared/ui/images/Images';
import img from '../../../shared/assets/history.png';
import img2 from '../../../shared/assets/background-history.jpeg';
import { CounterEmployes } from './CounterEmployes';
import { useInView } from 'react-intersection-observer';


export const HistoryCompany = () => {

   const {ref, inView} = useInView({
      threshold: 0.3,
      triggerOnce: true
   })

   const testStyle = inView ? 'active' : 'nonactive';
   const imgStyle = inView ? 'activeImg' : 'nonactiveImg';
   return (
      <div className='wrapper_history'>
         <div className='container'>
            <div ref={ref} className='items_history' >
               <div className='item_info'>
                  <div className={`title_history `}><Texts 
                     color={'black'} 
                     align={TextAlign.left} 
                     size={TextSize.XL} text='Нас интересуют только высокие стандарты работы'
                     width={700}
                     />
                  <div className='text_history'><Texts 
                     text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet, 
                     atque fuga distinctio sapiente a magnam eum officia voluptatibus est magni! Laboriosam amet corrupti explicabo quia. 
                     Consequuntur eius fuga et.'
                     color={'gray'}
                     align={TextAlign.left}
                     />
                     </div>
                     <div className='link_history'>
                     <a href="https://chelyabinsk.hh.ru/search/vacancy?from=employerPage&employer_id=588177&hhtmFrom=employer" 
                     target="_blank"><Texts 
                     text='Наши вакансии'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     /></a>
                     </div>
                  </div>
               </div>
               <div ref={ref} className={`picture_item ${testStyle}`}>
                  <Images className='picture_item' width={550} img={img2}/>
               </div>
            </div>
            <CounterEmployes/>
         </div>
      </div>
   );
};

