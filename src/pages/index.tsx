import React, { useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimationContainer = () => {

  const introductionList = useMemo(() => {
    return [
      {
        src: require('../../static/img/home/line-chart.png').default,
        content: '制作可视化数据大屏的强大工具。',
        className: styles['line-chart-intro']
      },
      {
        src: require('../../static/img/home/pie-chart.png').default,
        content: '丰富文档帮助更快上手。',
        className: styles['pie-chart-intro']
      },
      {
        src: require('../../static/img/home/scatter-chart.png').default,
        content: '基于百度Echarts提供丰富的图表组件。',
        className: styles['scatter-chart-intro']
      },
      {
        src: require('../../static/img/home/final-chart.png').default,
        content: '功能丰富实现更多样化页面。',
        className: styles['final-chart-intro']
      }
    ]
  }, [])

  useEffect(() => {

    const imagesRight = gsap.utils.toArray('.home-page-section-background-image-right');
    imagesRight.forEach((image: any) => {
      gsap.to(image, { 
        x: '100%',
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          start: "center 70%",
          toggleActions: "play none none reset",
          scrub: true,
        }
      })
    });

    const imagesLeft = gsap.utils.toArray('.home-page-section-background-image-left');
    imagesLeft.forEach((image: any) => {
      gsap.to(image, { 
        x: '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          start: "center 70%",
          toggleActions: "play none none reset",
          scrub: true,
        }
      })
    });

  }, [])

  return (
    <div
      id='scroll-container'
      className={styles['scroll-container']}
    >
      <section
        className={styles['home-page-main']}
      >
        <h2>
          自己做的可视化数据大屏
        </h2>
        <div>
          <img src={require('../../static/img/home/final-chart.png').default} />
        </div>
      </section>
      {
        introductionList.map((item, index) => {
          const { className, content, src } = item
          return (
            <section
              className={clsx(styles['home-page-section'], className)}
            >
              <div
                className={styles['home-page-section-background-left']}
              >
                {
                  (index % 2 === 0) ? <p>{content}</p> : <img className={'home-page-section-background-image-left'} src={src} />
                }
              </div>
              <div
                className={styles['home-page-section-background-right']}
              >
                {
                  (index % 2 !== 0) ? <p>{content}</p> : <img className={'home-page-section-background-image-right'} src={src} />
                }
              </div>
            </section>
          )
        })
      }
      <section
        className='home-page-section bar-chart-panel'
      >

      </section>
      <section
        className='home-page-section line-chart-panel'
      >

      </section>
      <section
        className='home-page-section pie-chart-panel'
      >

      </section>
      <section
        className='home-page-section scatter-chart-panel'
      >

      </section>
      <section
        className='home-page-section radar-chart-panel'
      >

      </section>
    </div>
  )

}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ScrollAnimationContainer />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
