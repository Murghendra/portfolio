import Link from 'next/link';
//import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
           <h3>Web Developer</h3>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Murghendra Akki</h1>
            <h6 className={styles.bio}>Web Developer | UX/UI</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
        
                    <span key='Apache-Spark' className='Apache-Spark'>
                      HTML5
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      CSS3
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Javascript
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      React
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Computer-Vision
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                   
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      UX/UI
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Python
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Nextjs
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      MongoDB
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Blender
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/ME.jpg"
                width={300}
                height={290}
                alt="Murghendra's Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
