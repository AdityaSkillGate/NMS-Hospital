'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export const Medical3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / (width || 1) - 0.5;
      const y = (e.clientY - rect.top) / (height || 1) - 0.5;
      targetMouseX = x * 35;
      targetMouseY = y * 35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize 3D Floating Bio-Particles
    const particleCount = 40;
    const particles: Particle[] = [];
    const colors = ['#38bdf8', '#0ea5e9', '#34d399', '#10b981', '#a7f3d0'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 800,
        z: Math.random() * 800 + 100,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;

      // Smooth mouse interpolation (lerp)
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.68 + currentMouseX;
      const centerY = height * 0.48 + currentMouseY;
      const focalLength = 500;

      // 1. RENDER 3D FLOATING PARTICLES (BACKGROUND DEPTH)
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -600) p.x = 600;
        if (p.x > 600) p.x = -600;
        if (p.y < -400) p.y = 400;
        if (p.y > 400) p.y = -400;

        const scale = focalLength / (p.z + focalLength);
        const projX = width * 0.5 + p.x * scale + currentMouseX * 0.5;
        const projY = height * 0.5 + p.y * scale + currentMouseY * 0.5;

        if (projX > 0 && projX < width && projY > 0 && projY < height) {
          ctx.beginPath();
          ctx.arc(projX, projY, p.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * scale * 0.5;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      // 2. RENDER 3D HOLOGRAPHIC MEDICAL CROSS WITH PULSING RADAR RINGS
      const crossSize = Math.min(width, height) * 0.16;
      const crossZ = 120 + Math.sin(time * 1.5) * 20;
      const crossScale = focalLength / (crossZ + focalLength);
      const crossX = centerX;
      const crossY = centerY - crossSize * 0.3;

      // Concentric Sonar Pulse Rings
      for (let r = 0; r < 3; r++) {
        const ringProgress = (time * 0.6 + r * 0.33) % 1;
        const ringRadius = crossSize * (1 + ringProgress * 2.2) * crossScale;
        const ringAlpha = (1 - ringProgress) * 0.28;

        ctx.beginPath();
        ctx.arc(crossX, crossY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${ringAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 3. RENDER 3D ROTATING DNA DOUBLE-HELIX (RIGHT FLANK)
      const helixNodes = 28;
      const helixHeight = Math.min(height * 0.85, 540);
      const helixRadius = Math.min(width * 0.14, 110);

      for (let i = 0; i < helixNodes; i++) {
        const progress = i / helixNodes;
        const yPos = centerY - helixHeight * 0.5 + progress * helixHeight;
        const angle = time * 1.2 + progress * Math.PI * 3.5;

        // Strand A: Trust Sky Blue
        const x1 = centerX + Math.cos(angle) * helixRadius;
        const z1 = Math.sin(angle) * helixRadius;
        const scale1 = focalLength / (z1 + 300);
        const radius1 = Math.max(2, 5.5 * scale1);
        const alpha1 = Math.max(0.15, Math.min(1, scale1 * 0.9));

        // Strand B: Vital Emerald Green (Opposite phase)
        const x2 = centerX + Math.cos(angle + Math.PI) * helixRadius;
        const z2 = Math.sin(angle + Math.PI) * helixRadius;
        const scale2 = focalLength / (z2 + 300);
        const radius2 = Math.max(2, 5.5 * scale2);
        const alpha2 = Math.max(0.15, Math.min(1, scale2 * 0.9));

        // Connecting Base Pair (Hydrogen Bond)
        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(x1, yPos);
          ctx.lineTo(x2, yPos);
          ctx.strokeStyle = `rgba(56, 189, 248, ${(alpha1 + alpha2) * 0.18})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Draw Strand A Sphere (Blue)
        ctx.beginPath();
        ctx.arc(x1, yPos, radius1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha1})`;
        ctx.shadowColor = '#0ea5e9';
        ctx.shadowBlur = 8 * scale1;
        ctx.fill();

        // Draw Strand B Sphere (Emerald)
        ctx.beginPath();
        ctx.arc(x2, yPos, radius2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${alpha2})`;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 8 * scale2;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      // 4. REAL-TIME VITAL CARDIAC ECG WAVEFORM TRACE (BOTTOM OVERLAY)
      const ecgY = height * 0.88;
      const ecgWidth = width;
      const sweepX = (time * 140) % (ecgWidth || 1);

      ctx.beginPath();
      ctx.moveTo(0, ecgY);

      const ecgWaveform = (x: number) => {
        const cycle = (x + time * 120) % 220;
        if (cycle > 40 && cycle < 55) return -Math.sin(((cycle - 40) / 15) * Math.PI) * 8; // P Wave
        if (cycle >= 60 && cycle < 65) return 6; // Q Dip
        if (cycle >= 65 && cycle < 80) return -Math.sin(((cycle - 65) / 15) * Math.PI) * 38; // R Spike
        if (cycle >= 80 && cycle < 88) return 12; // S Dip
        if (cycle >= 98 && cycle < 125) return -Math.sin(((cycle - 98) / 27) * Math.PI) * 12; // T Wave
        return 0; // Baseline
      };

      for (let x = 0; x < ecgWidth; x += 3) {
        const y = ecgY + ecgWaveform(x);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(14, 165, 233, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Glowing leading pulse dot
      const pulseY = ecgY + ecgWaveform(sweepX);
      ctx.beginPath();
      ctx.arc(sweepX, pulseY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85 mix-blend-screen"
      style={{ display: 'block', width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
};
