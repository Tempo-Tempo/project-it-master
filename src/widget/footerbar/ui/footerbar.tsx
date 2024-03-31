import React from 'react';
import { Texts, TextSize } from '../../../shared/ui/texts/Texts.tsx';
import './Footerbar.css';

const Footerbar = () => {
    return (
        <div className='wrapper_footer'>
            <div className="container">
                <div className="footer_items">
                    <div className="footer_item">
                        <span className='footer_item_title'>
                            <Texts color='black' width={700} size={TextSize.M} text='Контактная информация'/>
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='mail@itmaster174.ru' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='797-03-88' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='454052 г. Челябинск  ш. Металлургов д.88, оф.3.7' size={TextSize.S} color='grey' />
                        </span>
                    </div>
                    <div className="footer_item">
                        <span className='footer_item_title'>
                            <Texts color='black' width={700} size={TextSize.M} text='Основные ссылки'/>
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='почта' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='контакный телефон' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='адрес' size={TextSize.S}color='grey' />
                        </span>
                    </div>
                    <div className="footer_item">
                        <span className='footer_item_title'>
                            <Texts color='black' width={700} size={TextSize.M} text='Наши проекты'/>
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='почта' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='контакный телефон' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='адрес' size={TextSize.S} color='grey' />
                        </span>
                    </div>
                    <div className="footer_item">
                        <span className='footer_item_title'>
                            <Texts color='black' width={700} size={TextSize.M} text='Социальные сети'/>
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='почта' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='контакный телефон' size={TextSize.S} color='grey' />
                        </span>
                        <span className='footer_item_body'>
                            <Texts text='адрес' size={TextSize.S} color='grey' />
                        </span>
                    </div>
                </div>
                <div className='footer_reserved'>
                    (c) 2024 Все права защищены.
                </div>
            </div>
        </div>
    );
};

export default Footerbar;