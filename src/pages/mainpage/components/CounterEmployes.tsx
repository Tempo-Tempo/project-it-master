import React from 'react';
import { Images } from '../../../shared/ui/images/Images.tsx';
import { Texts, TextAlign, TextSize } from '../../../shared/ui/texts/Texts.tsx';
import helpersImg from '../../../shared/icons/helpers.svg';
import sysAdmImg from '../../../shared/icons/sys.admin.svg';
import ingenerImg from '../../../shared/icons/ingeners.svg';
import buisnesImg from '../../../shared/icons/buis.analit.svg';
import developImg from '../../../shared/icons/dev.svg';
import './CounterEmployes.css';

interface CounterEmployesProps {
   showCounter: boolean,
}

export const CounterEmployes = ({ showCounter }: CounterEmployesProps) => {
   const counterStyle = showCounter ? 'active' : 'nonactive';
   console.log(counterStyle)
   return (
      <div className={`counters_employes ${counterStyle}`}>
      <div className='counter'>
         <div className='title_counter'>
         <span>
            <Images width={70} height={60} img={helpersImg}/>
         </span>
         <span className='text_counter'>
         <Texts width={500} size={TextSize.XL} color='black' text='125'/>
         </span>
      </div>
      <div className='body_counter'>
      <Texts 
            text='Специалистов поддержки пользователей'
            color={'gray'}
            align={TextAlign.center}
            />
      </div>
     </div>
     <div className='counter'>
         <div className='title_counter'>
         <span>
         <Images width={70} height={60} img={sysAdmImg}/>
         </span>
         <span className='text_counter'>
            <Texts width={500} size={TextSize.XL} color='black' text='125'/>
         </span>
      </div>
      <div className='body_counter'>
      <Texts 
            text='Системных администраторов'
            color={'gray'}
            align={TextAlign.center}
            />
      </div>
     </div> 
     <div className='counter'>
         <div className='title_counter'>
         <span>
         <Images width={70} height={60} img={ingenerImg}/>
         </span>
         <span className='text_counter'>
         <Texts width={500} size={TextSize.XL} color='black' text='125'/>
         </span>
      </div>
      <div className='body_counter'>
      <Texts 
            text='Инженеров спопровождения и развития'
            color={'gray'}
            align={TextAlign.center}
            />
      </div>
     </div>
     <div className='counter'>
         <div className='title_counter'>
         <span>
         <Images width={70} height={60} img={buisnesImg}/>
         </span>
         <span className='text_counter'>
         <Texts width={500} size={TextSize.XL} color='black' text='125'/>
         </span>
      </div>
      <div className='body_counter'>
      <Texts 
            text='Бизнес/Системных-аналитиков'
            color={'gray'}
            align={TextAlign.center}
            />
      </div>
     </div> 
     <div className='counter'>
         <div className='title_counter'>
         <span>
         <Images width={70} height={60} img={developImg}/>
         </span>
         <span className='text_counter'>
         <Texts width={500} size={TextSize.XL} color='black' text='125'/>
         </span>
      </div>
      <div className='body_counter'>
      <Texts 
            text='Разработчиков'
            color={'gray'}
            align={TextAlign.center}
            />
      </div>
     </div> 
   </div>
   );
};

