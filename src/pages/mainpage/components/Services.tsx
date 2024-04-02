import React, { useState } from 'react';
import middleware from '../../../shared/icons/servicesIcons/middleware.svg';
import monitor from '../../../shared/icons/servicesIcons/monitor.svg';
import network from '../../../shared/icons/servicesIcons/network.svg';
import camera from '../../../shared/icons/servicesIcons/bullet.svg';
import buisnes from '../../../shared/icons/servicesIcons/buisnes.svg';
import datebase from '../../../shared/icons/servicesIcons/database.svg';
import { Images } from '../../../shared/ui/images/Images.tsx';
import { TextAlign, TextSize, Texts } from '../../../shared/ui/texts/Texts.tsx';
import './Services.css'
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';
import { useInView } from 'react-intersection-observer';


export const Services = () => {

   const [servicesIsOpen, setServicesIsOpen] = useState(false);

   const {ref, inView} = useInView({
      threshold: 0.2,
      triggerOnce: true
   })

   const testStyle = inView ? 'active' : 'nonactive';
   const openStyleServices = !servicesIsOpen ? 'items_services_open' : 'items_services_close';

   const openMoreSrvices = () => {
      setServicesIsOpen(prev => !prev);
   }

   return (
      <div className='container'>
         <div className='wrapper_services'>
            <div ref={ref} className={`title_services ${testStyle}`}><Texts 
            color={'black'} 
            align={TextAlign.center} 
            size={TextSize.XL} text='Мы готовы предложить улучшения IT-инфраструктуры вашего бизнеса'
            width={700}
            />
             <div className='text_services'><Texts 
             text='Наша компания предоставляет IT-решения для большинства проблем, начиная от ремонта компьютерных систем и их комплексов, заканчивая разработкой сайтов, созданием мобильных и десктопных приложений.'
            color={'gray'}
            align={TextAlign.center}
            />
            </div>
            </div>
            <div className={`${openStyleServices}`}>
            <ul className={`items_services ${testStyle} ${openStyleServices}`}>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={middleware}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <Texts color={'black'} width={600} align={TextAlign.left} text='Разработка приложений'/>
                     <Texts color={'black'} width={400} text='Многолетний опыт разработки на языках Java, Dart, JavaScript'/>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={monitor}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <Texts color={'black'} width={600} align={TextAlign.left} text='Ремонт/настройка компьютерных систем'/>
                     <Texts color={'black'} width={400} text='Выполянем ремонт и настройку ПК любой сложности'/>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={network}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <Texts color={'black'} width={600} align={TextAlign.left} text='Администрирование серверов/сетей'/>
                     <Texts color={'black'} width={400} text='Поможем спроектировать и построить любую локальную сеть'/>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={camera}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <Texts color={'black'} width={600} align={TextAlign.left} text='Обслуживанине систем видеонаблюдения'/>
                    <Texts color={'black'} width={400} text='Внедряем современные цифровые системы видеонаблюдения'/>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={buisnes}/>
                     </span>
                  </span>
                  <div className='body_services'>
                     <Texts color={'black'} width={600} align={TextAlign.left} text='Бизнес-анализ данных и систем'/>
                     <Texts color={'black'} width={400} text='Разработаем новые бизнес-процессы и оптимизируем текущие'/>
                  </div>    
               </li>
               <li className='item_services'>
                  <span className='img_wrapper'>
                     <span className='img_wrapper_v2'>
                        <Images className='img_services' width={60} height={60} img={datebase}/>
                     </span>
                  </span>
                  <div className='body_services'>
                    <Texts color={'black'} width={600} align={TextAlign.left} text='Облачное хранение данных'/>
                     <Texts color={'black'} width={400} text='Повышаем надежность хранения данных и их защиту'/>
                  </div>    
               </li>
            </ul>
            </div>
            { !servicesIsOpen ?  <Buttons onClick={openMoreSrvices} size={SizeButtons.L}>
              <Texts size={TextSize.M} width={600} align={'center'} text='Все услуги'/>
           </Buttons> : <Buttons onClick={openMoreSrvices} size={SizeButtons.L}>
               <Texts size={TextSize.M} width={600} align={'center'} text='Скрыть'/>
            </Buttons>
            }
         </div>
      </div>
   );
};

