import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image'
import { mainImageList } from '../images/mainImageList';

const MainSect1 = () => {
    const imageIndex = [1, 2, 3, 4, 5, 6];
    return (
        <section>
            <Carousel fade={true} infinite={true} autoplay>
                {imageIndex.map((number, i) => {
                    return <Image key={i} src={mainImageList[number]} quality={100} />;
                })}
            </Carousel>
        </section>
    );
};

export default MainSect1;