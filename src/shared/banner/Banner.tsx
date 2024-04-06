import React, { useEffect, useState } from 'react';
import { Images } from 'shared/ui/images/Images';
import img5 from '../assets/it-company50.jpeg';
import { Texts, TextAlign, TextSize } from 'shared/ui/texts/Texts';
import { Buttons, SizeButtons } from 'shared/ui/buttons/Buttons';
import { useInView } from 'react-intersection-observer';
import './Banner.css';

interface BannerProps {
   modalIsOpen: () => void,
}

export const Banner = ({ modalIsOpen }: BannerProps) => {

   const [shineBtn, setShineBtn] = useState<boolean>(false);
   const [testStyle2, setTestStyle2] = useState<string>('');

   const {ref, inView} = useInView({
      threshold: 0,
   })
 
   useEffect(() => {
      const testStyle = !shineBtn ? 'btn_shine' : '';
      setTestStyle2(testStyle);
   },[])

   return (
      <div  className='banner'>
         <Images img={img5} height={1000}/>
         <div ref={ref} className='text_banner'>
            <Texts align={TextAlign.center}  size={TextSize.M} width={500}  text='Передовая IT-компания'/>
            <Texts align={TextAlign.center}  size={TextSize.XXL} width={800}  text='Мы создаем простые решения для сложных задач и проблем'/>
            <Buttons onClick={modalIsOpen} className={`${testStyle2}`} size={SizeButtons.XL}><Texts align={TextAlign.center}  size={TextSize.M} width={600}  text='Заказать обслуживание'/></Buttons>
         </div>
      </div>
   );
};
