import React from 'react';

import styles from '../styles/Projects.module.css';
import Layout from '../hoc/Layout/Layout';
import ProjectCard from '../Components/ProjectCard/ProjectCard';

const projects = () => (
    <Layout>
        <div className={styles.container}>
            <div className={styles.title}>
                MY PROJECTS
            </div> 
            <div className={styles.row}>
                <ProjectCard img='/scrimmers.png' alt='scrimmer project'> Test Card for scrimms</ProjectCard>
                <ProjectCard img='/scrimmers.png' alt='scrimmer project'> Test Card for scrimms</ProjectCard>
            </div>
            <div className={styles.row}>
                <ProjectCard img='/scrimmers.png' alt='scrimmer project'> Test Card for scrimms</ProjectCard>
                <ProjectCard img='/scrimmers.png' alt='scrimmer project'> Test Card for scrimms</ProjectCard>
            </div>
        </div>
    </Layout>
)

export default projects;

// ECPunch
// scrimmers gg
// Flash Card IOS app
// WOLF PACK eCommerce
