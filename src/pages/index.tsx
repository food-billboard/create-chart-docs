import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { debounce } from 'lodash'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BarChart from '@site/static/img/home/bar-chart.svg'
import LineChart from '@site/static/img/home/line-chart.svg'
import PieChart from '@site/static/img/home/pie-chart.svg'
import RadarChart from '@site/static/img/home/radar-chart.svg'
import ScatterChart from '@site/static/img/home/scatter-chart.svg'
import styles from './index.module.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin)

const ScrollImageGallery = () => {

  const currentImgRef = useRef<any>()
  const delayedPlayRef = useRef<any>()
  const isZoomingRef = useRef<boolean>(false)
  const currentImgPropsRef = useRef<any>({ x: 0, y: 0 })
  const mouseRef = useRef<any>({ x: 0, y: 0 })

  const mouseEnter = (e) => {
    if (currentImgRef.current) return;
    if (delayedPlayRef.current) delayedPlayRef.current.kill();
    pauseBoxes(e.currentTarget);
    var _t = e.currentTarget;
    gsap.to('.photoBox', { duration: 0.2, overwrite: 'auto', opacity: function (i, t) { return (t == _t) ? 1 : 0.33 } });
    gsap.fromTo(_t, { zIndex: 100 }, { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' });
  }

  const mouseLeave = (e) => {
    if (currentImgRef.current) return;
    var _t = e.currentTarget;

    if (gsap.getProperty(_t, 'scale') > 0.62) delayedPlayRef.current = gsap.delayedCall(0.3, playBoxes); // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
    else playBoxes();

    gsap.timeline()
      .set(_t, { zIndex: 1 })
      .to(_t, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
      .to('.photoBox', { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
  }

  const onClick = (e) => {
    if (!isZoomingRef.current) { //only tween if photoBox isn't currently zooming

      isZoomingRef.current = true;
      gsap.delayedCall(0.8, function () { isZoomingRef.current = false });

      if (currentImgRef.current) {
        gsap.timeline({ defaults: { ease: 'expo.inOut' } })
          .to('.mainClose', { duration: 0.1, autoAlpha: 0, overwrite: true }, 0)
          .to('.mainBoxes', { duration: 0.5, scale: 1, left: '75%', width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10, overwrite: true }, 0)
          .to('.photoBox', { duration: 0.6, opacity: 1, ease: 'power4.inOut' }, 0)
          .to(currentImgRef.current, { duration: 0.6, width: 500, height: 300, borderRadius: 20, x: currentImgPropsRef.current.x, y: currentImgPropsRef.current.y, scale: 0.5, rotation: 0, zIndex: 1 }, 0)
        // .add(playBoxes, 0.8)
        currentImgRef.current = undefined;
      }

      else {
        pauseBoxes(e.currentTarget)

        currentImgRef.current = e.currentTarget;
        currentImgPropsRef.current.x = gsap.getProperty(currentImgRef.current, 'x');
        currentImgPropsRef.current.y = gsap.getProperty(currentImgRef.current, 'y');

        gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
          .set(currentImgRef.current, { zIndex: 100 })
          .fromTo('.mainClose', { x: mouseRef.current.x, y: mouseRef.current.y, background: 'rgba(0,0,0,0)' }, { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' }, 0)
          .to('.photoBox', { opacity: 0 }, 0)
          .to(currentImgRef.current, { width: '100%', height: '100%', borderRadius: 0, x: 0, top: 0, y: 0, scale: 1, opacity: 1 }, 0)
          .to('.mainBoxes', { duration: 0.5, left: '50%', width: '100%', rotationX: 0, rotationY: 0, rotationZ: 0 }, 0.15)
          .to('.mainBoxes', { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' }, 0.65)
      }
    }
  }

  const imageList = useMemo(() => {
    let column = -1
    return new Array(12).fill(0).map((_, index) => {

      if (index % 4 == 0) column++

      return (
        <div
          style={{
            backgroundImage: 'url(/img/home/gallery/' + (index + 1) + '.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            width: 500,
            height: 300,
            borderRadius: 20,
            zIndex: 1
          }}
          id={'b' + index}
          className={'photoBox pb-col' + column}
          onMouseLeave={mouseLeave}
          onMouseEnter={mouseEnter}
          onClick={onClick}
          key={index}
        />
      )

    })
  }, [])

  const queryDom: (query: string) => any = (query) => {
    return document.querySelector(query)
  }

  const hasClass = (dom: any, classNam: string) => {
    return Array.from(dom.classList).includes(classNam)
  }

  const pauseBoxes = (b) => {
    var classStr = 'pb-col0';
    if (hasClass(b, 'pb-col1')) classStr = 'pb-col1';
    if (hasClass(b, 'pb-col2')) classStr = 'pb-col2';
    const dom = queryDom('.mainBoxes')
    for (var i = 0; i < dom.children.length; i++) {
      var b = dom.children[i];
      if (hasClass(b, classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
    }
  }

  const playBoxes = () => {
    const dom = queryDom('.mainBoxes')
    for (var i = 0; i < dom.children.length; i++) {
      var tl = dom.children[i].tl;
      tl.play();
      gsap.to(tl, { duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true });
    }
  }

  const onLoad = () => {
    var _tl = gsap.timeline({ onStart: playBoxes })
      .set('.mainContainer', { perspective: 800 })
      .set('.photoBox', { opacity: 1, cursor: 'pointer' })
      .set('.mainBoxes', { left: '75%', xPercent: -50, width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10 })
      .set('.mainClose', { autoAlpha: 0, width: 60, height: 60, left: -30, top: -31, pointerEvents: 'none' })
      .fromTo('.mainContainer', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2)

    if (!!('ontouchstart' in window)) {
      mouseRef.current.x = window.innerWidth - 50;
      mouseRef.current.y = 60;
    }
    else {
      queryDom('.mainContainer').onmousemove = function (e) {
        mouseRef.current.x = e.x;
        mouseRef.current.y = e.layerY;
        if (currentImgRef.current) gsap.to('.mainClose', { duration: 0.1, x: mouseRef.current.x, y: mouseRef.current.y, overwrite: 'auto' });
      }
    }
  }

  useEffect(() => {
    let column = -1;

    const imageList = document.querySelectorAll('.mainBoxes div')
    imageList.forEach((item: any, index) => {
      if (index % 4 == 0) column++
      gsap.set(item, {
        x: [60, 330, 600][column],
        scale: 0.5,
      })
      item.tl = gsap.timeline({ paused: true, repeat: -1 })
        .fromTo(item, { y: [-225, 450, 450][column], rotation: -0.05 }, { duration: [40, 35, 26][column], y: [450, -225, -225][column], rotation: 0.05, ease: 'none' })
        .progress(index % 4 / 4)
    })

    onLoad()

    // window.addEventListener('load', onLoad)

    // return () => {
    //   window.removeEventListener('load', onLoad)
    // }

  }, [])

  return (
    <div
      className={clsx(styles['mainContainer'], "mainContainer")}
    >
      <div className="mainBoxes fs">
        {
          imageList
        }
      </div>
      <div className="mainClose">
        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" fill="none">
          <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4" />
          <path d="M15,16L45,46 M45,16L15,46" stroke="#000" stroke-width="3.5" opacity="0.5" />
          <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" stroke-width="2" />
        </svg> */}

      </div>
    </div>
  )

}

const ScrollPathAnimation = () => {
  
  const [ width, setWidth ] = useState<number>(document.body.clientWidth)

  const onResize = () => {
    setWidth(document.body.clientWidth)

     
    gsap.to(".rect", {
      duration: 10,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "power1.inOut",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });

  }

  const dPath = useMemo(() => {

    return `
      M48 100
      C48 100, ${width / 4} -30, ${width / 2} 48
      C${width / 2} 48, ${width / 4 * 3} 230, ${width - 48} 100
    `

  }, [width])

  const debounceOnResize = debounce(onResize, 100)

  useEffect(() => {

    window.addEventListener('resize', debounceOnResize)

    debounceOnResize() 

    return () => {
      window.removeEventListener('resize', debounceOnResize)
    }

  }, [])

  return (
    <div
      className={styles['home-page-main-path']}
    >
      <svg width='100%' height='100%' id="svg">
        <path 
          d={dPath}
          id='path' 
          stroke="transparent" 
          fill="transparent" 
        />
        <g className="rect">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11920" width="48" height="48"><path d="M903.52 861.248c74.72-84.64 120.448-195.456 120.448-317.216H544.032l359.488 317.216z" fill="#EACA44" p-id="11921"></path><path d="M1024 480.032c0-265.088-214.912-480-480-480v480h480z" fill="#EF4D4D" p-id="11922"></path><path d="M1024 480.032c0-265.088-214.912-480-480-480v64c229.76 0 416 186.24 416 416h64z" fill="" p-id="11923"></path><path d="M543.968 960.032v64-64z" fill="" p-id="11924"></path><path d="M480 576V64.032c-265.088 0-480 214.912-480 480s214.912 480 480 480c130.048 0 247.424-52.384 333.856-136.48L480 576z" fill="#469FCC" p-id="11925"></path><path d="M766.752 843.648c-74.624 71.584-175.136 116.384-286.752 116.384-229.76 0-416-186.24-416-416s186.24-416 416-416v-64c-265.088 0-480 214.912-480 480s214.912 480 480 480c130.048 0 247.168-52.672 333.568-136.704l-46.816-43.68z" fill="" p-id="11926"></path><path d="M903.552 861.248c74.688-84.64 120.416-195.456 120.416-317.216h-64c0 105.536-39.584 201.6-104.352 274.912l47.936 42.304z" fill="" p-id="11927"></path></svg>
        </g>
      </svg>
    </div>
  )

}

const ScrollAnimationHome = () => {

  const title = useMemo(() => {
    return '自己做的数据可视化大屏'.split('').map(item => {
      return (
        <span key={item}>{item}</span>
      )
    })
  }, [])

  useEffect(() => {

    gsap.from(".home-page-main-title h2 span", {
      duration: 1,
      rotation: 360,
      y: -100,
      stagger: 0.5
    })

    gsap.from(".home-page-main-button", {
      duration: 2,
      rotation: 360,
      x: -300,
      stagger: 0.5
    })

    gsap.from('.home-page-main-image', {
      scale: 0,
      rotate: 360,
      duration: 2
    })

  }, [])

  return (
    <section
      className={styles['home-page-main']}
    >
      <ScrollImageGallery />
      <div
        className={clsx(styles['home-page-main-title'], 'home-page-main-title')}
      >
        <h2>
          {
            title
          }
        </h2>
        <div>
          <img className={clsx(styles['home-page-main-image'], 'home-page-main-image')} src={require('../../static/img/home/final-chart.png').default} />
        </div>
        <div>
          <Link className='button button--primary home-page-main-button' to="/docs/介绍">操作文档</Link>
          <Link style={{ margin: '20px 36px' }} className='button button--info home-page-main-button' to="/blog">开发文档</Link>
        </div>
      </div>
      <ScrollPathAnimation />
      <div
        className={styles['home-page-main-footer']}
      >
        向下看
        <div className={'arrow-component'}></div>
      </div>
    </section>
  )
}

const ScrollAnimationContainer = () => {

  const introductionList = useMemo(() => {
    return [
      {
        src: require('../../static/img/home/line-chart.png').default,
        content: '制作可视化数据大屏的强大工具。😈',
        className: styles['line-chart-intro'],
        backgroundColor: '#4ea397'
      },
      {
        src: require('../../static/img/home/pie-chart.png').default,
        content: '丰富文档帮助更快上手。💪',
        className: styles['pie-chart-intro'],
        backgroundColor: '#22c3aa'
      },
      {
        src: require('../../static/img/home/scatter-chart.png').default,
        content: '基于百度Echarts提供丰富的图表组件。📈',
        className: styles['scatter-chart-intro'],
        backgroundColor: '#7bd9a5'
      },
      {
        src: require('../../static/img/home/final-chart.png').default,
        content: '功能丰富实现更多样化页面。👍',
        className: styles['final-chart-intro'],
        backgroundColor: '#d0648a'
      }
    ]
  }, [])

  useEffect(() => {

    // 右边图片
    const imagesRight = gsap.utils.toArray('.home-page-section-background-image-right');
    imagesRight.forEach((image: any) => {
      gsap.from(image, {
        x: '100%',
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          start: 'bottom bottom',
          toggleActions: "play none none reverse",
          // scrub: true,
        }
      })
    });

    // 左边图片
    const imagesLeft = gsap.utils.toArray('.home-page-section-background-image-left');
    imagesLeft.forEach((image: any) => {
      gsap.from(image, {
        x: '-100%',
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          start: 'bottom bottom',
          toggleActions: "play none none reverse",
        }
      })
    });

    // 文字
    const textAll = gsap.utils.toArray('.home-page-section-background-text')
    textAll.forEach((text: any) => {
      gsap.from(text, {
        color: 'black',
        text: '',
        scale: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'bottom bottom',
          // onEnter onLeave onEnterBack onLeaveBack
          // “play”, “pause”, “resume”, “reset”, “restart”, “complete”, “reverse”, and “none”
          toggleActions: "play none none reverse",
        }
      })
    })


  }, [])

  return (
    <div
      id='scroll-container'
      className={styles['scroll-container']}
    >
      {
        introductionList.map((item, index) => {
          const { className, content, src, backgroundColor } = item
          return (
            <section
              className={clsx(styles['home-page-section'], className)}
              key={content}
            >
              <div
                className={styles['home-page-section-background-left']}
                style={{ backgroundColor: index % 2 === 0 ? backgroundColor : 'unset' }}
              >
                {
                  (index % 2 === 0) ? <p className={'home-page-section-background-text'}>{content}</p> : <img className={'home-page-section-background-image-left'} src={src} />
                }
              </div>
              <div
                className={styles['home-page-section-background-right']}
                style={{ backgroundColor: index % 2 !== 0 ? backgroundColor : 'unset' }}
              >
                {
                  (index % 2 !== 0) ? <p className={'home-page-section-background-text'}>{content}</p> : <img className={'home-page-section-background-image-right'} src={src} />
                }
              </div>
            </section>
          )
        })
      }
    </div>
  )

}

const ScrollAnimationChart = () => {

  const timeline = useRef<gsap.core.Timeline>()

  const initial = () => {
    animation()
  }

  const animation = () => {
    if(timeline.current) {
      timeline.current.play()
      return 
    }
    
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-page-section',
        start: 'center bottom',
        toggleActions: "play none none reset",
      }
    })

    timeline.current
      // 画布生成动画    
      .from('.home-page-section-chart-animation-panel', {
        scale: 0,
        duration: 2,
        opacity: 0,
        transformOrigin: 'center'
      })
      // 图表成型动画
      .from("div[class^='home-page-section-chart-animation-list'] path", {
        x: () => {
          return Math.floor(Math.random() * 50 + 50)
        },
        y: () => {
          return Math.floor(Math.random() * 50 + 50)
        },
        scale: 0,
        rotate: () => {
          return Math.floor(Math.random() * 360) * (Math.random() > 0.5 ? 1 : -1)
        },
        duration: () => {
          return Math.random() * 1 + 1
        },
        opacity: 0,
      })
      // 图表放置画布动画
      .to("div[class^='home-page-section-chart-animation-list'] svg", {
        delay: 1,
        x: '40vw',
        y: (index) => {
          return [30, 20, 0, -20, -30][index] + 'vh'
        },
        opacity: 0
      })
      // 展示画布内图表
      .to("div[class^='home-page-section-chart-animation-panel-wrapper'] svg", {
        opacity: 1
      })
      // 去掉左边列表
      .to("div[class^='home-page-section-chart-animation-list']", {
        display: 'none'
      })
  }

  const onResize = debounce(initial, 100)

  useEffect(() => {

    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }

  }, [])

  return (
    <section
      className={clsx('home-page-section', styles['home-page-section-chart-animation'])}
    >
      <div
        className={styles['home-page-section-chart-animation-list']}
      >
        <BarChart />
        <LineChart />
        <PieChart />
        <RadarChart />
        <ScatterChart />
      </div>
      <div
        className={clsx(styles['home-page-section-chart-animation-panel'], 'home-page-section-chart-animation-panel')}
      >
        <div
          className={styles['home-page-section-chart-animation-panel-wrapper']}
        >
          <div
            className='home-page-section-chart-animation-panel-border-top'
          />
          <div
            className='home-page-section-chart-animation-panel-border-right'
          />
          <div
            className='home-page-section-chart-animation-panel-border-bottom'
          />
          <div
            className='home-page-section-chart-animation-panel-border-left'
          />
          <div
            className={styles['home-page-section-chart-animation-panel-chart-wrapper']}
          >
            <BarChart />
            <LineChart />
            <PieChart />
            <RadarChart />
            <ScatterChart />
          </div>
        </div>
      </div>
    </section>
  )

}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ScrollAnimationHome />
      <main>
        <ScrollAnimationContainer />
        <ScrollAnimationChart />
      </main>
    </Layout>
  );
}
