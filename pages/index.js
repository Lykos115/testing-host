import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import GreenWaves from '../assets/Images/green-waves.svg';
import ImageShape from '../assets/Images/img-shape.svg';
import Layout from '../hoc/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Lykos Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          {/* <div className={styles.clipSvg}></div>
          <svg>
            <clipPath id='mask'>
              <path fill="none" d="M662.5,353.4c-43.6,75.2-150.9,24.2-249,112c-110.2,98.7-62.1,241.4-128,264c-84.8,29.1-287.6-165.8-282-384
                c0.6-24.5,6.4-150,106-244c114-107.6,308.7-134,437-40C643.3,132.4,707.5,275.9,662.5,353.4z"/>
            </clipPath>
          </svg> */}

          <div className={styles.blob}>
            <svg className={styles.size}>
              <GreenWaves />
            </svg>
          </div>

          <div className={styles.land}>
            <div>
              <div className={styles.nameText}>Francisco Herrera</div>
              <div className={styles.subText}>Software Developer from Watsonville, CA</div>
            </div>
            <Image src='/profile2.jpg'
              alt='profile image'
              height={250}
              width={250}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
