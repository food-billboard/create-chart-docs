import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import ScrollMagic from 'scrollmagic'

const ScrollAnimationContainer = () => {

  useEffect(() => {

    const controller = new ScrollMagic.Controller({
      vertical: true,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    })

    const scene = new ScrollMagic.Scene({
      offset: 100,
      duration: 400,
      triggerElement: '#test-id'
    });

    scene.setPin('#test-id')

    controller.addScene(scene)

  }, [])

  return (
    <div
      style={{
        height: 3000,
      }}
    >
      <div
        id='test-id'
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          position: 'relative',
          top: 1500,
          left: 0
        }}
      >

      </div>
    </div>
  )

}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
  const {siteConfig} = useDocusaurusContext();
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
