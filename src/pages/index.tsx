import React, { useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin)

// const _ScrollImageGalay = () => {

//   useEffect(() => {
//     const canvas: any = document.querySelector('.page-home-main-background')
//     const context = canvas.getContext('2d')
//     let cw = 0,
//       ch = 0,
//       hue = 180,
//       img = new Image(),
//       img2 = new Image(),
//       nCubes = 0,
//       cubes = [],
//       Cube = function (index, _x, _y, _s) { //console.log(_x,_y)
//         this.img = img;
//         this.img2 = img2;
//         this.scale = _s;
//         this.x = _x;
//         this.y = _y;
//         this.z = this.img2_opacity = 0;
//         this.draw = function () {
//           context.translate(this.x, this.y + this.z);
//           context.drawImage(this.img, -100 / 2 * this.scale, -200 / 2 * this.scale, 100 * this.scale, 200 * this.scale);
//           context.globalAlpha = this.img2_opacity;
//           context.drawImage(this.img2, -100 / 2 * this.scale, -200 / 2 * this.scale, 100 * this.scale, 200 * this.scale);
//           context.globalAlpha = 1;
//           context.translate(-this.x, -(this.y + this.z));
//         }
//         this.draw();
//       };

//     img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAADIBAMAAADsElnyAAAAJFBMVEVHcEw+Pj5aWloQEBAZGRleXl6AgIDAwMBwcHCampq7u7tzc3M0sGdFAAAABXRSTlMAp/UwQ5FLsO8AAADxSURBVHgB7c9HcQRhDITRn8NgMABDWAjO6ewMYLgsWef8akelk1Pr/upTj023mkZxiK3dqSsODnpmdXBwUBlEaRCYckdtEKVBYModmKbQKDrGHZpaaPyqZxQaRc8oNPVyTaehUVRGURhFYerlmu2D5k3jqimO1+MCU4h5XFzc9sQjaXTO1vMTobMkXgmdBfFKNnTY8UroLIp3YkfxldBhB4QOAkIHAaHDDggdBIQOX0HoICB0EBA6CAgdlkPoICB0+ApCBwGhw1cQOggIBgHh5pCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQH0XuAS5hV4q0a3iHAAAAAElFTkSuQmCC';

//     img2.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAADIBAMAAADsElnyAAAAJFBMVEVHcEylpaXv7+/Gxsa+vr7m5uahoaE/Pz9/f3+Ojo5lZWWCgoKkaSxxAAAABnRSTlMA9TCcskPTdr2ZAAAA40lEQVR4Ae3POW0EQQBE0UZhBEawWBaAzz0QDIVhYgxmZ3X6pFZpIl/18xf8sep8GinFwzMmi8sFk8TlctFkockiGz80WWiyyMYPTRbZKLLxIxtFMIoVwCCSUQSTRDaeZ3POAKPIRpGNIhvPs3m8HOw0Pg+K+8fYo0FsY48GMUkyiEmSQUySDGKSZBCTJIOYZG0QkIVBQDQKydogIBqFRKOQaBSQYBAQDAKCQQSCUUg0CAhmLSAYhUSDgCwMIpFpFJnsW0lJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUnJjyJfg4PNmR1hT+AAAAAASUVORK5CYII=';
//     img.onload = window.onresize = setGrid;

//     function setGrid() { //console.log('set grid')

//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       cw = Math.ceil(canvas.width / 100 + 1);
//       ch = Math.floor(canvas.height / 25 + 10);

//       cubes = [];

//       for (let i = 0, _y = 0; _y < ch; _y++) {
//         for (var _x = 0; _x < cw; _x++) { //console.log(_y%2==0)
//           if (_y % 2 == 0) cubes.push(new Cube(i, -25 + _x * 100, -75 + _y * 25, 0.9));
//           else cubes.push(new Cube(i, 25 + _x * 100, -75 + _y * 25, 0.9));
//           i++;
//         }
//       }

//       nCubes = cubes.length; //console.log(nCubes)
//     }

//     var staggerAnim;
//     function anim() {
//       staggerAnim = gsap.timeline({ onComplete: anim })
//         .add(staggerFrom(gsap.utils.random(0, nCubes, 1)))
//     };

