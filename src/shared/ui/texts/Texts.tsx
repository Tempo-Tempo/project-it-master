import './Texts.css';
import React from 'react';

export enum TextAlign {
   center = 'center',
   left = 'left',
   right = 'right'
}

export enum TextSize {
   S = 'font_s',
   M = 'font_m',
   L = 'font_l',
   XL = 'font_xl',
   XXL = 'font_xxl',
}


interface MyTextPorps {
   className?: string,
   text?: string,
   align?: string,
   size?: string,
   color?: string,
   width?: number,
}

export const Texts = (props: MyTextPorps) => {
    const {
        text, size, width, className, color = '', align = TextAlign.left,
    } = props;
    return (
        <div className={align}>
            <p style={{color: `${color}`, fontWeight: `${width}`}} className={`${className} ${size}`}>{text}</p>
        </div>
    );
};