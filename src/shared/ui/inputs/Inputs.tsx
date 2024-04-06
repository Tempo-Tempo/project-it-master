import React, { InputHTMLAttributes, useRef } from 'react';
import './Inputs.css';
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface MyInputProps extends HTMLInputProps {
   className?: string,
   typeInput?: string,
   value?: string | number,
   onChange?: (value: any) => void,
   disabled?: boolean,
}

export const Inputs = (props: MyInputProps) => {
    const {
        className = 'Inputs', typeInput = 'text', value, onChange, disabled, ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
             <input
            ref={inputRef}
            className={className}
            type={typeInput}
            value={value}
            onChange={(e) => onChangeHandler(e)}
            disabled={disabled}
            {...otherProps}
        /> 
    );
};