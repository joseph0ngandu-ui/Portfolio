"use client";

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Particle system for shooting pulses
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            color: string;
            alpha: number;
            life: number;
            maxLife: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;

                // Shooting direction - more horizontal bias for dramatic effect
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 1; // Reduced from 3+2 to 2+1
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;

                this.radius = Math.random() * 2 + 0.5; // Reduced from 3+1 to 2+0.5

                // Warm vibrant colors with reduced opacity
                const colors = [
                    'rgba(218, 165, 32, 0.6)',   // Goldenrod - reduced from 1 to 0.6
                    'rgba(255, 193, 7, 0.5)',    // Amber - reduced from 1 to 0.5
                    'rgba(255, 140, 0, 0.5)',    // Dark orange - reduced from 1 to 0.5
                    'rgba(184, 134, 11, 0.6)',   // Dark goldenrod - reduced from 1 to 0.6
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                this.alpha = 1;
                this.life = 0;
                this.maxLife = Math.random() * 60 + 40;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life++;

                // Fade out as particle ages
                this.alpha = 1 - (this.life / this.maxLife);

                return this.life < this.maxLife;
            }

            draw() {
                if (!ctx) return;

                ctx.save();
                ctx.globalAlpha = this.alpha;

                // Glow effect
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius * 3
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // Energy pulse that shoots across screen
        class Pulse {
            x: number;
            y: number;
            targetX: number;
            targetY: number;
            progress: number;
            width: number;
            color: string;
            glow: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                // Start from random edge
                const startSide = Math.floor(Math.random() * 4);
                if (startSide === 0) { // Top
                    this.x = Math.random() * canvasWidth;
                    this.y = 0;
                } else if (startSide === 1) { // Right
                    this.x = canvasWidth;
                    this.y = Math.random() * canvasHeight;
                } else if (startSide === 2) { // Bottom
                    this.x = Math.random() * canvasWidth;
                    this.y = canvasHeight;
                } else { // Left
                    this.x = 0;
                    this.y = Math.random() * canvasHeight;
                }

                // Random target on opposite side
                this.targetX = Math.random() * canvasWidth;
                this.targetY = Math.random() * canvasHeight;

                this.progress = 0;
                this.width = Math.random() * 1.5 + 0.5; // Reduced from 2+1 to 1.5+0.5

                const colors = [
                    'rgba(218, 165, 32, 0.4)',  // Reduced from 0.8 to 0.4
                    'rgba(255, 193, 7, 0.3)',   // Reduced from 0.8 to 0.3
                    'rgba(255, 140, 0, 0.3)',   // Reduced from 0.8 to 0.3
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.glow = 5; // Reduced from 10 to 5
            }

            update() {
                this.progress += 0.02;
                return this.progress < 1;
            }

            draw() {
                if (!ctx) return;

                const currentX = this.x + (this.targetX - this.x) * this.progress;
                const currentY = this.y + (this.targetY - this.y) * this.progress;

                ctx.save();
                ctx.shadowBlur = this.glow;
                ctx.shadowColor = this.color;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(currentX, currentY);
                ctx.stroke();

                ctx.restore();
            }
        }

        // Grid nodes that pulse
        class GridNode {
            x: number;
            y: number;
            baseRadius: number;
            radius: number;
            pulseOffset: number;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseRadius = 2;
                this.radius = this.baseRadius;
                this.pulseOffset = Math.random() * Math.PI * 2;

                const colors = [
                    'rgba(184, 134, 11, 0.4)',
                    'rgba(218, 165, 32, 0.4)',
                    'rgba(255, 193, 7, 0.3)',
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update(time: number) {
                this.radius = this.baseRadius + Math.sin(time * 0.002 + this.pulseOffset) * 1.5;
            }

            draw() {
                if (!ctx) return;

                ctx.save();
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Create grid nodes
        const gridNodes: GridNode[] = [];
        const gridSpacing = 100;
        for (let x = 0; x < canvas.width; x += gridSpacing) {
            for (let y = 0; y < canvas.height; y += gridSpacing) {
                if (Math.random() > 0.7) { // Only create some nodes for sparse effect
                    gridNodes.push(new GridNode(x + Math.random() * 50, y + Math.random() * 50));
                }
            }
        }

        const particles: Particle[] = [];
        const pulses: Pulse[] = [];
        let particleSpawnTimer = 0;
        let pulseSpawnTimer = 0;

        // Animation loop
        let animationFrameId: number;
        let time = 0;

        const animate = () => {
            time++;

            // Clear canvas
            ctx.fillStyle = 'rgb(250, 249, 246)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw grid nodes
            gridNodes.forEach(node => {
                node.update(time);
                node.draw();
            });

            // Spawn particles periodically
            particleSpawnTimer++;
            if (particleSpawnTimer > 15) { // Increased from 5 to 15
                particleSpawnTimer = 0;
                const spawnX = Math.random() * canvas.width;
                const spawnY = Math.random() * canvas.height;
                for (let i = 0; i < 2; i++) { // Reduced from 3 to 2 particles per spawn
                    particles.push(new Particle(spawnX, spawnY));
                }
            }

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const particle = particles[i];
                if (!particle.update()) {
                    particles.splice(i, 1);
                } else {
                    particle.draw();
                }
            }

            // Spawn pulses periodically
            pulseSpawnTimer++;
            if (pulseSpawnTimer > 120) { // Increased from 60 to 120
                pulseSpawnTimer = 0;
                pulses.push(new Pulse(canvas.width, canvas.height));
            }

            // Update and draw pulses
            for (let i = pulses.length - 1; i >= 0; i--) {
                const pulse = pulses[i];
                if (!pulse.update()) {
                    pulses.splice(i, 1);
                } else {
                    pulse.draw();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ background: 'rgb(250, 249, 246)' }}
        />
    );
}
