import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

const NEON_COLORS = ["#06b6d4", "#5b9df3", "#458af1", "#6366f1"];

function DebrisField({ count = 2000 }) {
    const asteroidRef = useRef<THREE.InstancedMesh>(null!);
    const sphereRef = useRef<THREE.InstancedMesh>(null!);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Split count between two types
    const asteroidCount = Math.floor(count / 2);
    const sphereCount = count - asteroidCount;

    const asteroids = useMemo(() => {
        const temp = [];
        for (let i = 0; i < asteroidCount; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 120,
                y: (Math.random() - 0.5) * 120,
                z: (Math.random() - 0.5) * 100,
                rx: Math.random() * Math.PI,
                ry: Math.random() * Math.PI,
                rz: Math.random() * Math.PI,
                rotSpeedX: (Math.random() - 0.5) * 0.02,
                rotSpeedY: (Math.random() - 0.5) * 0.02,
                size: Math.random() * 0.3 + 0.1,
                color: new THREE.Color(NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)])
            });
        }
        return temp;
    }, [asteroidCount]);

    const spheres = useMemo(() => {
        const temp = [];
        for (let i = 0; i < sphereCount; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 120,
                y: (Math.random() - 0.5) * 120,
                z: (Math.random() - 0.5) * 100,
                rx: Math.random() * Math.PI,
                ry: Math.random() * Math.PI,
                rotSpeedX: (Math.random() - 0.5) * 0.01,
                rotSpeedY: (Math.random() - 0.5) * 0.01,
                size: Math.random() * 0.2 + 0.05,
                color: new THREE.Color(NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)])
            });
        }
        return temp;
    }, [sphereCount]);

    // Apply colors on mount/refresh
    useFrame((_state, delta) => {
        // Optimization: Only set colors once. 
        // Since we can't easily use useEffect with refs that might be null initially without a check,
        // we do a quick check here. This runs every frame but the `if` is cheap.
        if (asteroidRef.current && !asteroidRef.current.userData.colorsSet) {
            asteroids.forEach((data, i) => asteroidRef.current.setColorAt(i, data.color));
            asteroidRef.current.instanceColor!.needsUpdate = true;
            asteroidRef.current.userData.colorsSet = true;
        }
        if (sphereRef.current && !sphereRef.current.userData.colorsSet) {
            spheres.forEach((data, i) => sphereRef.current.setColorAt(i, data.color));
            sphereRef.current.instanceColor!.needsUpdate = true;
            sphereRef.current.userData.colorsSet = true;
        }

        const speed = 25 * delta;

        // Update Asteroids
        if (asteroidRef.current) {
            asteroids.forEach((particle, i) => {
                particle.z += speed;
                if (particle.z > 20) particle.z = -100;
                particle.rx += particle.rotSpeedX;
                particle.ry += particle.rotSpeedY;
                dummy.position.set(particle.x, particle.y, particle.z);
                dummy.rotation.set(particle.rx, particle.ry, particle.rz);
                dummy.scale.set(particle.size, particle.size, particle.size);
                dummy.updateMatrix();
                asteroidRef.current.setMatrixAt(i, dummy.matrix);
            });
            asteroidRef.current.instanceMatrix.needsUpdate = true;
        }

        // Update Spheres
        if (sphereRef.current) {
            spheres.forEach((particle, i) => {
                particle.z += speed;
                if (particle.z > 20) particle.z = -100;
                dummy.position.set(particle.x, particle.y, particle.z);
                dummy.rotation.set(particle.rx, particle.ry, 0); // Spheres don't need rotZ really
                // Rotate sphere slowly?
                particle.rx += particle.rotSpeedX;
                particle.ry += particle.rotSpeedY;
                dummy.rotation.set(particle.rx, particle.ry, 0);

                dummy.scale.set(particle.size, particle.size, particle.size);
                dummy.updateMatrix();
                sphereRef.current.setMatrixAt(i, dummy.matrix);
            });
            sphereRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <group>
            {/* Asteroids (Icosahedrons) */}
            <instancedMesh ref={asteroidRef} args={[undefined, undefined, asteroidCount]}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    roughness={0.7}
                    metalness={0.2}
                    color="#ffffff"
                />
            </instancedMesh>

            {/* Spheres (High Detail, Shiny) */}
            <instancedMesh ref={sphereRef} args={[undefined, undefined, sphereCount]}>
                <icosahedronGeometry args={[1, 4]} />
                <meshStandardMaterial
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#ffffff"
                    emissiveIntensity={0.1}
                    color="#ffffff"
                />
            </instancedMesh>
        </group>
    );
}

function FloatingShapes() {
    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Decoration shapes */}
                <Icosahedron args={[1, 0]} position={[8, 2, -10]}>
                    <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.3} />
                </Icosahedron>
                <Icosahedron args={[1.5, 0]} position={[-8, -4, -15]}>
                    <meshStandardMaterial color="#ec4899" wireframe transparent opacity={0.3} />
                </Icosahedron>
                <Icosahedron args={[0.5, 0]} position={[5, -5, -5]}>
                    <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.3} />
                </Icosahedron>
            </Float>
        </group>
    )
}

export default function Wormhole() {
    const { theme } = useTheme();

    // Determine the actual background color based on theme and system preference
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const bgColor = isDark ? '#020617' : '#f8fafc'; // slate-950 vs slate-50

    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: false, alpha: false }}>
                <color attach="background" args={[bgColor]} />
                <ambientLight intensity={isDark ? 0.5 : 1} />
                <DebrisField />
                <FloatingShapes />
            </Canvas>
        </div>
    )
}
