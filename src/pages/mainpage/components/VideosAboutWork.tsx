import React from 'react';
import { Images } from 'shared/ui/images/Images';
import bg2 from 'shared/assets/bg_video.jpeg';
import { TextSize, Texts } from 'shared/ui/texts/Texts';
import { useInView } from 'react-intersection-observer';
import './VideosAboutWork.css';

export const VideosAboutWork = () => {
   const {ref, inView} = useInView({
      threshold: 0.2,
      triggerOnce: true
   })

   const testStyle = inView ? 'active' : 'nonactive';

   return (
      <div className='wrapper_videos'>
         <Images className='bg_videos' img={bg2} />
            <div ref={ref} className='body_wrapper'>
                <div className={`title_videos `}>
               <Texts text='Видео о нашей работе' align='center' size={TextSize.XL} width={700}/>
            </div>
            <div className={`subtitle_videos `}>
               <Texts text='Просто посмотрите как мы работаем' align='center' size={TextSize.M} width={500}/>
            </div>
            <div className={`video_test ${testStyle}`}>
            <iframe className='video_test' width="710" height="425" src="https://www.youtube.com/embed/BV_QUsOOmW4?si=Ucf58LuBVYSnu96v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
             </div>
      </div>
   );
};
