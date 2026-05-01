/* ============================================================
   ParticleField – Physik-basiertes Partikel-System
   Design: "Thermal Precision" – Luft-Molekül-Simulation
   Partikel reagieren auf Mausbewegung (Physik-basiert)
   ============================================================ */

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  mass: number;
  life: number;
  maxLife: number;
}

interface ParticleFieldProps {
  count?: number;
  interactive?: boolean;
  className?: string;
  dark?: boolean;
}

// Light mode colors: subtle red/blue from logo
const COLORS_LIGHT = [
  'rgba(211, 47, 47, ',    // Brand Red
  'rgba(239, 83, 80, ',    // Brand Red Light
  'rgba(21, 101, 192, ',   // Brand Blue
  'rgba(30, 136, 229, ',   // Brand Blue Light
  'rgba(150, 150, 170, ',  // Neutral
];
// Dark mode colors for hero sections with image overlay
const COLORS_DARK = [
  'rgba(255, 255, 255, ',  // White
  'rgba(211, 47, 47, ',    // Brand Red
  'rgba(30, 136, 229, ',   // Brand Blue
  'rgba(255, 200, 200, ',  // Light Red
];

export default function ParticleField({ count = 80, interactive = true, className = '', dark = false }: ParticleFieldProps) {
  const COLORS = dark ? COLORS_DARK : COLORS_LIGHT;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.1,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      color: COLORS[colorIndex],
      mass: Math.random() * 0.5 + 0.5,
      life: Math.random() * 200,
      maxLife: 200 + Math.random() * 200,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => createParticle(canvas));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousemove', handleMouseMove);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics: mouse repulsion
        if (interactive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.vx += (dx / dist) * force * 0.8;
            p.vy += (dy / dist) * force * 0.8;
          }
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Slight upward drift (air molecules rising)
        p.vy -= 0.005 / p.mass;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Life cycle
        p.life++;
        if (p.life > p.maxLife || p.x < -10 || p.x > canvas.width + 10 || p.y < -10 || p.y > canvas.height + 10) {
          particles[i] = createParticle(canvas);
          continue;
        }

        // Fade in/out based on life
        const lifeRatio = p.life / p.maxLife;
        const fadeOpacity = lifeRatio < 0.1 ? lifeRatio * 10 : lifeRatio > 0.9 ? (1 - lifeRatio) * 10 : 1;
        const currentOpacity = p.opacity * fadeOpacity;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        gradient.addColorStop(0, `${p.color}${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `${p.color}0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const opacity = (1 - dist / 80) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = dark ? `rgba(255,255,255,${opacity})` : `rgba(211,47,47,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [count, interactive, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: interactive ? 'none' : 'none' }}
    />
  );
}
