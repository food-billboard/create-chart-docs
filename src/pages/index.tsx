import React, { useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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

      if(index % 4 == 0) column ++ 

      return (
        <div
          style={{
            backgroundImage: 'url(/img/home/gallery/' + (index + 1) + '.jpg)',
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
      if(index % 4 == 0) column ++ 
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

  useEffect(() => {
    gsap.to(".rect", {
      duration: 10, 
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "power1.inOut",
      motionPath:{
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });
  }, [])

  return (
    <div
      className={styles['home-page-main-path']}
    >
      <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
        <circle cx="100" cy="100" r="3" />
        <circle cx="300" cy="20" r="3" />
        <path stroke="#000" d="m52.49997,96.5c0,1 0.17105,1.15224 0.72903,3c0.39455,1.30656 1.23391,3.186 2.18708,5c0.60284,1.14727 1.45805,2 2.18708,3c0.72903,1 0.86463,1.69255 2.18708,3c0.83639,0.8269 1.32956,1.48626 2.91611,2c0.70952,0.22975 0.76803,0.5405 2.18708,1c1.58654,0.51374 3.64513,1 6.56124,1c2.18708,0 4.37416,0 8.01929,0c2.91611,0 5.91022,0.91901 8.74832,0c1.58654,-0.51374 3.59712,-1.14429 5.10319,-2c2.1299,-1.21015 3.79945,-1.71412 5.83221,-4c1.59463,-1.79319 3.19972,-2.65593 5.10319,-6c2.61607,-4.59599 3.64513,-7 5.10319,-10c1.45805,-3 1.90323,-5.15928 2.91611,-8c1.15486,-3.23892 1.59677,-4.88152 2.91611,-8c0.81822,-1.934 1.45805,-4 2.91611,-7c1.45805,-3 2.18708,-4 2.91611,-5c0.72903,-1 2.93561,-1.77025 3.64513,-2c1.58655,-0.51374 2.18708,-1 2.18708,-1c1.45805,0 3.5566,1.49346 5.83221,2c1.43923,0.32037 2.63712,1.07612 2.91611,2c0.39455,1.30656 1.45805,2 2.18708,3c0.72903,1 1.45805,3 2.18708,5c0.72903,2 1.14421,4.133 2.18708,8c0.56558,2.09718 0.22654,3.08025 0.72903,6c0.37454,2.17625 0.39404,4.0535 0.72903,6c0.37454,2.17625 0.22654,4.08025 0.72903,7c0.37454,2.17625 1.12306,6.0535 1.45805,8c0.37454,2.17625 1.45805,4 2.18708,5c0.72903,1 1.3507,3.1731 2.18708,4c1.32245,1.30745 3.19815,2.91761 5.10319,4c2.0206,1.14805 5.74368,2.49346 8.01929,3c2.87845,0.64073 6.50714,1.49755 10.20638,2c3.62739,0.49269 7.32039,0.15277 10.20638,-1c2.21344,-0.88413 4.16575,-2.21168 5.83221,-5c2.61457,-4.37469 5.40131,-8.77636 7.29027,-14c1.74454,-4.82428 3.24301,-8.80565 4.37416,-13c1.04287,-3.867 1.56324,-6.93414 2.18708,-9c0.88223,-2.92156 0.72903,-6 1.45805,-8c0.72903,-2 1.08877,-5.87856 1.45805,-9c0.23355,-1.97417 0.72903,-4 0.72903,-7c0,-2 0.39404,-5.0535 0.72903,-7c0.37454,-2.17625 0.72903,-4 1.45805,-5c0.72903,-1 0.72903,-2 1.45805,-2c0,0 0.72903,-1 2.18708,-1c2.91611,0 4.37416,0 5.83221,0c1.45805,0 2.2352,0.87766 3.64513,2c2.27346,1.80972 3.78074,3.69255 5.10319,5c1.67278,1.65381 2.7077,4.21167 4.37416,7c1.30729,2.18734 3.25059,4.69344 3.64513,6c0.55798,1.84776 1.58424,3.85273 2.18708,5c0.95318,1.814 0.85522,3.85273 1.45805,5c0.95318,1.814 1.06351,3.69344 1.45805,5c0.55798,1.84776 0.39404,4.0535 0.72903,6c0.37453,2.17625 0.72903,4 1.45805,6c0.72903,2 0.50488,4.186 1.45805,6c1.20567,2.29454 2.18708,3 2.91611,5c0.72903,2 1.45805,3 2.18708,4c0.72903,1 2.18708,2 4.37416,3c2.18708,1 4.32005,2.49755 8.01929,3c3.6274,0.49269 8.01929,0 10.9354,0c3.64513,0 6.72846,-0.33199 9.47735,-2c2.40384,-1.45864 5.98653,-4.71412 8.01929,-7c2.39194,-2.68979 3.91585,-6.74674 5.83221,-11c1.71404,-3.80423 3.05482,-7.88152 4.37416,-11c1.63644,-3.868 2.39746,-6.86829 3.64513,-11c0.88223,-2.92156 2.29227,-6.93414 2.91611,-9c0.88223,-2.92156 0.6211,-4.22836 1.45805,-7c0.7891,-2.61312 2.18708,-4 2.91611,-5c0.72903,-1 0.94256,-2.29289 1.45805,-3c0.51549,-0.70711 2.18708,-1 2.91611,-1c1.45805,0 2.91611,0 5.10319,0c2.91611,0 5.00716,0.28859 8.01929,2c2.1299,1.21015 5.23879,2.69255 6.56124,4c3.34556,3.30762 5.26555,5.72399 8.01929,9c1.55775,1.85319 2.89317,5.41207 4.37416,9c1.52391,3.69195 3.55903,6.07278 5.83221,11c1.40561,3.04673 3.05482,6.88152 4.37416,10c0.81822,1.934 2.18708,6 2.91611,8c0.72903,2 1.58424,3.85273 2.18708,5c0.95318,1.814 0.72903,4 1.45805,6c0.72903,2 1.59677,4.88152 2.91611,8c0.81822,1.934 1.30485,5.07844 2.18708,8c0.62384,2.06586 1.17906,3.07613 1.45805,4c0.39455,1.30656 0.94256,1.29289 1.45805,2c0.51549,0.70711 0,2 0.72903,3c0.72903,1 0.72903,1 1.45805,2c0.72903,1 0.78451,1.61731 1.45805,2c0.95251,0.5412 0.72903,3 1.45805,4c0.72903,1 1.45805,2 2.91611,4c0,0 0.21354,1.29289 0.72903,2c0.51549,0.70711 0.72903,0 1.45805,1c0,0 0.72903,1 0.72903,1c0.72903,1 0.72903,1 1.45805,2c0,0 0,0 0.72903,1c0,0 0.45004,0.07613 0.72903,1c0.39455,1.30656 1.17906,1.07613 1.45805,2c0.39455,1.30656 1.45805,2 2.18708,3c0.72903,1 1.03438,1.41885 2.18708,3c1.1527,1.58115 1.33006,2.09789 2.18708,4c0.38327,0.85065 1.45805,2 2.18708,3c0.72903,1 1.45805,3 2.18708,4c0.72903,1 1.45805,1 2.18708,2c0,0 0,0 0.72903,0c0,0 0,0 0.72903,0c0.72903,0 1.51354,0.38269 2.18708,0c0.95251,-0.5412 2.18708,-1 3.64513,-4c1.45805,-3 2.99787,-5.9183 5.10319,-10c1.51817,-2.94336 2.70769,-6.21167 4.37416,-9c1.30728,-2.18735 3.64513,-6 5.10319,-9c1.45805,-3 3.79589,-5.81265 5.10319,-8c1.66647,-2.78833 3.87131,-5.71899 5.83221,-9c1.66647,-2.78832 3.49558,-6.11648 4.37416,-8c2.51586,-5.39358 4.89477,-7.21168 6.56124,-10c1.3073,-2.18734 2.63458,-4.297 4.37416,-7c1.07886,-1.67633 1.96295,-5.186 2.91611,-7c1.20567,-2.29454 2.09791,-4.066 2.91611,-6c1.31931,-3.11848 2.32582,-4.88152 3.64513,-8c0.8182,-1.934 1.45805,-4 2.18708,-5c1.45805,-2 2.31327,-4.85273 2.91611,-6c0.95315,-1.814 0.97505,-4.31001 2.18708,-7c0.54201,-1.203 1.29057,-3.02675 1.45805,-4c0.37453,-2.17625 0.5049,-3.18601 1.45805,-5c0.60284,-1.14727 1.79253,-3.69344 2.18708,-5c0.55798,-1.84776 0.72903,-4 1.45805,-6c0.72903,-2 1.45805,-3 1.45805,-4c0,-1 0.72903,-2 0.72903,-2c0,-1 0,-1 0.72903,-2c0,0 -0.51549,-0.70711 0,0c0.51549,0.70711 1.62149,2.90282 2.18708,5c1.04286,3.867 1.81741,8.23401 3.64513,13c2.44743,6.38198 5.10319,11 7.29027,16c2.18708,5 4.05592,8.70251 5.83221,14c0.9633,2.87297 2.33783,6.81266 3.64513,9c1.66647,2.78832 3.47712,5.39099 5.10319,9c1.21203,2.68999 1.73878,7.37202 3.64513,11c1.80851,3.44181 3.22829,7.42335 6.56124,13c1.3073,2.18734 2.91611,5 4.37416,8c1.45805,3 2.33783,4.81265 3.64513,7c1.66647,2.78833 2.69198,5.186 3.64513,7c1.20567,2.29454 2.18708,4 2.91611,6c0.72903,2 0.72903,2 1.45805,2c0.72903,0 0.72903,1 0.72903,1c0,1 0.72903,1 0.72903,2c0,0 0.85522,1.85274 1.45805,3c0.95315,1.814 1.45805,3 2.18708,5c0,0 0.72903,1 1.45805,2c0,0 0,0 0,1c0,0 0,0 0,0c0.72903,1 0.72903,1 0.72903,1c0,0 0.72903,0 1.45805,0c1.45805,0 5.10319,0 8.01929,0c3.64513,0 6.56124,0 8.74832,0c2.91611,0 6.56124,0 10.9354,0c2.91611,0 5.83221,0 8.74832,0c5.83221,0 9.47735,0 13.85151,0c3.64513,0 6.56124,0 10.20638,0c1.45805,0 3.64513,0 5.83221,0c2.18708,0 3.64513,0 5.83221,0c3.64513,0 6.56124,0 9.47735,0c2.91611,0 5.83221,0 9.47735,0c2.91611,0 5.01464,0.49345 7.29027,1c1.43923,0.32036 3.42163,0.4588 4.37416,1c0.67354,0.38269 2.18708,0 2.91611,0c0.72903,0 1.45805,1 1.45805,1c0,0 0.72903,-1 0.72903,-2c0,-3 0,-7 0,-12c0,-3 0.22511,-8.07179 -0.72903,-13c-0.59171,-3.05634 -0.72903,-6 -0.72903,-9c0,-3 -0.72903,-6 -0.72903,-9c0,-5 0.35917,-8.02433 0,-13c-0.36629,-5.0742 -0.72903,-9 -0.72903,-15c0,-3 0,-6 0,-9c0,-3 0,-5 0,-7c0,-3 0,-5 0,-7c0,-1 0.33448,-1.69344 0.72903,-3c0.27899,-0.92388 0,-1 0,-1c3.64513,0 8.74832,0 16.03859,0c8.01929,0 13.85151,0 19.68372,0c6.56124,0 10.20638,0 13.85151,0c2.91611,0 5.83221,0 8.01929,0c2.91611,0 4.37416,0 5.10319,0c0,0 0.72903,0 0.72903,0c0,2 0.36273,4.9258 0.72903,10c0.50285,6.96593 -0.78171,16.0443 0,29c0.73152,12.12408 1.10284,25.06078 2.18708,35c1.10021,10.08575 2.18708,13 2.18708,15c0,1 0,1 0,1c0.72903,1 2.13297,1.49756 5.83221,2c3.62738,0.49269 8.74832,0 10.9354,0c1.45805,0 2.91611,0 4.37416,0c2.18708,0 2.91611,0 4.37416,0c1.45805,0 2.18708,0 2.18708,0c0.72903,0 0.72903,0 1.45805,0c0,0 0.72903,0 0.72903,0c0.72903,1 0.72903,1 1.45805,1c1.45805,0 1.45805,0 1.45805,0c0,0 0.72903,0 0.72903,0c0.72903,-2 0.96953,-5.01363 0.72903,-9c-0.36576,-6.06204 -2.53824,-13.87997 -3.64513,-21c-1.07512,-6.91557 -1.81981,-11.90778 -2.18708,-16c-0.26724,-2.97752 -0.72903,-7 -0.72903,-10c0,-2 -0.72903,-4 -0.72903,-6c0,-2 0,-4 0,-7c0,-3 0,-6 0,-9c0,-3 0,-5 0,-7c0,-1 0,-3 0,-4l0,0" id="path" fill="none"/>
        {/* <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/> */}
        <g className="rect">
          {/* <rect width="85" height="30" fill="dodgerblue" /> */}
          {/* <text x="10" y="19" font-size="14">来自自由发挥，四处抄袭的</text> */}
          
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
      {/* <ScrollImageGallery /> */}
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
