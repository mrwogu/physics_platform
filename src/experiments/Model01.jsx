import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Model01() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create a geometry
        const geometry = new THREE.BoxGeometry();

        // Create a material
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Create a mesh
        const cube = new THREE.Mesh(geometry, material);

        // Add the mesh to the scene
        scene.add(cube);

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);

            // Rotate the cube
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Render the scene with the camera
            renderer.render(scene, camera);
        };

        animate();

        // Clean up on unmount
        return () => {
            scene.remove(cube);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} />;
}

export default Model01;
