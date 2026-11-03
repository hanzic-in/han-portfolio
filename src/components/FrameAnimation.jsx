import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 238;

export default function FrameAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const images = [];
    let loaded = 0;
    let currentFrame = 0;
    let animation;

    canvas.width = 1920;
    canvas.height = 1080;

    const renderFrame = (index) => {
      const img = images[index];

      if (!img?.complete || !img.naturalWidth) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const loadFrame = (index) => {
      if (images[index]) return;

      const img = new Image();

      img.onload = () => {
        loaded++;

        if (index === currentFrame) {
          renderFrame(index);
        }
      };

      img.src = `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

      images[index] = img;
    };

    // Load first frame immediately
    loadFrame(0);

    // Preload frames progressively
    let nextIndex = 1;

    const preload = () => {
      if (nextIndex >= TOTAL_FRAMES) return;

      loadFrame(nextIndex++);
      requestAnimationFrame(preload);
    };

    const preloadId = requestAnimationFrame(preload);

    // Scroll animation
    animation = gsap.to(
      { frame: 0 },
      {
        frame: TOTAL_FRAMES - 1,
        snap: "frame",
        ease: "none",

        onUpdate() {
          const frame = Math.round(this.targets()[0].frame);

          currentFrame = frame;

          if (!images[frame]) {
            loadFrame(frame);
          }

          renderFrame(frame);
        },

        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "+=2500",
          scrub: 0.5,
          pin: true,
        },
      }
    );

    return () => {
      cancelAnimationFrame(preloadId);
      animation.scrollTrigger?.kill();
      animation.kill();

      images.forEach((img) => {
        if (img) img.src = "";
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
