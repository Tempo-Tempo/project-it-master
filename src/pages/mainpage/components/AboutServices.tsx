import React from 'react';
import './AboutServices.css'
import { TextSize, Texts, TextAlign } from '../../../shared/ui/texts/Texts.tsx';
import { Images } from '../../../shared/ui/images/Images.tsx';
import sysAdm from '../../../shared/assets/sysadm.webp';
import dev from '../../../shared/assets/devsoftware.jpg';
import analysis from '../../../shared/assets/analysisDate.jpg';
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';

export const AbousServices = () => {
   return (
      <div className='about_services_wrapper'>
         <div className='container'>
            <div className='title_about_services'>
               <span className='subtitle_about_services'>
                  <Texts size={TextSize.XL} width={700} text='Основные направления, на которых мы специализируемся'/>
               </span> 
                <Buttons size={SizeButtons.L}>
                  <Texts align='center' size={TextSize.M} width={600} text='Заказать услуги'/>
                </Buttons>
            </div>
            <div className='items_abouts_services'>
               <div className='item_about_services'>
                  <Images height={300} className='img_service' img={sysAdm} />
                  <span className='title_item'>
                     <span className='num_item'>01.</span>
                     <Texts width={500} color='black' text='Администрирование сетей'/> 
                  </span>
                  <span className='body_item'>
                  <Texts color='grey' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio, 
                     non eos voluptate voluptates nemo reiciendis tempore? Nemo nam quo,
                      recusandae praesentium similique explicabo, omnis a animi, accusantium nesciunt veritatis.'/>
                  </span>
                  <a href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     /></a>
               </div>
               <div className='item_about_services'>
                     <Images height={300} className='img_service' img={dev} />
                  <span className='title_item'>
                     <span className='num_item'>02.</span>  
                     <Texts width={500} color='black' text='Разработка и поддержка приложений'/> 
                  </span>
                  <span className='body_item'>
                     <Texts color='grey' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio, 
                     non eos voluptate voluptates nemo reiciendis tempore? Nemo nam quo,
                      recusandae praesentium similique explicabo, omnis a animi, accusantium nesciunt veritatis.'/>
                  </span>
                  <a href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     /></a>
               </div>
               <div className='item_about_services'>
                     <Images height={300} className='img_service' img={analysis} />
                  <span className='title_item'>
                     <span className='num_item'>03.</span> 
                     <Texts width={500} color='black' text='Анализ и сбор данных продукта'/> 
                  </span>
                  <span className='body_item'>
                  <Texts color='grey' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio, 
                     non eos voluptate voluptates nemo reiciendis tempore? Nemo nam quo,
                      recusandae praesentium similique explicabo, omnis a animi, accusantium nesciunt veritatis.'/>
                  </span>
                  <a href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     /></a>
               </div>
            </div>
         </div>
      </div>
   );
};

