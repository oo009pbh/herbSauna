import React, {useState, useCallback} from 'react';
import styles from '../styles/main.module.css'
import { mainSect3ImageList } from '../images/mainImageList';
import Image from 'next/image';

const MainSect3 = () => {
    const [facility, setFacility] = useState("footbathroom");

    const onChangeFacility = useCallback(
        (e) => {
            setFacility(e.currentTarget.getAttribute('value'))
        },
        [facility],
    );

    return (
        <section className={styles.section3}>
            <article className={styles.facilityImage}>
                <Image src={mainSect3ImageList[facility]}></Image>
            </article>
            <article className={styles.facilities}>
                <li value="restaurant" onClick={onChangeFacility}>허브식당</li>
                <li value="footbathroom" onClick={onChangeFacility}>족욕실</li>
                <li value="restroom" onClick={onChangeFacility}>수면실</li>
                <li value="playroom" onClick={onChangeFacility}>놀이방</li>
                <li value="showerbooth" onClick={onChangeFacility}>샤워실</li>
                <li value="terrace" onClick={onChangeFacility}>테라스</li>
            </article>
        </section>
    );
};

export default MainSect3;