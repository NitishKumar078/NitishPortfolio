'use client';
import { useEffect, useRef } from 'react';

export default function ScrollReveal() {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    // Scroll reveal
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('on'), i * 80);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.rv, .rv2, .rv3').forEach(el => revObs.observe(el));

    // Skill bar animation
    const skillRoot = document.getElementById('skillroot');
    let barsAnimated = false;
    if (skillRoot) {
      const barObs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !barsAnimated) {
              barsAnimated = true;
              entry.target.querySelectorAll<HTMLElement>('.bfill').forEach((bar, i) => {
                const w = parseFloat(bar.dataset.w || '0');
                setTimeout(() => {
                  bar.style.transform = `scaleX(${w})`;
                  bar.classList.add('go');
                }, i * 75 + 200);
              });
            }
          });
        },
        { threshold: 0.15 }
      );
      barObs.observe(skillRoot);
    }

    return () => {
      revObs.disconnect();
    };
  }, []);

  return null;
}
