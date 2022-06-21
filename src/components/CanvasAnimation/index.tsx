import React, { useEffect } from 'react';
import { gsap } from 'gsap'
import clsx from 'clsx';
import styles from './index.module.css'

const ScrollImageGalay = () => {

  useEffect(() => {
    const canvas: any = document.querySelector('.page-home-main-background')
    const context = canvas.getContext('2d')
    let cw = 0,
      ch = 0,
      hue = 180,
      img = new Image(),
      img2 = new Image(),
      nCubes = 0,
      cubes = [],
      Cube = function (index, _x, _y, _s) { //console.log(_x,_y)
        this.img = img;
        this.img2 = img2;
        this.scale = _s;
        this.x = _x;
        this.y = _y;
        this.z = this.img2_opacity = 0;
        this.draw = function () {
          context.translate(this.x, this.y + this.z);
          context.drawImage(this.img, -100 / 2 * this.scale, -200 / 2 * this.scale, 100 * this.scale, 200 * this.scale);
          context.globalAlpha = this.img2_opacity;
          context.drawImage(this.img2, -100 / 2 * this.scale, -200 / 2 * this.scale, 100 * this.scale, 200 * this.scale);
          context.globalAlpha = 1;
          context.translate(-this.x, -(this.y + this.z));
        }
        this.draw();
      };

    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAADIBAMAAADsElnyAAAAJFBMVEVHcEw+Pj5aWloQEBAZGRleXl6AgIDAwMBwcHCampq7u7tzc3M0sGdFAAAABXRSTlMAp/UwQ5FLsO8AAADxSURBVHgB7c9HcQRhDITRn8NgMABDWAjO6ewMYLgsWef8akelk1Pr/upTj023mkZxiK3dqSsODnpmdXBwUBlEaRCYckdtEKVBYModmKbQKDrGHZpaaPyqZxQaRc8oNPVyTaehUVRGURhFYerlmu2D5k3jqimO1+MCU4h5XFzc9sQjaXTO1vMTobMkXgmdBfFKNnTY8UroLIp3YkfxldBhB4QOAkIHAaHDDggdBIQOX0HoICB0EBA6CAgdlkPoICB0+ApCBwGhw1cQOggIBgHh5pCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQH0XuAS5hV4q0a3iHAAAAAElFTkSuQmCC';

    img2.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAADIBAMAAADsElnyAAAAJFBMVEVHcEylpaXv7+/Gxsa+vr7m5uahoaE/Pz9/f3+Ojo5lZWWCgoKkaSxxAAAABnRSTlMA9TCcskPTdr2ZAAAA40lEQVR4Ae3POW0EQQBE0UZhBEawWBaAzz0QDIVhYgxmZ3X6pFZpIl/18xf8sep8GinFwzMmi8sFk8TlctFkockiGz80WWiyyMYPTRbZKLLxIxtFMIoVwCCSUQSTRDaeZ3POAKPIRpGNIhvPs3m8HOw0Pg+K+8fYo0FsY48GMUkyiEmSQUySDGKSZBCTJIOYZG0QkIVBQDQKydogIBqFRKOQaBSQYBAQDAKCQQSCUUg0CAhmLSAYhUSDgCwMIpFpFJnsW0lJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUnJjyJfg4PNmR1hT+AAAAAASUVORK5CYII=';
    img.onload = window.onresize = setGrid;

    function setGrid() { //console.log('set grid')

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cw = Math.ceil(canvas.width / 100 + 1);
      ch = Math.floor(canvas.height / 25 + 10);

      cubes = [];

      for (let i = 0, _y = 0; _y < ch; _y++) {
        for (var _x = 0; _x < cw; _x++) { //console.log(_y%2==0)
          if (_y % 2 == 0) cubes.push(new Cube(i, -25 + _x * 100, -75 + _y * 25, 0.9));
          else cubes.push(new Cube(i, 25 + _x * 100, -75 + _y * 25, 0.9));
          i++;
        }
      }

      nCubes = cubes.length; //console.log(nCubes)
    }

    var staggerAnim;
    function anim() {
      staggerAnim = gsap.timeline({ onComplete: anim })
        .add(staggerFrom(gsap.utils.random(0, nCubes, 1)))
    };

    function staggerFrom(from) {
      const timeline = gsap.timeline()
      return timeline
        .to(cubes, {
          duration: 1,
          z: 125,
          ease: 'back.in(3)',
          stagger: {
            yoyo: true,
            amount: 2.5,
            grid: [ch, cw],
            // overwrite: 'auto',
            from: from,
            onComplete: function () { // Like reverse: 1 but make sure to reach a z of 0
              gsap.to(this.targets(), {
                duration: 1,
                z: 0,
                ease: 'back.out(3)'
              });
            }
          }
        }, 0)
        .to(cubes, {
          duration: 0.6,
          img2_opacity: 1,
          stagger: {
            yoyo: true,
            amount: 2.5,
            grid: [ch, cw],
            // overwrite: 'auto',
            from: from,
            onComplete: function () {
              gsap.to(this.targets(), {
                duration: 0.6,
                img2_opacity: 0
              });
            }
          }
        }, 0)
    }
    gsap.delayedCall(0.2, anim);

    canvas.click = function (e) {
      staggerAnim.eventCallback('onComplete', null);

      // An approximation that works okay
      var gridX = Math.floor((e.layerX - (e.layerX / canvas.width * 2 - 1) * 20 - e.layerX / canvas.width * 75) / canvas.width * cw);
      var gridY = Math.floor((e.layerY - (e.layerY / canvas.height * 2 - 1) * 75 + 40) / canvas.height * ch);
      var i = cw * gridY + gridX;

      staggerFrom(i); //console.log(gridX, gridY, i);
    }

    gsap.ticker.add(() => { //update on each tick

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.globalCompositeOperation = 'source-over';
      for (var i = 0; i < nCubes; i++) cubes[i].draw();

      hue -= 0.5;
      context.globalCompositeOperation = 'lighter';
      context.fillStyle = 'hsl(' + hue + ', 75%, 25%)';
      context.fillRect(0, 0, canvas.width, canvas.height);

    });

    return () => {
      return canvas.onclick = null
    }

  }, [])

  return (
    <canvas className={clsx('page-home-main-background', styles['page-home-main-background'])}></canvas>
  )

}

export default ScrollImageGalay