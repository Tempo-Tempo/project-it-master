import React from 'react';

export interface ImagesProps {
   className?: string,
   img: string,
   width: number,
   height?: number,
}

export const Images = ( props : ImagesProps) => {
   const {img, width, height, className } = props;
   return (
      <img src={img} alt="" width={width} height={height} className={className} />
   );
};

