import React, { useCallback, useState } from 'react';
import { Modals } from 'shared/ui/modals/Modals';
import { Inputs } from 'shared/ui/inputs/Inputs';
import { Buttons, SizeButtons } from 'shared/ui/buttons/Buttons';
import { Texts, TextSize } from 'shared/ui/texts/Texts';
import { Images } from 'shared/ui/images/Images';
import ok from 'shared/icons/modalIcons/ok.svg';
import '../ui/FormForFeedBack.css';

interface FormForFeedbackProps {
   isOpen: boolean,
   isClose: () => void,
}

const FormForFeedback = ({isOpen, isClose}: FormForFeedbackProps) => {

   const [acceptRequest, setAcceptRequest] = useState<boolean>(false);
   const [startValidName, setStartValidName] = useState<boolean>(false);
   const [startValidNumber, setStartValidNumber] = useState<boolean>(false);
   const [inputName, setInputName] = useState<string>('');
   const [inputNumber, setInputNumber] = useState<string>('');

   const checkValidForm = useCallback(() => {
      if(inputName !== '' && inputNumber !== '') {
         setAcceptRequest(true);
         setTimeout(() => {
            setAcceptRequest(false);
            isClose();
         }, 2000);
      } 
      if(inputName === '') {
         setStartValidName(true);
         console.log('name')
         setTimeout(() => {
            setStartValidName(false);
         }, 3000);
      } 
      if(inputNumber === '') {
         setStartValidNumber(true);
         setTimeout(() => {
            setStartValidNumber(false);
         }, 3000);
      }
   }, [inputName, inputNumber]);

   const successStyle = acceptRequest ? 'on_modal_success' : '';

   const errorStyleName = startValidName ? 'input_err_message_name' : '';
   const errorMessageName = startValidName ? 'on_message_name' : 'off_message_name';

   const errorStyleNumber = startValidNumber ? 'input_err_message_number' : '';
   const errorMessageNumber = startValidNumber ? 'on_message_number' : 'off_message_number';

   return (
   <Modals isOpen={isOpen} isClose={() => isClose()}>
      <div className={`off_modal_success ${successStyle}`}>
         <Images width={100} img={ok}/>
         <Texts width={700} size={TextSize.L} color='black' text='Ваша заявка принята!'/>
      </div>
      <span className='wrapper_input_name'>
         <Inputs onChange={setInputName} className={`${errorStyleName}`} placeholder='Введите ваше имя'/>
         <span className={`${errorMessageName}`}>Недостаточно данных</span>
      </span>
      <span className='wrapper_input_name'>
         <Inputs onChange={setInputNumber} className={`${errorStyleNumber}`} type='number' placeholder='Введите номер телефона'/>
         <span className={`${errorMessageNumber}`}>Недостаточно данных</span>
      </span>
      <Buttons onClick={checkValidForm} className={SizeButtons.L}><Texts align='center' size={TextSize.M} width={600} text='Подтвердить'/></Buttons>
  </Modals>
   );
};

export default FormForFeedback;