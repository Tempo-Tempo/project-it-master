import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from 'shared/ui/images/Images';
import { Texts } from 'shared/ui/texts/Texts';
import './Sliders.css';

interface SlidersProps {
  data: Array<Object>
}

export const Sliders = ( { data }: SlidersProps ) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='slider_wrapper'>
          <div >
            <Slider {...settings}>
                {data?.map((item : any) => (
                <div className='item_about_services_sliders'>
                    <div className='card-top'>
                    <Images className='img_service' width={370} height={300} img={item.img}/>
                    <div className='title_item'><span className='num_item'>0{item.id}.</span> <Texts width={500} color='black' text={item.title}/></div>
                </div>
                <div className='body_item'>
                     <Texts color='grey' text={item.body}/>
                     </div>
                </div>  
                ))} 
            </Slider>
           
        </div>  
        </div>
        
    );
};

