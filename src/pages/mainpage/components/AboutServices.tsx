import React from 'react';
import './AboutServices.css'
import { TextSize, Texts, TextAlign } from '../../../shared/ui/texts/Texts.tsx';
import { Images } from '../../../shared/ui/images/Images.tsx';
import sysAdm from '../../../shared/assets/sysadm.webp';
import dev from '../../../shared/assets/devsoftware.jpg';
import analysis from '../../../shared/assets/analysisDate.jpg';
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';
import { useInView } from 'react-intersection-observer';

export const AbousServices = () => {
   const {ref, inView} = useInView({
      threshold: 0.1,
      triggerOnce: true
   })

   const testStyle = inView ? 'active' : 'nonactive';
   const imgStyle = inView ? 'activeImg' : 'nonactiveImg';
   return (
      <div className='about_services_wrapper'>
         <div className='container'>
            <div ref={ref} className={`title_about_services ${testStyle}`}>
               <span className='subtitle_about_services'>
                  <Texts size={TextSize.XL} width={700} text='Основные направления, на которых мы специализируемся'/>
               </span> 
                <Buttons size={SizeButtons.L}>
                  <Texts align='center' size={TextSize.M} width={600} text='Заказать услуги'/>
                </Buttons>
            </div>
            <div className='items_abouts_services'>
               <div ref={ref} className='item_about_services'>
                  <Images  className={`img_service ${imgStyle}`} height={300}  img={sysAdm} />
                  <span className={`${testStyle}`}>
                      <span className='title_item'>
                     <span className='num_item'>01.</span>
                     <Texts width={500} color='black' text='Администрирование сетей'/> 
                  </span>
                  <span className='body_item'>
                  <Texts color='grey' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio, 
                     non eos voluptate voluptates nemo reiciendis tempore? Nemo nam quo,
                      recusandae praesentium similique explicabo, omnis a animi, accusantium nesciunt veritatis.'/>
                  </span>
                  </span>
                 
                  <a href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     /></a>
               </div>
               <div className='item_about_services'>
                     <Images className={`img_service ${imgStyle}`} height={300} img={dev} />
                  <span className={`${testStyle}`}>
                        <span className='title_item'>
                     <span className='num_item'>02.</span>  
                     <Texts width={500} color='black' text='Разработка и поддержка приложений'/> 
                  </span>
                     <span className='body_item'>
                     <Texts color='grey' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio, 
                     non eos voluptate voluptates nemo reiciendis tempore? Nemo nam quo,
                      recusandae praesentium similique explicabo, omnis a animi, accusantium nesciunt veritatis.'/>
                     </span>
                  </span> 
                  <a href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     /></a>
               </div>
               <div className='item_about_services'>
                     <Images height={300} className={`img_service ${imgStyle}`} img={analysis} />
                  <span className={`${testStyle}`}>
                     <span className='title_item'>
                        <span className='num_item'>03.</span> 
                           <Texts width={500} color='black' text='Анализ и сбор данных продукта'/> 
                  </span>
                  <span className='body_item'>
                  <Texts color='grey' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio, 
                     non eos voluptate voluptates nemo reiciendis tempore? Nemo nam quo,
                      recusandae praesentium similique explicabo, omnis a animi, accusantium nesciunt veritatis.'/>
                  </span> 
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

