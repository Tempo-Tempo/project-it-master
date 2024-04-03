import React from 'react';
import { Images } from '../../../shared/ui/images/Images.tsx';
import { Texts, TextAlign, TextSize } from '../../../shared/ui/texts/Texts.tsx';
import work1 from '../../../shared/assets/works1.png';
import { Buttons, SizeButtons } from '../../../shared/ui/buttons/Buttons.tsx';
import { useInView } from 'react-intersection-observer';
import './OurWorks.css';

export const OurWorks = () => {
   const {ref, inView} = useInView({
      threshold: 0.1,
      triggerOnce: true
   })

   const testStyle = inView ? 'active' : 'nonactive';

   return (
      <div className='wrapper_outwork'>
         <div className='container'>
            <div className={`outwork_title`}>
               <Texts color='black' width={700} align='center' size={TextSize.XL} text='Наши проекты'/>
            </div>
            <div className={`outwork_body`}>
               <Texts color='grey' align='center' size={TextSize.M} text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus saepe 
                  autem beatae minus nostrum reiciendis quam libero vero, officia fugiat 
                  perferendis nisi eius, soluta cum omnis placeat odit, at odio?'/>    
            </div>
            <div ref={ref} className={`outwork_items ${testStyle}`}>
               <div className="outwork_item">
                  <Images width={285}  img={work1}/>
               </div>
               <div className="outwork_item">
                  <Images width={285} img={work1}/>
               </div>
               <div className="outwork_item">
                  <Images width={285} img={work1}/>
               </div>
               <div className="outwork_item">
                  <Images width={285} img={work1}/>
               </div>
            </div>
         </div>
         <Buttons size={SizeButtons.L}>
            <Texts size={TextSize.M} align='center' width={600} text='Закажи проект'/>
         </Buttons>
      </div>
   );
};

