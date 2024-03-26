import React from 'react';
import { Images } from '../ui/images/Images.tsx';
import img from '../assets/mainPic.png';
import { TextAlign, Texts } from '../ui/texts/Texts.tsx';
import { TextSize } from '../ui/texts/Texts.tsx';
import { Buttons } from '../ui/buttons/Buttons.tsx';
import { SizeButtons } from '../ui/buttons/Buttons.tsx';
import './Banner.css'

export const Banner = () => {
   return (
      <div className='banner'>
         <Images img={img} height={1000}/>
         <div className='text_banner'>
            <Texts align={TextAlign.center}  size={TextSize.M} width={500}  text='Передовая IT-студия'/>
            <Texts align={TextAlign.center}  size={TextSize.XXL} width={800}  text='Мы создаем простые решения для сложных задач и проблем'/>
            <Buttons size={SizeButtons.XL}><Texts align={TextAlign.center}  size={TextSize.M} width={600}  text='Заказать обслуживание'/></Buttons>
         </div>
      </div>
   );
};