//     function staggerFrom(from) {
//       const timeline = gsap.timeline()
//       return timeline
//         .to(cubes, {
//           duration: 1,
//           z: 125,
//           ease: 'back.in(3)',
//           stagger: {
//             yoyo: true,
//             amount: 2.5,
//             grid: [ch, cw],
//             // overwrite: 'auto',
//             from: from,
//             onComplete: function () { // Like reverse: 1 but make sure to reach a z of 0
//               gsap.to(this.targets(), {
//                 duration: 1,
//                 z: 0,
//                 ease: 'back.out(3)'
//               });
//             }
//           }
//         }, 0)
//         .to(cubes, {
//           duration: 0.6,
//           img2_opacity: 1,
//           stagger: {
//             yoyo: true,
//             amount: 2.5,
//             grid: [ch, cw],
//             // overwrite: 'auto',
//             from: from,
//             onComplete: function () {
//               gsap.to(this.targets(), {
//                 duration: 0.6,
//                 img2_opacity: 0
//               });
//             }
//           }
//         }, 0)
//     }
//     gsap.delayedCall(0.2, anim);

//     canvas.click = function (e) {
//       staggerAnim.eventCallback('onComplete', null);

//       // An approximation that works okay
//       var gridX = Math.floor((e.layerX - (e.layerX / canvas.width * 2 - 1) * 20 - e.layerX / canvas.width * 75) / canvas.width * cw);
//       var gridY = Math.floor((e.layerY - (e.layerY / canvas.height * 2 - 1) * 75 + 40) / canvas.height * ch);
//       var i = cw * gridY + gridX;

//       staggerFrom(i); //console.log(gridX, gridY, i);
//     }

//     gsap.ticker.add(() => { //update on each tick

//       context.clearRect(0, 0, canvas.width, canvas.height);

//       context.globalCompositeOperation = 'source-over';
//       for (var i = 0; i < nCubes; i++) cubes[i].draw();

//       hue -= 0.5;
//       context.globalCompositeOperation = 'lighter';
//       context.fillStyle = 'hsl(' + hue + ', 75%, 25%)';
//       context.fillRect(0, 0, canvas.width, canvas.height);

//     });

//     return () => {
//       return canvas.onclick = null
//     }

//   }, [])

//   return (
//     <canvas className={clsx('page-home-main-background', styles['page-home-main-background'])}></canvas>
//   )

// }

