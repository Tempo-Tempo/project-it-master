import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Buttons.css'


export enum SizeButtons {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
   default = 'default'
  }

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  size?: SizeButtons;
  disabled?: boolean,
  children?: ReactNode
}

export const Buttons = (props: ButtonsProps) => {
    const {
         children, className, size = '', disabled, ...otherProps
    } = props;
    return (
        <button
            type="button"
            disabled={disabled}
            className={`${className} ${size} `}
            {...otherProps}
        >
            {children}
        </button>
    );
};