import React from 'react';

import styles from '../styles/Experience.module.css';
import Layout from '../hoc/Layout/Layout';
import ExperienceCard from '../Components/ExperienceCard/ExperienceCard';

const experience = () => (
    <Layout>
        <div className={styles.container}>
            <div className={styles.title}> WORK EXPERIENCE</div>

            <ExperienceCard 
                title='Data Assistant' 
                years='2020 - Present' 
                company='Santa Cruz Community Health Center'> 
                    <div>- Transitioning current reports and data to a hosted cloud-based Tableau Server.</div>
                    <div>- Participating in developing and executing new dashboards and ad-hoc reports.</div>
                    <div>- Migrating existing data tables from one database to another.</div>
                    <div>- Documenting current processes and projects.</div>
                </ExperienceCard>

            <ExperienceCard 
                title='Software Developer' 
                years='2019 - Present' 
                company='Digital Nest'>
                    <div>- Meet with customers to understand their problem and needs.</div>
                    <div>- Designing Mobile Apps according to clients needs.</div>
                    <div>- Creating cross platform mobile apps using Flutter and dart.</div>
                    <div>- Creating API’s to pull necessary information needed.</div>
                </ExperienceCard>

            <ExperienceCard 
                title='Cybersecurity Intern' 
                years='June 2019 - August 2019' 
                company='Naval Postgraduate School'>
                    <div>- Worked with a team used code (such as C) to test for vulnerabilities.</div>
                    <div>- Performed multiple penetration tests</div>
                    <div>- Modified and audited code to improve system security</div>
                    <div>- Documenting vulnerabilities and possible exploits</div>
                </ExperienceCard>

        </div>
    </Layout>
)

export default experience;