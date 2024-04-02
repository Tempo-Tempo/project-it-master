import React, {
    ReactNode, useState, MouseEvent, useRef, useEffect, useCallback,
} from 'react';
import './Modals.css';

interface MyModalProps {
   className?: string,
   children?: ReactNode,
   isOpen?: boolean | undefined,
   btnClose?: boolean,
   lazy?: boolean,
   isClose?: () => void;
}

export const Modals = (props : MyModalProps) => {
    const {
        className, children, isOpen, isClose, btnClose, lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    
    const ANIMATION_DELAY = 300;
;
    const timerRef = useRef<ReturnType<typeof setTimeout>>();



    useEffect(() => {
     
    }, [isOpen]);

    const handlerClose = useCallback(() => {
        if (isClose) {
            isClose();
            setIsClosing(true);
            console.log('Анимация');
            timerRef.current = setTimeout(() => {
                isClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [isClose]);

    const onHandlerClose = (e: MouseEvent) => {
        e.stopPropagation();
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


    return (
        <div className={`model_wrapper`}>
            <div className='modal_overlay'>
                <div className='model_content'>
                    {children}
                </div>
            </div> 
        </div>
    )
};