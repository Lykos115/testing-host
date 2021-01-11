import React from 'react';

import styles from './ExperienceCard.module.css'

const experienceCard = (props) => (
    <div className={styles.experienceCard}>
        <div className={styles.jobInfo}>
            <div className={styles.jobTitle}>{props.title}</div>
            <div className={styles.years}>{props.years}</div>
        </div>
        <div className={styles.company}>{props.company}</div>

        <div className={styles.info}>
            {props.children}
        </div>
    </div>
);

export default experienceCard;