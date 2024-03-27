import React from 'react';
import { Images } from '../../../shared/ui/images/Images.tsx';
import bg from '../../../shared/assets/mainPicLong.png';
import './VideosAboutWork.css';
import { TextSize, Texts } from '../../../shared/ui/texts/Texts.tsx';

export const VideosAboutWork = () => {
   return (
      <div className='wrapper_videos'>
         <Images className='bg_videos' img={bg} />
            <div className='body_wrapper'>
                <div className="title_videos">
               <Texts text='Видео о нашей работе' size={TextSize.XL} width={700}/>
            </div>
            <div className='subtitle_videos'>
               <Texts text='Просто посмотрите как мы работаем' size={TextSize.M} width={500}/>
            </div>
            <div className='video_test'>
            <iframe className='video_test' width="710" height="425" src="https://www.youtube.com/embed/BV_QUsOOmW4?si=Ucf58LuBVYSnu96v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
             </div>
      </div>
   );
};
