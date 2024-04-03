import React, { useEffect, useRef, useState } from 'react';
import { Images } from '../ui/images/Images.tsx';
import img from '../assets/mainPic.png';
import img2 from '../assets/background-image.jpeg';
import img3 from '../assets/realistic.jpeg';
import img4 from '../assets/mainBg2.jpeg';
import img5 from '../assets/it-company50.jpeg';
import { TextAlign, Texts } from '../ui/texts/Texts.tsx';
import { TextSize } from '../ui/texts/Texts.tsx';
import { Buttons } from '../ui/buttons/Buttons.tsx';
import { SizeButtons } from '../ui/buttons/Buttons.tsx';
import { useInView } from 'react-intersection-observer';
import './Banner.css';

export const Banner = () => {

   const [shineBtn, setShineBtn] = useState<boolean>(false);
   const [testStyle2, setTestStyle2] = useState<string>('');

   const {ref, inView} = useInView({
      threshold: 0,
   })
 
   useEffect(() => {
      const testStyle = !shineBtn ? 'btn_shine' : '';
      setTestStyle2(testStyle);
   },[])

   const shineTest = () => {
      if(inView) {
         console.log('Вижу')
      } else {
         console.log('Не вижу')
      }
   }
   return (
      <div  className='banner'>
         <Images img={img5} height={1000}/>
         <div ref={ref} className='text_banner'>
            <Texts align={TextAlign.center}  size={TextSize.M} width={500}  text='Передовая IT-компания'/>
            <Texts align={TextAlign.center}  size={TextSize.XXL} width={800}  text='Мы создаем простые решения для сложных задач и проблем'/>
            <Buttons className={`${testStyle2}`} size={SizeButtons.XL}><Texts align={TextAlign.center}  size={TextSize.M} width={600}  text='Заказать обслуживание'/></Buttons>
         </div>
      </div>
   );
};
