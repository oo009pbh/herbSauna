import React, { useState, useCallback } from 'react';
import styles from '../styles/main.module.css'
import { mainSect2ImageList } from '../images/mainImageList';
import Image from 'next/image';

const titleArray = {
    "sauna": "허브 아로마로 온몸에 허브팩을 하는 듯한 습식 찜질방",
    "footBath": "피곤함을 날려주는 향기로운 아로마 테라피, 허브 족욕",
    "valley": "찜질후 계곡에서 발담가 보실래요?"
}
const colors = {
    "sauna": "#f5f5dc",
    "footBath": "#c7e2ad",
    "valley": "#79d2e6"
}
const MainSect2 = () => {
    const [title, setTitle] = useState(titleArray["sauna"]);
    const [background, setBackground] = useState(colors["sauna"]);
    const [sauna, setSauna] = useState(true);
    const [footBath, setFootBath] = useState(true);
    const [valley, setValley] = useState(true);
    
    const onChangeMouseOver = useCallback(
        (e) => {
            setTitle(titleArray[e.currentTarget.getAttribute('value')]);
            setBackground(colors[e.currentTarget.getAttribute('value')]);
        },
        [title],
    );
    return (
        <section className={styles.section2} style={{ backgroundColor: background }}>
            <article className={styles.title}>
                <h3 className={styles.titleText}>
                    {title}
                </h3>
            </article>
            <article className={styles.images}>
                <div 
                    onMouseOver={onChangeMouseOver}
                    value="sauna"
                    className={styles.box}>
                    <Image 
                        onMouseOver={() => setSauna(false)}
                        onMouseOut={() => setSauna(true)}
                        src={sauna ? mainSect2ImageList["sauna"]["1"] : mainSect2ImageList["sauna"]["2"]}
                        quality={100} />
                </div>
                <div 
                    onMouseOver={onChangeMouseOver}
                    value="footBath"
                    className={styles.box}>
                    <Image 
                        onMouseOver={() => setFootBath(false)}
                        onMouseOut={() => setFootBath(true)}
                        src={footBath ? mainSect2ImageList["footBath"]["1"] : mainSect2ImageList["footBath"]["2"]} 
                        quality={100} />
                </div>
                <div 
                    onMouseOver={onChangeMouseOver}
                    value="valley"
                    className={styles.box}>
                    <Image
                        onMouseOver={() => setValley(false)}
                        onMouseOut={() => setValley(true)}
                        src={valley ? mainSect2ImageList["valley"]["1"] : mainSect2ImageList["valley"]["2"]} 
                        quality={100} />
                </div>
            </article>
        </section>
    );
};

export default MainSect2;