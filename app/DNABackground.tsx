"use client"

import React, { useRef, useEffect, useState } from "react"; // Import useState
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
// import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"; // Keep commented if testing without bloom

// --- 配置参数 ---
const POINT_COUNT = 1000;
const STRAND_COUNT = 2;
const POINT_SIZE = 0.2;
const POINT_OPACITY = 0.5;
const ROTATION_SPEED = 0.001;

// --- Bloom parameters (if you re-enable bloom pass) ---
// const BLOOM_STRENGTH = 0.2; // Example: Start low if re-enabling
// const BLOOM_RADIUS = 0.1;
// const BLOOM_THRESHOLD = 0.8; // Example: Start high if re-enabling

const DNABackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    // No need for animationData ref if only storing geometries
    const geometriesRef = useRef<THREE.BufferGeometry[]>([]);
    // Ref to hold material for disposal
    const materialRef = useRef<THREE.PointsMaterial>();
    const starMaterialRef = useRef<THREE.PointsMaterial>(); // Ref for star material
    const composerRef = useRef<EffectComposer>(); // Ref for composer

    // --- Move texture loading and material creation inside useEffect ---
    // const textureLoader = new THREE.TextureLoader(); // REMOVE from here
    // const particleTexture = textureLoader.load('/particle.png'); // REMOVE from here
    // const pointsMaterial = useMemo(() => new THREE.PointsMaterial({...}), []); // REMOVE useMemo

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let frameId: number; // Declare frameId here

        const width = mount.clientWidth;
        const height = mount.clientHeight;

        // --- Core Three.js setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 5, 20);
        camera.lookAt(scene.position);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // --- Texture Loading and Material Creation (Client-side only) ---
        const textureLoader = new THREE.TextureLoader();
        const particleTexture = textureLoader.load('/particle.png'); // Now inside useEffect

        const pointsMaterial = new THREE.PointsMaterial({ // Create material here
            size: POINT_SIZE,
            map: particleTexture,
            alphaTest: 0.5,
            vertexColors: true,
            sizeAttenuation: true,
            transparent: true,
            opacity: POINT_OPACITY,
            blending: THREE.NormalBlending,
            depthWrite: false,
        });
        materialRef.current = pointsMaterial; // Store ref for cleanup

        // --- Post Processing ---
        const composer = new EffectComposer(renderer);
        composerRef.current = composer; // Store ref for cleanup
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        // --- Re-enable Bloom Pass (Optional, adjust parameters as needed) ---
        /*
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            BLOOM_STRENGTH,
            BLOOM_RADIUS,
            BLOOM_THRESHOLD
        );
        composer.addPass(bloomPass);
        */

        // --- Particle Generation ---
        const pointsGroup = new THREE.Group();
        const tempColor = new THREE.Color();
        const currentGeometries: THREE.BufferGeometry[] = []; // Local array for this effect run

        for (let strandIndex = 0; strandIndex < STRAND_COUNT; strandIndex++) {
            const geometry = new THREE.BufferGeometry();
            // ... (rest of geometry generation logic is the same) ...
            const positions = new Float32Array(POINT_COUNT * 3);
            const colors = new Float32Array(POINT_COUNT * 3);
            for (let i = 0; i < POINT_COUNT; i++) {
                const x = (Math.random() - 0.5) * 30;
                const y = (Math.random() - 0.5) * 30;
                const z = (Math.random() - 0.5) * 30;
                positions[i * 3 + 0] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
                const brightness = Math.max(0.3, Math.min(0.8, 0.55 + (y / 30) * 0.25));
                const hue = Math.random();
                tempColor.setHSL(hue, 0.9, brightness);
                colors[i * 3 + 0] = tempColor.r; colors[i * 3 + 1] = tempColor.g; colors[i * 3 + 2] = tempColor.b;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            currentGeometries.push(geometry); // Add to local array
            const points = new THREE.Points(geometry, pointsMaterial); // Use the material created above
            pointsGroup.add(points);
        }
        scene.add(pointsGroup);
        geometriesRef.current = currentGeometries; // Store geometries in ref for cleanup

        // --- Background Stars ---
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1000;
        // ... (star generation logic is the same) ...
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
             starPositions[i * 3] = (Math.random() - 0.5) * 250;
             starPositions[i * 3 + 1] = (Math.random() - 0.5) * 250;
             starPositions[i * 3 + 2] = (Math.random() - 0.5) * 250 - 50;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({
            size: 0.15, color: 0xffffff, transparent: true, opacity: 0.6,
            blending: THREE.AdditiveBlending, depthWrite: false,
        });
        starMaterialRef.current = starMaterial; // Store ref for cleanup
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
        currentGeometries.push(starGeometry); // Also track star geometry for disposal

        // --- Animation Loop ---
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            pointsGroup.rotation.y += ROTATION_SPEED;
            composer.render(); // Render using composer
            // renderer.render(scene, camera); // Or use this if composer has only RenderPass
        };
        animate();

        // --- Resize Handler ---
        const handleResize = () => {
            if (!mount) return;
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
            // if (bloomPass) bloomPass.resolution.set(w, h); // Resize bloom pass if it exists
        };
        window.addEventListener('resize', handleResize);

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            // Dispose geometries
            geometriesRef.current.forEach(geom => geom.dispose());
            geometriesRef.current = []; // Clear ref
            // Dispose materials
            materialRef.current?.map?.dispose(); // Dispose texture map
            materialRef.current?.dispose();
            starMaterialRef.current?.dispose();
            // Dispose composer and renderer
            composerRef.current?.dispose();
            renderer.dispose();
        };
    }, []); // Empty dependency array: run effect only once on mount

    return (
        // JSX structure remains the same
        <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
                maskImage: "radial-gradient(ellipse 65% 80% at 50% 50%, black 50%, transparent 85%)",
                opacity: 0.2,
                backdropFilter: 'blur(5px)',
            }}
        >
            <div ref={mountRef} className="w-full h-full" />
        </div>
    );
};

export default DNABackground;