import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { testData } from './testData.js';
import testImg from '../assets/develop.jpeg';
import './Sliders.css';
import { Images } from 'shared/ui/images/Images';
import { Texts, TextSize } from 'shared/ui/texts/Texts';

export const Sliders = () => {
    const testData = [
        {
            id: 1,
            title: "Администрирование сетей",
            body: "Настройка сетевых протоколов и служб: конфигурирование стека сетевых протоколов TCP/IP, настройка служб (HTTP, DHCP, DNS и др.), конфигурирование доменной инфраструктуры Active Directory. Установка и настройка брандмауэров, систем обнаружения и предотвращения вторжений, антивирусной защиты, шифрование трафика.",
            img: "sysSecuri"
        },
        {
            id: 2,
            title: "Разработка и поддержка приложений",
            body: "Планирование требований, сбор и анализ пользовательских потребностей к разрабатываемому нами приложению. Проектирование, создание архитектуры, выбор технологий и компонентов приложения, проектирование баз данных, интерфейсов и логики работы. Разработка, написание программного кода приложения и единиц тестирования.",
            img: "develop"
        },
        {
            id: 3,
            title: "Анализ и сбор данных продукта",
            body: "Определение целей и задач анализа выявление ключевых вопросов об эффективности, востребованности и качестве производимого бизнес продукта.Выбор источников данных - опросы и отзывы клиентов, статистика продаж и использования, технические журналы и метрики продукта. Выявление трендов и закономерностей",
            img: "sysSecuri"
        },
        {
            id: 4,
            title: "Администрирование сетей4",
            body: "Настройка сетевых протоколов и служб: конфигурирование стека сетевых протоколов TCP/IP, настройка служб (HTTP, DHCP, DNS и др.), конфигурирование доменной инфраструктуры Active Directory. Установка и настройка брандмауэров, систем обнаружения и предотвращения вторжений, антивирусной защиты, шифрование трафика.",
            img: "sysSecuri"
        },
        {
            id: 5,
            title: "Администрирование сетей5",
            body: "Настройка сетевых протоколов и служб: конфигурирование стека сетевых протоколов TCP/IP, настройка служб (HTTP, DHCP, DNS и др.), конфигурирование доменной инфраструктуры Active Directory. Установка и настройка брандмауэров, систем обнаружения и предотвращения вторжений, антивирусной защиты, шифрование трафика.",
            img: "sysSecuri"
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    console.log(testData);
    return (
        <div className='slider_wrapper'>
          <div className='container'>
            <Slider {...settings}>
                {testData?.map((item : any) => (
                <div className='item_about_services_sliders'>
                    <div className='card-top'>
                    <Images className='img_service' width={380} img={testImg}/>
                    <div className='title_item'><span className='num_item'>0{item.id}.</span> <Texts width={500} color='black' text={item.title}/></div>
                </div>
                <div className='body_item'>
                     <Texts color='grey' text={item.body}/>
                     </div>
                </div>  
                ))} 
            </Slider>
           
        </div>  
        </div>
        
    );
};

