import React from 'react';
import './AboutServices.css'
import { TextSize, Texts, TextAlign } from 'shared/ui/texts/Texts';
import { Images } from 'shared/ui/images/Images';
import sysAdm2 from 'shared/assets/sysSecuri.jpeg';
import dev2 from 'shared/assets/develop.jpeg';
import analysis2 from 'shared/assets/dataAnalysis.jpeg';
import { Buttons, SizeButtons } from 'shared/ui/buttons/Buttons';
import { Sliders } from 'shared/slider/Sliders';

interface AbousServicesProps {
   modalIsOpen: () => void,
}

export const AbousServices = ({ modalIsOpen }: AbousServicesProps) => {
   
   const DataServices = [
      {
          id: 1,
          title: "Администрирование сетей",
          body: "Настройка сетевых протоколов и служб: конфигурирование стека сетевых протоколов TCP/IP, настройка служб (HTTP, DHCP, DNS и др.), конфигурирование доменной инфраструктуры Active Directory. Установка и настройка брандмауэров, систем обнаружения и предотвращения вторжений, антивирусной защиты, шифрование трафика.",
          img: sysAdm2,
      },
      {
          id: 2,
          title: "Разработка и поддержка приложений",
          body: "Планирование требований, сбор и анализ пользовательских потребностей к разрабатываемому нами приложению. Проектирование, создание архитектуры, выбор технологий и компонентов приложения, проектирование баз данных, интерфейсов и логики работы. Разработка, написание программного кода приложения и единиц тестирования.",
          img: dev2,
      },
      {
          id: 3,
          title: "Анализ и сбор данных продукта",
          body: `Определение целей и задач анализа выявление ключевых вопросов об эффективности, востребованности и качестве производимого бизнес продукта. Выбор источников данных - опросы и отзывы клиентов, статистика продаж и использования, технические журналы и метрики продукта. Выявление трендов и закономерностей`,
          img: analysis2,
      },
      {
          id: 4,
          title: "Обслуживание и ремонт систем видеонаблюдения",
          body: "Проверка и регулярная очистка камер и объективов от пыли и грязи для обеспечения четкого изображения. Обновление программного обеспечения системы для исправления возможных ошибок и обновления функциональности. Обслуживание хранилища данных (дисков, серверов) для обеспечения надежного хранения записей видеонаблюдения.",
          img: sysAdm2,
      },
      {
          id: 5,
          title: "Обслуживание ПО и компьютерных систем",
          body: "Определение проблем в работе ПО и аппаратных компонентов. Устранение сбоев и ошибок в работе операционных систем и прикладных программ. Антивирусная проверка и удаление вирусов, троянов, шпионских программ. Установка и настройка антивирусных программ. Настройка почтовых клиентов, браузеров, мультимедиа программ.",
          img: dev2,
      }
  ]

   return (
      <div className='about_services_wrapper'>
         <div className='container'>
            <div className={`title_about_services`}>
               <span className='subtitle_about_services'>
                  <Texts size={TextSize.XL} width={700} text='Основные направления, на которых мы специализируемся'/>
               </span> 
                <Buttons onClick={modalIsOpen} size={SizeButtons.L}>
                  <Texts align='center' size={TextSize.M} width={600} text='Заказать услуги'/>
                </Buttons>
            </div>
         <div className='items_abouts_services'>
               <Sliders data={DataServices} />
            </div>
         </div>
      </div>
   );
};

