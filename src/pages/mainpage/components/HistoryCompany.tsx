import React from 'react';
import './HistoryCompany.css';
import { Texts, TextAlign, TextSize } from '../../../shared/ui/texts/Texts.tsx';
import { Images } from '../../../shared/ui/images/Images.tsx';
import img from '../../../shared/assets/history.png';
import { CounterEmployes } from './CounterEmployes.tsx';

interface ServicesProps {
   showComponent: boolean,
   showCounter: boolean,
}


export const HistoryCompany = ({ showComponent, showCounter }: ServicesProps) => {
   console.log(showCounter, 'showcounter')
   const testStyle = showComponent ? 'active' : 'nonactive';
   return (
      <div className='wrapper_history'>
         <div className='container'>
            <div className='items_history' >
               <div className='item_info'>
                  <div className={`title_history ${testStyle}`}><Texts 
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
               <div className={`picture_item ${testStyle}`}>
                  <Images width={550} img={img}/>
               </div>
            </div>
            <CounterEmployes showCounter={showCounter}/>
         </div>
      </div>
   );
};

