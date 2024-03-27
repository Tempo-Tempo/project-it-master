import React from 'react';
import dev from '../../../shared/icons/dev.svg'
import { Images } from '../../../shared/ui/images/Images.tsx';
import { TextAlign, TextSize, Texts } from '../../../shared/ui/texts/Texts.tsx';
import './Services.css'
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';

export const Services = () => {
   return (
      <div className='container'>
         <div className='wrapper_services'>
            <div className='title_services'><Texts 
            color={'black'} 
            align={TextAlign.center} 
            size={TextSize.XL} text='Мы занимаемся разработкой приложений для различных платформ'
            width={700}
            />
             <div className='text_services'><Texts 
             text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet, 
            atque fuga distinctio sapiente a magnam eum officia voluptatibus est magni! Laboriosam amet corrupti explicabo quia. 
            Consequuntur eius fuga et.'
            color={'gray'}
            align={TextAlign.center}
            />
            </div>
            </div>
            <ul className='items_services'>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={dev}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <span className='title_item'><Texts color={'black'} width={600} align={TextAlign.left} text='Создание сайтов'/></span>
                     <span className='text_item'><Texts color={'black'} width={400} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet'/></span>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={dev}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <span className='title_item'><Texts color={'black'} width={600} align={TextAlign.left} text='Создание сайтов'/></span>
                     <span className='text_item'><Texts color={'black'} width={400} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet'/></span>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={dev}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <span className='title_item'><Texts color={'black'} width={600} align={TextAlign.left} text='Создание сайтов'/></span>
                     <span className='text_item'><Texts color={'black'} width={400} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet'/></span>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={dev}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <span className='title_item'><Texts color={'black'} width={600} align={TextAlign.left} text='Создание сайтов'/></span>
                     <span className='text_item'><Texts color={'black'} width={400} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet'/></span>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={dev}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <span className='title_item'><Texts color={'black'} width={600} align={TextAlign.left} text='Создание сайтов'/></span>
                     <span className='text_item'><Texts color={'black'} width={400} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet'/></span>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={dev}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <span className='title_item'><Texts color={'black'} width={600} align={TextAlign.left} text='Создание сайтов'/></span>
                     <span className='text_item'><Texts color={'black'} width={400} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet'/></span>
                  </div>    
               </li>
            </ul>
            <Buttons size={SizeButtons.L}>
               <Texts size={TextSize.M} width={600} align={'center'} text='Все услуги'/>
            </Buttons>
         </div>
      </div>
   );
};

