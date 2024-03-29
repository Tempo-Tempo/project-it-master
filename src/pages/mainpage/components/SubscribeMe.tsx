import React from 'react';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts.tsx';
import { Buttons } from '../../../shared/ui/buttons/Buttons.tsx';
import "./SubscribeMe.css"
import { Inputs } from '../../../shared/ui/inputs/Inputs.tsx';

export const SubscribeMe = () => {
   return (
      <div className='wrapper_subs'>
         <div className="container">
            <div className='title_subs'>
               <Texts size={TextSize.L} color='black' width={700} text='Подпишитесь на нашу рассылку' />
            </div>
            <div className="subtitle_subs">
               <Texts size={TextSize.M} color='grey' width={500} text='Полезные статьи, акции, новости - получите все это сейчас!' />
            </div>
            <div className="form_for_sub">
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