const ScrollImageGalay = () => {

  const imageList = useMemo(() => {
    return [
      "https://picsum.photos/600/600?random=1",
      "https://picsum.photos/600/600?random=2",
      "https://picsum.photos/600/600?random=3",
      "https://picsum.photos/600/600?random=4",
      "https://picsum.photos/600/600?random=5",
      "https://picsum.photos/600/600?random=6",
      "https://picsum.photos/600/600?random=7",
      "https://picsum.photos/600/600?random=8",
    ]
  }, [])

  const queryDom: (query: string) => any = (query) => {
    return document.querySelector(query)
  }

  const hasClass = (dom: any, classNam: string) => {
    return Array.from(dom.classList).includes(classNam)
  }

  useEffect(() => {
    var currentImg = undefined,
      currentImgProps: any = { x: 0, y: 0 },
      isZooming = false,
      column = -1,
      mouse = { x: 0, y: 0 },
      delayedPlay;
    const photoBox = queryDom('.photoBox')

    for (var i = 0; i < 12; i++) {

      if (i % 4 == 0) column++;

      var b: any = document.createElement('div');
      queryDom('.mainBoxes').appendChild(b);

      gsap.set(b, {
        attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
        backgroundImage: 'url(https://assets.codepen.io/721952/' + i + '.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        x: [60, 280, 500][column],
        width: 400,
        height: 640,
        borderRadius: 20,
        scale: 0.5,
        zIndex: 1
      });

      b.tl = gsap.timeline({ paused: true, repeat: -1 })
        .fromTo(b, { y: [-575, 800, 800][column], rotation: -0.05 }, { duration: [40, 35, 26][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none' })
        .progress(i % 4 / 4)
    }


    function pauseBoxes(b) {
      var classStr = 'pb-col0';
      if (hasClass(b, 'pb-col1')) classStr = 'pb-col1';
      if (hasClass(b, 'pb-col2')) classStr = 'pb-col2';
      for (var i = 0; i < queryDom('.mainBoxes').children.length; i++) {
        var b = queryDom('.mainBoxes').children[i];
        if (hasClass(b, classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
      }
    }

    function playBoxes() {
      for (var i = 0; i < queryDom('.mainBoxes').children.length; i++) {
        var tl = queryDom('.mainBoxes').children[i].tl;
        tl.play();
        gsap.to(tl, { duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true });
      }
    }


    window.onload = function () {

      var _tl = gsap.timeline({ onStart: playBoxes })
        .set('.mainContainer', { perspective: 800 })
        .set('.photoBox', { opacity: 1, cursor: 'pointer' })
        .set('.mainBoxes', { left: '75%', xPercent: -50, width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10 })
        .set('.mainClose', { autoAlpha: 0, width: 60, height: 60, left: -30, top: -31, pointerEvents: 'none' })
        .fromTo('.mainContainer', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2)

      photoBox.onmouseenter = function (e) {
        if (currentImg) return;
        if (delayedPlay) delayedPlay.kill();
        pauseBoxes(e.currentTarget);
        var _t = e.currentTarget;
        gsap.to('.photoBox', { duration: 0.2, overwrite: 'auto', opacity: function (i, t) { return (t == _t) ? 1 : 0.33 } });
        gsap.fromTo(_t, { zIndex: 100 }, { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' });
      }

      photoBox.onmouseleave = function (e) {
        if (currentImg) return;
        var _t = e.currentTarget;

        if (gsap.getProperty(_t, 'scale') > 0.62) delayedPlay = gsap.delayedCall(0.3, playBoxes); // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
        else playBoxes();

        gsap.timeline()
          .set(_t, { zIndex: 1 })
          .to(_t, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
          .to('.photoBox', { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
      }

      photoBox.onclick = function (e) {
        if (!isZooming) { //only tween if photoBox isn't currently zooming

          isZooming = true;
          gsap.delayedCall(0.8, function () { isZooming = false });

          if (currentImg) {
            gsap.timeline({ defaults: { ease: 'expo.inOut' } })
              .to('.mainClose', { duration: 0.1, autoAlpha: 0, overwrite: true }, 0)
              .to('.mainBoxes', { duration: 0.5, scale: 1, left: '75%', width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10, overwrite: true }, 0)
              .to('.photoBox', { duration: 0.6, opacity: 1, ease: 'power4.inOut' }, 0)
              .to(currentImg, { duration: 0.6, width: 400, height: 640, borderRadius: 20, x: currentImgProps.x, y: currentImgProps.y, scale: 0.5, rotation: 0, zIndex: 1 }, 0)
            // .add(playBoxes, 0.8)
            currentImg = undefined;
          }

          else {
            pauseBoxes(e.currentTarget)

            currentImg = e.currentTarget;
            currentImgProps.x = gsap.getProperty(currentImg, 'x');
            currentImgProps.y = gsap.getProperty(currentImg, 'y');

            gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
              .set(currentImg, { zIndex: 100 })
              .fromTo('.mainClose', { x: mouse.x, y: mouse.y, background: 'rgba(0,0,0,0)' }, { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' }, 0)
              .to('.photoBox', { opacity: 0 }, 0)
              .to(currentImg, { width: '100%', height: '100%', borderRadius: 0, x: 0, top: 0, y: 0, scale: 1, opacity: 1 }, 0)
              .to('.mainBoxes', { duration: 0.5, left: '50%', width: '100%', rotationX: 0, rotationY: 0, rotationZ: 0 }, 0.15)
              .to('.mainBoxes', { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' }, 0.65)
          }
        }
      }

      if (!!('ontouchstart' in window)) {
        console.log('touch device!')
        mouse.x = window.innerWidth - 50;
        mouse.y = 60;
      }
      else {
        queryDom('.mainContainer').onmousemove = function (e) {
          mouse.x = e.x;
          mouse.y = e.layerY;
          if (currentImg) gsap.to('.mainClose', { duration: 0.1, x: mouse.x, y: mouse.y, overwrite: 'auto' });
        }
      }

    }

  }, [])

  return (
    <div className={clsx(styles['mainContainer'], "mainContainer")}>
      <div className="mainBoxes fs"></div>
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

const ScrollAnimationHome = () => {

  return (
    <section
      className={styles['home-page-main']}
    >
      <ScrollImageGalay />
      <h2>
        自己做的数据可视化大屏
      </h2>
      <div>
        <img className={styles['home-page-main-image']} src={require('../../static/img/home/final-chart.png').default} />
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

  return (
    <section
      className='home-page-section bar-chart-panel'
    >

    </section>
  )

}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
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
