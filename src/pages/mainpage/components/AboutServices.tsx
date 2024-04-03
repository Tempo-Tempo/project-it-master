import React from 'react';
import './AboutServices.css'
import { TextSize, Texts, TextAlign } from '../../../shared/ui/texts/Texts.tsx';
import { Images } from '../../../shared/ui/images/Images.tsx';
import sysAdm from '../../../shared/assets/sysadm.webp';
import dev from '../../../shared/assets/devsoftware.jpg';
import analysis from '../../../shared/assets/analysisDate.jpg';
import sysAdm2 from '../../../shared/assets/sysSecuri.jpeg';
import dev2 from '../../../shared/assets/develop.jpeg';
import analysis2 from '../../../shared/assets/dataAnalysis.jpeg';
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';
import { useInView } from 'react-intersection-observer';

export const AbousServices = () => {
   const {ref, inView} = useInView({
      threshold: 0.2,
      triggerOnce: true
   })

   const testStyle = inView ? 'active' : 'nonactive';
   const imgStyle = inView ? 'activeImg' : 'nonactiveImg';
   return (
      <div className='about_services_wrapper'>
         <div className='container'>
            <div className={`title_about_services`}>
               <span className='subtitle_about_services'>
                  <Texts size={TextSize.XL} width={700} text='Основные направления, на которых мы специализируемся'/>
               </span> 
                <Buttons size={SizeButtons.L}>
                  <Texts align='center' size={TextSize.M} width={600} text='Заказать услуги'/>
                </Buttons>
            </div>
         <div className='items_abouts_services'>
            <div className='item_about_services'>
               <Images  className={`img_service`} height={300}  img={sysAdm2} />
                  <span className={`${testStyle}`}>
                     <span className='title_item'>
                        <span className='num_item'>01.</span>
                           <Texts width={500} color='black' text='Администрирование сетей'/> 
                     </span>
                     <span ref={ref} className='body_item'>
                     <Texts color='grey' text='Настройка сетевых протоколов и служб: конфигурирование стека сетевых протоколов TCP/IP, настройка служб (HTTP, DHCP, DNS и др.), конфигурирование доменной инфраструктуры Active Directory.
                        Установка и настройка брандмауэров, систем обнаружения и предотвращения вторжений, антивирусной защиты, шифрование трафика.'/>
                     </span>
                  </span>
                  <a className={`${testStyle}`} href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     />
                  </a>
               </div>
               <div className='item_about_services'>
                     <Images className={`img_service `} height={300} img={dev2} />
                  <span className={`${testStyle}`}>
                     <span className='title_item'>
                        <span className='num_item'>02.</span>  
                        <Texts width={500} color='black' text='Разработка и поддержка приложений'/> 
                     </span>
                     <span className='body_item'>
                     <Texts color='grey' text={`Планирование требований, сбор и анализ пользовательских потребностей к разрабатываемому нами приложению.
                       Проектирование, создание архитектуры, выбор технологий и компонентов приложения, проектирование баз данных, интерфейсов и логики работы.
                       Разработка  написание программного кода приложения и единиц тестирования.`}/>
                     </span>
                  </span> 
                  <a className={`${testStyle}`} href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     />
                  </a>
               </div>
               <div className='item_about_services'>
                     <Images height={300} className={`img_service `} img={analysis2} />
                  <span className={`${testStyle}`}>
                     <span className='title_item'>
                        <span className='num_item'>03.</span> 
                           <Texts width={500} color='black' text='Анализ и сбор данных продукта'/> 
                     </span>
                     <span className='body_item'>
                        <Texts color='grey' text=' Определение целей и задач анализа выявление ключевых вопросов об эффективности, востребованности и качестве производимого бизнес продукта.
                          Выбор источников данных - опросы и отзывы клиентов, статистика продаж и использования, технические журналы и метрики продукта
                          Выявление трендов и закономерностей.'/>
                     </span> 
                  </span>
                  <a className={`${testStyle}`} href=""><Texts 
                     text='Подробнее'
                     color={'blue'}
                     width={500}
                     align={TextAlign.left}
                     />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

