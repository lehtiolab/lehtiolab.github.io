import React, { useEffect, useRef } from "react";
export default function ParticleBackground({
	fullScreen = true,
	baseDensity = 0.00025,
	color = "#0f4255b3",
	glowColor = "rgba(15,66,85,0.7)",
	glowBlur = 6,
	speedScale = 1,
	className,
	style,
}) {
	const wrapperRef = useRef(null);
	const canvasRef = useRef(null);
	const rafRef = useRef(null);
	const particlesRef = useRef([]);
	const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
	const reducedRef = useRef(false);
	const lastRef = useRef(performance.now());

	// layer configuration (weights must sum ~1)
	const LAYERS = useRef([
		{ weight: 0.35, duration: 60,  size: [1.0, 2.0] },
		{ weight: 0.30, duration: 120, size: [1.0, 2.0] },
		{ weight: 0.20, duration: 180, size: [1.1, 2.4] },
		{ weight: 0.15, duration: 200, size: [0.7, 1.2] },
	]).current;

	const rand = (a, b) => Math.random() * (b - a) + a;

	function resize() {
		const wrapper = wrapperRef.current;
		const canvas = canvasRef.current;
		if (!wrapper || !canvas) return;

		const rect = wrapper.getBoundingClientRect();
		const w = Math.max(1, rect.width);
		const h = Math.max(1, rect.height);
		const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

		sizeRef.current = { w, h, dpr };
		canvas.width = Math.round(w * dpr);
		canvas.height = Math.round(h * dpr);

		const ctx = canvas.getContext("2d", { alpha: true });
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		// rebuild particle field
		const total = Math.max(50, Math.round(w * h * baseDensity));
		const particles = [];
		LAYERS.forEach(layer => {
			const count = Math.max(1, Math.round(total * layer.weight));
			const baseVy = (h / layer.duration) * speedScale;
			for (let i = 0; i < count; i++) {
				const r = rand(layer.size[0], layer.size[1]);
				particles.push({
				x: rand(0, w),
				y: rand(0, h),
				r,
				vy: baseVy * rand(0.85, 1.15),
				vx: rand(-6, 6) * (r / 2), // gentle horizontal drift
				alpha: rand(0.45, 0.85),
				});
			}
		});
		particlesRef.current = particles;
	}

	function drawStatic() {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: true });

		ctx.clearRect(0, 0, sizeRef.current.w, sizeRef.current.h);
		ctx.fillStyle = color;
		ctx.shadowColor = glowColor;
		ctx.shadowBlur = glowBlur;

		for (const p of particlesRef.current) {
			ctx.globalAlpha = p.alpha;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
	}

	function tick(now) {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: true });
		const { w, h } = sizeRef.current;

		const dt = Math.min(0.05, (now - lastRef.current) / 1000); // safety cap
		lastRef.current = now;

		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = color;
		ctx.shadowColor = glowColor;
		ctx.shadowBlur = glowBlur;

		for (const p of particlesRef.current) {
			// update
			p.y -= p.vy * dt;
			p.x += p.vx * dt;

			// wrap
			if (p.y < -p.r) p.y = h + p.r;
			if (p.x < -p.r) p.x = w + p.r;
			if (p.x >  w + p.r) p.x = -p.r;

			// draw
			ctx.globalAlpha = p.alpha;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1;

		rafRef.current = requestAnimationFrame(tick);
	}

	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updateReduced = () => { reducedRef.current = mq.matches; };
		updateReduced();
		mq.addEventListener?.("change", updateReduced);

		resize();
		const onResize = () => resize();
		window.addEventListener("resize", onResize, { passive: true });

		if (reducedRef.current) {
			drawStatic();
		} else {
			lastRef.current = performance.now();
			rafRef.current = requestAnimationFrame(tick);
		}

		return () => {
			window.removeEventListener("resize", onResize);
			mq.removeEventListener?.("change", updateReduced);
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = null;
		};
	}, [baseDensity, color, glowColor, glowBlur, speedScale]);

	const wrapperStyle = {
		background: "#eaf7fb",
		position: fullScreen ? "fixed" : "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		pointerEvents: "none",
		zIndex: -1,
		...style,
	};

	return (
		<div ref={wrapperRef} className={className} style={wrapperStyle} aria-hidden="true">
			<canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
		</div>
	);
}
