import React from 'react';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts';
import { Inputs } from '../../../shared/ui/inputs/Inputs';
import { useInView } from 'react-intersection-observer';
import { Buttons } from '../../../shared/ui/buttons/Buttons';
import "./SubscribeMe.css";

export const SubscribeMe = () => {

   // const {ref, inView} = useInView({
   //    threshold: 0.2,
   //    triggerOnce: true
   // })
   // const imgStyle = inView ? 'activeImg' : 'nonactiveImg';
   return (
      <div className='wrapper_subs'>
         <div className="container">
            <div className='title_subs'>
               <Texts size={TextSize.L} color='black' width={700} text='Подпишитесь на нашу рассылку' />
            </div>
            <div className="subtitle_subs">
               <Texts size={TextSize.M} color='grey' width={500} text='Полезные статьи, акции, новости - получите все это сейчас!' />
            </div>
            <div className={`form_for_sub`}>
               <Inputs className='input_form_sub'/>
               <Buttons className='btn_form_sub'><Texts size={TextSize.M} width={600} align='center' text='Подписаться'/></Buttons>
            </div>
            <div className='footer_subs'>
               <Texts text='Мы не шлем спам, и не передаем ваши данные' color='grey' width={500} size={TextSize.M} />
            </div>
         </div>
      </div>
   );
};

