import React from 'react';
import Image from 'next/image';

import styles from './ProjectCard.module.css';

const projectCard = (props) => (    
    <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
                <Image
                    className={styles.round}
                    src={props.img}
                    alt={props.alt}
                    width={450}
                    height={250}/>
            </div>
            <div className={styles.flipCardBack}>
                {props.children}
            </div>
        </div>
    </div>
)

export default projectCard;