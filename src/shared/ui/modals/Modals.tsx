import React, {
    ReactNode, useState, MouseEvent, useRef, useEffect, useCallback,
} from 'react';
import './Modals.css';
import close from '../../icons/close.png'; 
import { Images } from '../images/Images';
import { TextSize, Texts } from '../texts/Texts';
import { Buttons } from '../buttons/Buttons';

interface MyModalProps {
   className?: string,
   children?: ReactNode,
   isOpen?: boolean | undefined,
   btnClose?: boolean,
   isClose?: () => void;
}

export const Modals = (props : MyModalProps) => {
    const {
        className, children, isOpen, isClose, btnClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
;
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        setIsClosing(prev => !prev);
    }, [isOpen]);

    const handlerClose = useCallback(() => {
        if (isClose) {
            isClose();
            setIsClosing(true);
            console.log('Анимация');
            timerRef.current = setTimeout(() => {
                isClose();
                setIsClosing(false);
            }, 300);
        }
    }, [isClose]);

    const onHandlerClose = (e: MouseEvent) => {
        e.stopPropagation();
       let overlay = e.target as Element;
       console.log(overlay.className);
       if(overlay.classList.contains("modal_overlay")) handlerClose();
    };

    useEffect(() => {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Escape') handlerClose();
        });
        return () => {
            clearTimeout(timerRef.current);
            console.log('alo2');
        };
    }, []);

    useEffect(() => {
        if (btnClose !== undefined) handlerClose();
    }, [btnClose]);


    const styleIsOpenModel = isClosing ? 'oppened' : '';

    isClosing ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';

    return (
        <div className={`model_wrapper`}>
            <div onClick={onHandlerClose} className={`modal_overlay  ${styleIsOpenModel}`}>
                <div className='modal_content'>
                    <div className='title_content'>
                        <Texts size={TextSize.L} width={800} color='black' text='Свяжитесь с нами'/>
                        <Buttons onClick={handlerClose} className='modal_close'><Images img={close} /> </Buttons>
                    </div>
                    {children}
                </div>
            </div> 
        </div>
    )
};