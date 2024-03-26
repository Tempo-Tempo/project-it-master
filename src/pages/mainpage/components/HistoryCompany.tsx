import React from 'react';
import './HistoryCompany.css';
import { Texts, TextAlign, TextSize } from '../../../shared/ui/texts/Texts.tsx';
import { Images } from '../../../shared/ui/images/Images.tsx';
import img from '../../../shared/assets/history.png';
import helpersImg from '../../../shared/icons/helpers.svg';
import sysAdmImg from '../../../shared/icons/sys.admin.svg';
import ingenerImg from '../../../shared/icons/ingeners.svg';
import buisnesImg from '../../../shared/icons/buis.analit.svg';
import developImg from '../../../shared/icons/dev.svg';

export const HistoryCompany = () => {
   return (
      <div className='wrapper_history'>
         <div className='container'>
            <div className='items_history'>
               <div className='item_info'>
                  <div className='title_history'><Texts 
                     color={'black'} 
                     align={TextAlign.left} 
                     size={TextSize.XL} text='Нас интересуют только высокие стандарты разработки'
                     width={600}
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
               <div className='picture_item'>
                  <Images width={550} img={img}/>
               </div>
            </div>
            <div className='counters_employes'>
               <div className='counter'>
                  <div className='title_counter'>
                  <span>
                     <Images width={70} height={60} img={helpersImg}/>
                  </span>
                  <span className='text_counter'>
                  <Texts width={500} size={TextSize.XL} color='black' text='125'/>
                  </span>
               </div>
               <div className='body_counter'>
               <Texts 
                     text='Специалистов поддержки пользователей'
                     color={'gray'}
                     align={TextAlign.center}
                     />
               </div>
              </div>
              <div className='counter'>
                  <div className='title_counter'>
                  <span>
                  <Images width={70} height={60} img={sysAdmImg}/>
                  </span>
                  <span className='text_counter'>
                     <Texts width={500} size={TextSize.XL} color='black' text='125'/>
                  </span>
               </div>
               <div className='body_counter'>
               <Texts 
                     text='Системных администраторов'
                     color={'gray'}
                     align={TextAlign.center}
                     />
               </div>
              </div> 
              <div className='counter'>
                  <div className='title_counter'>
                  <span>
                  <Images width={70} height={60} img={ingenerImg}/>
                  </span>
                  <span className='text_counter'>
                  <Texts width={500} size={TextSize.XL} color='black' text='125'/>
                  </span>
               </div>
               <div className='body_counter'>
               <Texts 
                     text='Инженеров спопровождения и развития'
                     color={'gray'}
                     align={TextAlign.center}
                     />
               </div>
              </div>
              <div className='counter'>
                  <div className='title_counter'>
                  <span>
                  <Images width={70} height={60} img={buisnesImg}/>
                  </span>
                  <span className='text_counter'>
                  <Texts width={500} size={TextSize.XL} color='black' text='125'/>
                  </span>
               </div>
               <div className='body_counter'>
               <Texts 
                     text='Бизнес/Системных-аналитиков'
                     color={'gray'}
                     align={TextAlign.center}
                     />
               </div>
              </div> 
              <div className='counter'>
                  <div className='title_counter'>
                  <span>
                  <Images width={70} height={60} img={developImg}/>
                  </span>
                  <span className='text_counter'>
                  <Texts width={500} size={TextSize.XL} color='black' text='125'/>
                  </span>
               </div>
               <div className='body_counter'>
               <Texts 
                     text='Разработчиков'
                     color={'gray'}
                     align={TextAlign.center}
                     />
               </div>
              </div> 
            </div>
         </div>
      </div>
   );
};

