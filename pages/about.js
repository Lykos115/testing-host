import React from 'react';

import styles from '../styles/About.module.css';
import Layout from '../hoc/Layout/Layout';

const about = () => (
    <Layout>
        <div className={styles.container}>
            <div className={styles.backRectangle}>
                <div className={styles.frontRectangle}>


                    <div className={styles.mainSection}>

                        <div className={styles.aboutMe}>
                            <div className={styles.title}>About Me</div>
                            <div className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>

                        <div className={styles.skillSection}>
                            <div className={styles.title}>Skills</div>
                            <div className={styles.split}>
                                <div className={styles.info}>
                                    <div>- Java</div>
                                    <div>- C++</div>
                                    <div>- SwiftUI</div>
                                    <div>- HTML & CSS</div>
                                    <div>- ReactJS</div>
                                    <div>- GitHub​</div>
                                </div>
                                <div className={styles.info}>
                                    <div>- SQL</div>
                                    <div>- C</div>
                                    <div>- SwiftUI</div>
                                    <div>- Javascript</div>
                                    <div>- Python</div>
                                    <div>- PHP</div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    </Layout>
)

// SQL
// C ​
// Javascript 
// Python 
// PHP 
// Splunk 
// Metasploit
// ReactJS
// CRM


export default about;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
