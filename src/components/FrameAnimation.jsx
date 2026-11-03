import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 238;

export default function FrameAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", {
      alpha: false
    });

    const images = new Array(TOTAL_FRAMES);

    let currentFrame = 0;
    let animation;
    let resizeObserver;
    let preloadIndex = 0;
    let destroyed = false;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      renderFrame(currentFrame);
    };

    const renderFrame = (index) => {
      const img = images[index];

      if (!img?.complete || !img.naturalWidth) return;

      const width = canvas.width;
      const height = canvas.height;

      const imageRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = width / height;

      let sx = 0;
      let sy = 0;
      let sw = img.naturalWidth;
      let sh = img.naturalHeight;

      if (imageRatio > canvasRatio) {
        sw = img.naturalHeight * canvasRatio;

        const focusX = window.innerWidth <= 768 ? 0.50 : 0.5;

        sx = Math.max(
          0,
          Math.min(
            img.naturalWidth - sw,
            img.naturalWidth * focusX - sw / 2
          )
        );
      } else {
        sh = img.naturalWidth / canvasRatio;
        sy = (img.naturalHeight - sh) / 2;
      }

      ctx.clearRect(0, 0, width, height);

      ctx.drawImage(
        img,
        sx, sy, sw, sh,
        0, 0, width, height
      );
    };

    const loadFrame = (index) => {
      if (index < 0 || index >= TOTAL_FRAMES) return;

      if (images[index]) return;

      const img = new Image();

      img.onload = () => {
        if (!destroyed && index === currentFrame) {
          renderFrame(index);
        }
      };

      img.src = `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

      images[index] = img;
    };

    loadFrame(0);

    const preload = () => {
      if (destroyed || preloadIndex >= TOTAL_FRAMES) return;

      loadFrame(preloadIndex++);

      setTimeout(preload, 15);
    };

    preloadIndex = 1;
    preload();

    resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    resizeCanvas();

    const playhead = { frame: 0 };

    animation = gsap.to(playhead, {
      frame: TOTAL_FRAMES - 1,
      ease: "none",

      onUpdate() {
        currentFrame = Math.round(playhead.frame);

        loadFrame(currentFrame);
        renderFrame(currentFrame);
      },

      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=2500",
        scrub: 0.5,
        pin: true
      }
    });

    return () => {
      destroyed = true;

      resizeObserver?.disconnect();

      animation?.scrollTrigger?.kill();
      animation?.kill();

      images.forEach((img) => {
        if (img) img.onload = null;
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="portrait-canvas"
    />
  );
}
